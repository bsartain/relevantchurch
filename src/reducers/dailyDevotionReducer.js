import { DAILY_DEVOTION } from '../actions/simpleAction' 

export default (state = {}, action) => {
  
    switch (action.type) {

    case DAILY_DEVOTION:
      return {
        result: action.payload
      }

    default:
      return state
    }
}