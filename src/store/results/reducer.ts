import { Reducer } from 'redux'
import { ResultsState, ResultsActionTypes } from './types';

export const initialState: ResultsState = {
    data: [],
    loading: false
}

export const reducer: Reducer<ResultsState> = (state = initialState, action) => {
    switch (action.type) {
        case ResultsActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true }
        }
        case ResultsActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload }
        }
        case ResultsActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, errors: action.payload }
        }
        default: {
            return state
        }
    }
}

