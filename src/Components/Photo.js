import React from 'react';
import PropTypes from 'prop-types'

// could use destructuring ?s
const Photo=(props)=>{
    const post = props.post;
    // console.log(props)
    return(

    <figure className='figure'>
        <img className="photo" src={post.imageLink} alt={post.description}/>
        <figcaption> <p> { post.description } </p></figcaption>
        <div className="button-container">
            <button className="remove-button" onClick= {()=>{
                // passed down from Main.js
                props.onRemovePhoto(post)
            }}>> Remove</button>
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
