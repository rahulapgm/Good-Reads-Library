import { put, takeEvery, all } from 'redux-saga/effects'
import { GET_BOOK_LIST } from './constants';
import {fetchBookList} from './actions';
import axios from 'axios';

export function* getBookList() {
  const bookList = yield axios.get('/api/bookList')
  console.log(bookList)
  yield put(fetchBookList(bookList.data.obj.data))
  
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchgetBookList() {
  yield takeEvery(GET_BOOK_LIST, getBookList);
}
export default function* rootSaga() {
  yield all([
     watchgetBookList()
  ])
}