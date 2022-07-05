import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { restaurantListReducer } from './reducers/restaurantReducers'

const reducers= combineReducers({
    restaurantList : restaurantListReducer,
});

const middleware = [thunk]

const store = createStore(reducers,applyMiddleware(...middleware));

export default store

// configureStore instead of createStore , it is an updated version
// store created using reducers and middleware - these are building blocks
// handle many reducers combineReducers