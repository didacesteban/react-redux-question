import {combineReducers} from 'redux';
import SendQuestion from './reducer-send-question';

const allReducers = combineReducers({
    sendQuestion: SendQuestion
});

export default allReducers
