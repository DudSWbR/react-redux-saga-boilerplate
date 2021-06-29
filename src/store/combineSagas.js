import { all, fork } from 'redux-saga/effects';
import documents from './modules/documents/saga';


export default function* root() {
  yield all([
    fork(documents),
  ]);
}
