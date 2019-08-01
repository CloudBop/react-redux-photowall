import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// could use destructuring ?s
const Photo=(props)=>{
    const post = props.post;
    // console.log(props)
    return(

    <figure className='figure'>
        <Link to={`/single/${post.id}`}>  
            <img className="photo" src={post.imageLink} alt={post.description}/>
        </Link>
       
        <figcaption> <p> { post.description } </p></figcaption>
        <div className="button-container">
            <button className="remove-button" onClick= {()=>{
                // console.log(props) console.log(props.index, post.id)
                props.startRemovingPost(props.index, post.id)
                // props.removePost(props.index)
                props.history.push('/')
            }}>> Remove</button>
            <Link className="button" to={`/single/${post.id}`}>
            <div className="comment-count"> 
                <div className="speech-bubble"> </div>
                {props.comments[post.id] ? props.comments[post.id].length : 0 }
            </div>
            </Link>

            
        </div>
        
    </figure>)
}
// Defense programming of props.
Photo.propTypes={
    post: PropTypes.object.isRequired,
    // now as action->reducer
    // onRemovePhoto: PropTypes.func.isRequired
}
// class Photo extends Component{
//     render(){
//         const post = this.props.post
//         return (
//             <figure className='figure'>
//                 <img className="photo" src={post.imageLink} alt={post.description}/>
//                 <figcaption> <p> { post.description } </p></figcaption>
//                 <div className="button-container">
//                     <button className="remove-button"> Remove</button>
//                 </div>
                
//             </figure>
//         )
//     }
// }

export default Photo
