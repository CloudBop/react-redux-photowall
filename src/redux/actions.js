// - Actions 
// ```````````````````````````````````````````````````
// ACTIONS ARE STRICTLY JS OBJECTS
// functions are `action creaters`
// the return object is the `action`

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
export { removePost, addPost, addComment }