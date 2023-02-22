import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import apiGenerator from '../utils/apiGenerator';
import axiosInstance from '../utils/axiosInstance';

function* login({ payload, meta }) {
  try {
    const res = yield call(axiosInstance, {
      method: "POST",
      url: "auth/login",
      data: payload,
    });
    yield put({
      type: "LOGIN_SUCCESS",
      payload: res,
      meta,
    });
  } catch (error) {
    yield put({
      type: "LOGIN_FAIL",
      payload: error,
      meta,
    });
  }
}

function* register({ payload, meta }) {
  try {
    const res = yield call(axiosInstance, {
      method: "POST",
      url: "auth/register",
      data: payload,
    });
    yield put({
      type: "LOGIN_SUCCESS",
      payload: res,
      meta,
    });
  } catch (error) {
    yield put({
      type: "LOGIN_FAIL",
      payload: error,
      meta,
    });
  }
}

function* tokenLogin({ payload }) {
  yield put({
    type: "LOGIN_SUCCESS",
    payload,
  });
}

function* loginToken() {
  yield takeLatest("TOKEN_LOGIN", tokenLogin);
}

function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', login);
}

function* registerRequest() {
  yield takeLatest('REGISTER_REQUEST', register);
}

export default function* rootAuthSaga() {
  yield all([fork(loginRequest), fork(registerRequest), fork(loginToken)]);
}
