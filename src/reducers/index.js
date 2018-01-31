import { combineReducers } from 'redux';
//'as' is used to rename to formReducer to avoid duplicates of reducer
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
   posts: PostsReducer,
   form: formReducer 
});

export default rootReducer;
