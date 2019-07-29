import React from 'react';
import Photo from './Photo'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// stateless functional component
const Photowall = (props) => (

    <div>
        <Link className="add-icon" to="/AddPhoto"></Link>
        <div className='photo-grid'>
            {props.posts
                // sort by largest number to smallest
                // AKA most recent to oldest
                // unix epoch = 1970 === 0
                .sort( function(x,y){
                    return y.id - x.id
                })
                .map( (post,index)=> <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
    </div>
    
)
// Defense programming of props.
Photowall.propTypes={
    posts: PropTypes.array.isRequired,
    // passed as action->reducer
    // onRemovePhoto: PropTypes.func.isRequired
}

// class based component
// class Photowall2 extends Component{
//     render(){
//         return (
//             <div className='photo-grid'>
//             {this.props.posts.map( (post,index)=> <Photo key={index} post={ post}/>)}
//             </div>
//         )
//     }
// }

export default Photowall