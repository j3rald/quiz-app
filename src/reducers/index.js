import { combineReducers } from 'redux';
import user from './userReducer';
import questions from './questionsReducer';
import results from './resultsReducer';

export default combineReducers({
  user,
  questions,
  results
});
