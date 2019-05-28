import {combineReducers} from 'redux';
import QuestionActions from './reducer-send-question';

const allReducers = combineReducers({
    questionActions: QuestionActions
});

export default allReducers
