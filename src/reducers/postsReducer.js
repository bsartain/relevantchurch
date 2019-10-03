import { POSTS_DATA } from '../actions/simpleAction' 

export default (state = {}, action) => {
  
    switch (action.type) {

    case POSTS_DATA:
      return {
        result: action.payload
      }

    default:
      return state
    }
}