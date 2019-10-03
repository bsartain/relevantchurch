import { BULLETIN_DATA } from '../actions/simpleAction' 

export default (state = {}, action) => {
  
    switch (action.type) {

    case BULLETIN_DATA:
      return {
        result: action.payload
      }

    default:
      return state
    }
    
   }