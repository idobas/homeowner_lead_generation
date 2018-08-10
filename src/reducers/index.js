import { combineReducers } from 'redux';
import UserInfoReducer from './user_info_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    userInfo: UserInfoReducer,
    form: formReducer
});

export default rootReducer;