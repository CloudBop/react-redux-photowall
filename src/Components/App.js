import Main from './Main'
import {connect} from 'react-redux'
// - REDUX DECOUPLING - App.js === container component
// ```````````````````````````````````````````````````
// connect could be stored on components. EG Main This example is decoupling functionality.
function mapStateToProps(state){
    return{
        posts: state
    }
}

const App = connect(mapStateToProps)(Main)

export default App