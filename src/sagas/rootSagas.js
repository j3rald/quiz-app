import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import questionsSaga from './questionsSaga';
import answerSaga from './answerSaga';

export default function* rootSaga() {
  yield all([fork(authSaga),fork(questionsSaga),fork(answerSaga)]);
}


