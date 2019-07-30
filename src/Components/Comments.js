import React, {Component} from 'react';

class Comments extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(evt){
        evt.preventDefault()
        const comment = evt.target.elements.comment.value
        // console.log(comment)
        this.props.addComment(comment, this.props.id)

        evt.target.elements.comment.value = '';

    }

    render(){
        console.log(this.props.comments)
        return (
        <div className="comment">
        {
            this.props.comments.map( (comment, index)=>{
                return (
                    <p key={index}>  {comment} </p>
                )
            })
        }
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" name="comment" placeholder="comment" />
                <input type="submit" hidden/>
            </form>
        </div>)
    }
}

export default Comments