// - Actions 
// ```````````````````````````````````````````````````
// ACTIONS ARE STRICTLY JS OBJECTS (unless )
// functions are `action creaters`
// the return object is the `action`
import {database} from '../database/config'
// remove
const removePost = (index)=>{
    // console.log(index)
    return {
        type: "REMOVE_POST",
        index
    }
}

const addPost = (post)=>{
    // console.log('test')
    return {
        type:"ADD_POST",
        post
    }
}

const addComment = (comment, postId)=>{
    return {
        type:"ADD_COMMENT",
        comment,
        postId
    }
}

const loadPosts = (posts)=>{
    return {
        type: "LOAD_POSTS",
        posts
    }
}

const loadComments = (comments)=>{
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

// - Thunk MiddleWare 
// ```````````````````````````````````````````````````
// return  methods from from action generators
const startAddingPost = (post)=>{
    return (dispatch) =>{
        // firebase promise
        // root-> posts-> post#id
        return database.ref('posts').update({[post.id]: post})
        .then( ()=>{
            dispatch(addPost(post))
        }).catch((error)=>{
            console.log(error)
        })
    }
}

const startRemovingPost = (index, id)=>{

    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }

    return (dispatch) => {
        return database.ref().update(updates).then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
    

    // return (dispatch)=>{
    //     return database.ref(`posts/${id}`).remove().then( ()=>{
    //         dispatch( removePost(index) )
    //     } ).catch( err=> console.log(err))
    // }
}

const startLoadingPosts = ()=>{
    /*** firebase */
    return (dispatch)=>{
        // return everything in the root_node/posts
        return database.ref('posts').once('value')
            // .on - listen to database for changes. invoke function on change
            // .once - just invoke once
            .then( (snapshot)=>{
                // snapshot is a firebase object
                // all of the children nodes in /post
                let posts = []
                // console.log(snapshot)
                snapshot.forEach( (childSnaphot)=>{
                    posts.push( childSnaphot.val() )
                })
                // send action to reducer
                // console.log(posts)
                dispatch( loadPosts(posts) )
            }).catch((error)=>{
                console.log(error)
            })
    }
}

const startAddingComment = (comment, postId)=>{
    return (dispatch) =>{
        // firebase promise
        // root-> posts-> post#id
        return database.ref(`comments/${postId}`).push(comment).then( ()=>{
            dispatch(addComment(comment, postId) )
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

const startLoadingComments = ()=>{
    return (dispatch)=>{
        return database.ref('comments').once('value').then((snapshot)=>{
            let comments = {}
            snapshot.forEach( (childSnapshot)=>{
                // key - value
                comments[childSnapshot.key] = Object.values(childSnapshot.val())     
            })
            
            dispatch( loadComments(comments) )
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export { removePost, addPost, addComment, startAddingPost, startLoadingPosts, startRemovingPost, startAddingComment, startLoadingComments}