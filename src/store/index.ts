import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'

import { ResultsState } from './results/types'
import { reducer as resultsReducer } from './results/reducer'
import resultSaga from './results/sagas'
import { AuthState } from './authentication/types'
import { reducer as authReducer } from './authentication/reducer'
import authSaga from './authentication/sagas'
import { History } from 'history'


export interface ApplicationState {
    results: ResultsState
    auth:AuthState
    router: RouterState
}

export const createRootReducer = (history:History) => combineReducers({
    results: resultsReducer,
    auth: authReducer,
    router: connectRouter(history)
})
    

export function* rootSaga() {
    yield all([fork(resultSaga), fork(authSaga)])
}