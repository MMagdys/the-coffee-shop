import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Drinks} from './drinks';
import {Comments} from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            drinks: Drinks,
            comments: Comments,
          
        }),
        applyMiddleware(thunk, logger)
    );

    
    return store;
}