import React, { Component } from 'react';

class Addphoto extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(evt){
        evt.preventDefault()
        const imageLink = evt.target.elements.link.value
        const description = evt.target.elements.description.value

        if(imageLink && description){
            const post={
                id: Number( new Date() ),
                description,
                imageLink
            }

            // this.props.addPost(post)
            // firebase async promise
            this.props.startAddingPost(post)
            this.props.history.push('/')
            // console.log(this.props)
        }
    }
    //
    render(){
        return (
            <div>
                
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Addphoto