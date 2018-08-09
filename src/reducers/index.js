import { combineReducers } from 'redux';
import UserInfoReducer from './user_info_reducer';

const rootReducer = combineReducers({
    userInfo: UserInfoReducer
});

export default rootReducer;