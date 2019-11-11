import { ResultsActionTypes, CountedProduct } from './types'
import { action } from 'typesafe-actions';

export const fetchSuccess = (data: CountedProduct[]) => action(ResultsActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(ResultsActionTypes.FETCH_ERROR, message)
export const fetchRequest = () => action(ResultsActionTypes.FETCH_REQUEST)

