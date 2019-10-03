import { combineReducers } from 'redux';
import contentReducer from './contentReducer';
import sermonReducer from './sermonReducer';
import dailyDevotionReducer from './dailyDevotionReducer';
import postsReducer from './postsReducer';
import bulletinReducer from './bulletinReducer'

export default combineReducers({
    contentReducer,
    sermonReducer,
    dailyDevotionReducer,
    postsReducer,
    bulletinReducer
});