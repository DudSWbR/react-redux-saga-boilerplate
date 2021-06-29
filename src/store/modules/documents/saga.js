import { call, put, takeLatest } from "redux-saga/effects";
import api from "~/services/api";
import { Types as DocumentsTypes } from "./actions";

export function* getDocuments() {
  try {
    const { data } = yield call(api.get, "/document-types");

    yield put({ type: DocumentsTypes.GET_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: DocumentsTypes.GET_FAILURE });
  }
}

export default function* saga() {
  yield takeLatest(DocumentsTypes.GET_REQUEST, getDocuments);
}
