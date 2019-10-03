import { SERMON_DATA } from '../actions/simpleAction' 

export default (state = {}, action) => {
  
    switch (action.type) {

    case SERMON_DATA:
      return {
        result: action.payload
      }

    default:
      return state
    }
}