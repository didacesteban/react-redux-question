import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import SendQuestion from './reducer-send-question';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    sendQuestion: SendQuestion
});

export default allReducers
