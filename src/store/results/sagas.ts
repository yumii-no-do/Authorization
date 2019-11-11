import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

import { callApi } from '../../utils/api'
import { fetchSuccess, fetchError } from './actions'
import { ResultsActionTypes } from './types'


function* handleFetch() {
    try {
        const res = yield call(callApi, 'get', 'some.com', '/productsCounted')
        if (res.error) {
            yield put(fetchError(res.error))
        } else {
            yield put(fetchSuccess(res))
        }
    } catch (error) {
        yield put(fetchError(error))
    }
}

function* watchFetchRequest() {
    yield takeEvery(ResultsActionTypes.FETCH_REQUEST, handleFetch)
}

function* resultSaga() {
    yield all([fork(watchFetchRequest)])
}
export default resultSaga
