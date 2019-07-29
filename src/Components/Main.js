import React, {Component} from 'react';
import Title from './Title'
import Photowall from './Photowall'
import Addphoto from './Addphoto'
import { Route } from 'react-router-dom'
// url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

export default class Main extends Component{
    // constructor manages state.
    constructor(){
        // super === intiate this for extended component
        super()
    }
    
    render(){
        // redux-store data!
        // console.log(this.props.posts)
        return(
            <div>
                <Route exact path="/"  render={ ()=>(
                    <div>
                        <Title title={'Photowall'}/>
                        
                        <Photowall 
                            posts={this.props.posts} 
                            // onRemovePhoto={this.removePhoto}
                            // onNavigate={this.navigate}
                        />
                        
                    </div>
                )}/>
                {/* 
                <Route path="/Addphoto" render ={ ({history}) =>(
                    <Addphoto onAddPhoto={(addedPost)=>{
                        this.addPhoto(addedPost)
                        history.push('/')
                    }}/>
                )}
                />
                */}
                
            </div>
        )
    }

}

