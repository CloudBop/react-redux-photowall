import React, {Component} from 'react';
// import Title from './Title'
import Photowall from './Photowall'
import Addphoto from './Addphoto'
import Single from './Single'
import { Route, Link } from 'react-router-dom'
// url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

export default class Main extends Component{
    // constructor manages state.
    constructor(){
        // super === intiate this for extended component
        super()
    }

    // componentDidMount(){
    //     this.props.removePost(1)
    // }
    
    render(){
        // redux-store data!
        // console.log(this.props)
        return(
            <div>
                <h1>
                    <Link to="/">Photowall </Link>
                </h1>
                <Route exact path="/"  render={ ()=>(
                    <div>            
                        <Photowall 
                            // es6 spread, pass all props inc dispatch || posts= props.post remove=props.remove
                            {...this.props} 
                            // onRemovePhoto={this.removePhoto}
                            // onNavigate={this.navigate}
                        />
                        
                    </div>
                )}/>
                {/*  example of obj destruct - params.history = {history}
                <Route path="/Addphoto" render ={ ( {history}) =>(
                    if not using withRouter, history is not auto passed as properties
                 <Addphoto {...this.props onHistory={history} }/>
                */}
                <Route path="/Addphoto" render ={ () =>(
                    <Addphoto {...this.props}/>
                )}
                />

                <Route path="/single/:id" render={ (params) =>(
                    // make sure props passed first or match property of params is over-ridden
                    <Single {...this.props} {...params}/>
                )}
                />
                
                
            </div>
        )
    }

}

