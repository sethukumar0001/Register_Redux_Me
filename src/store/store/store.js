import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootreducer from '../reducers/index';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootreducer,
    
    compose(applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
)
)