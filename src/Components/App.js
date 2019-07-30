import Main from './Main'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router-dom'
// - REDUX DECOUPLING - App.js === container component
// ```````````````````````````````````````````````````
// connect could be stored on components. EG Main This example is decoupling functionality.
function mapStateToProps(state){
    return{
        posts: state.posts,
        comments: state.comments
    }
}
//
// assigns the dispatch onto the props object
function mapDispatchToProps(dispatch){
   return bindActionCreators( actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))


export default App