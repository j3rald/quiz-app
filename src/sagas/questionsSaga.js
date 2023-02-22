import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../utils/axiosInstance";

function* loadQuestions() {
  try {
    const res = yield call(axiosInstance, {
      method: "GET",
      url: "/questions",
    });

    yield put({
      type: "LOAD_QUESTIONS_SUCCESS",
      payload: res,
    });
  } catch (error) {}
}

function* getQuestionRequest() {
  yield takeLatest("LOAD_QUESTIONS_REQUEST", loadQuestions);
}

export default function* rootQuestion() {
  yield all([fork(getQuestionRequest)]);
}
