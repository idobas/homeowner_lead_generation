import { combineReducers } from 'redux';
import UserInfoReducer from './user_info_reducer';
import { reducer as formReducer } from 'redux-form';
import ProgressBarReducer from './progress_bar_reducer';

const rootReducer = combineReducers({
    userInfo: UserInfoReducer,
    form: formReducer,
    progressBar: ProgressBarReducer
});

export default rootReducer;