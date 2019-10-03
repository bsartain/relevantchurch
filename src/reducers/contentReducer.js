import { HOME_DATA } from '../actions/simpleAction' 

export default (state = {}, action) => {
  
    switch (action.type) {

    case HOME_DATA:
      return {
        result: action.payload
      }

    default:
      return state
    }
    
   }