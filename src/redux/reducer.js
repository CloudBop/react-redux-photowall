import _posts from '../data/posts'
import { combineReducers } from 'redux'
const comments = ( state={}, action )=>{

    switch (action.type) {
        case "ADD_COMMENT":
            // if state of this posts comment is undefined
            if( !state[action.postId] ){
                return {...state, [action.postId]: [action.comment] }
            } else {
                // if comment exists on post, concat to array
                return {...state, [action.postId]: [...state[action.postId], action.comment] }
            }
            //
        default:
            return state;
    }
}

const posts = (state = _posts, action)=>{
    // console.log(action.index)
    switch (action.type) {
        // remove post @ action.index
        // first spread.slice(index) first part of array before el to remove
        // second, everythingthing after el to remove
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index+1)]
        case 'ADD_POST': return [...state, action.post]


        // has to return some form of state object
        default: return state
    }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer