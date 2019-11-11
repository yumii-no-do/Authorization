import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { AnyAction} from 'redux'

import { callLogin } from '../../utils/api'
import { fetchSuccess, fetchError, fetchLogout } from './actions'
import { AuthActionTypes } from './types'
import {deleteToken } from '../../utils/auth';


function* handleFetch({ payload }: AnyAction) {
    try {
        const { isSave } = payload
        const res = yield call(callLogin, payload)
        
        if (res.hasOwnProperty('status') && res.status===200) {
            const { token } = res.result
            yield put(fetchSuccess(token, isSave))
        } else {
            yield put(fetchError(res.error))
        }
    } catch (error) {
        yield put(fetchError(error))
    }
}
function* watchFetchRequest() {
    yield takeLatest(AuthActionTypes.FETCH_REQUEST, handleFetch)
}

function* logout() {
    yield call(fetchLogout)
    yield call(deleteToken)
}

function* watchLogout() {
    yield takeLatest(AuthActionTypes.LOGOUT, logout)
}


function* authSaga() {
    yield all([fork(watchFetchRequest), fork(watchLogout)])
}

export default authSaga
