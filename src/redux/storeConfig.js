import { createStore, combineReducers,applyMiddleware  } from 'redux';
import logger from 'redux-logger';

import { Movies } from './reducers/movies';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            movies: Movies,
            
        }), applyMiddleware( logger)
    );

    return store;
}