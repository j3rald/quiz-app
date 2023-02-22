import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../utils/axiosInstance";

function* loadResults({ payload }) {
  try {
    const res = yield call(axiosInstance, {
      method: "GET",
      url: `answer/results?userId=${payload._id}`,
    });
    yield put({
      type: "LOAD_RESULT_SUCCESS",
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
}

function* finalAnswers({ payload}) {
  try {
    const res = yield call(axiosInstance, {
      method: "POST",
      url: "answer/submit",
      data: payload
      
    });
    yield put({
      type: "FINAL_ANSWER_SUCCESS",
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
}

function* submitAnswerRequest() {
  yield takeLatest("FINAL_ANSWERS_REQUEST", finalAnswers);
}

function* loadResultsRequest() {
  yield takeLatest("LOAD_RESULT_REQUEST", loadResults);
}

export default function* rootAnswerSaga() {
  yield all([fork(submitAnswerRequest),fork(loadResultsRequest)]);
}

// fork(loadHistoryRequest), 
