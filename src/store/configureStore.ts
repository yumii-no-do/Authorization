import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router'
import { History } from 'history'

import { createRootReducer, rootSaga } from './index';


const configureStore = (history:History)=> {
    const sagaMiddleware = createSagaMiddleware()
    const routerMiddleware = createRouterMiddleware(history)
    const middlewares = [sagaMiddleware, routerMiddleware];

    const initialState = {}

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares)),
    );

    sagaMiddleware.run(rootSaga)

    return store;
}
export default configureStore
