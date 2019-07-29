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
        // when state changes it triggers render methods in child components
        this.state ={
            posts: []
        }
        // give context to function invoked in child components of main
        this.removePhoto = this.removePhoto.bind(this)
    }
    // methods
    removePhoto(postRemoved){
        // console.log(postRemoved)
        // shorthand arrow returning object
        this.setState( (state)=>({
            // inside object 
            posts: state.posts.filter( post=>  post !== postRemoved)
            // if is equal then don't return!
        }))
    }
    addPhoto(postSubmitted){
        this.setState( state=>({
            // add this el to end of posts[array]
            posts: state.posts.concat([postSubmitted])
        }))
    }

    // lifecycle methods 
    componentDidMount(){
        // called after initial render
        const posts = simulateFetchFromDB();
        this.setState({ posts})
    }

    componentDidUpdate(prevProps, prevState){
        // console.log('msg rerendered')
        console.log(prevProps)
        console.log(prevState)
    }
    
    render(){
        return(
            <div>
                <Route exact path="/"  render={ ()=>(
                    <div>
                        <Title title={'Photowall'}/>
                        <Photowall 
                            posts={this.state.posts} 
                            onRemovePhoto={this.removePhoto}
                            onNavigate={this.navigate}
                        />
                    </div>
                )}/>

                <Route path="/Addphoto" render ={ ({history}) =>(
                    <Addphoto onAddPhoto={(addedPost)=>{
                        this.addPhoto(addedPost)
                        history.push('/')
                    }}/>
                )}
                />
                
            </div>
        )
    }

}

function simulateFetchFromDB(){
    return [{
        id: 0,
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: 1,
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
        }, {
        id: 2,
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
}