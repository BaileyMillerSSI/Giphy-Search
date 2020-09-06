import { Reducer } from "./Reducer";
import { defaultState } from "./State";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import ValidationMiddleware from "./ValidationMiddleware";

const composeEnhancers = composeWithDevTools({ trace: false }); // trace: true if you want tracing
const enhancer = composeEnhancers(applyMiddleware(...[thunkMiddleware, ValidationMiddleware]));

const configureStore = () => createStore(Reducer, defaultState, enhancer);

export default configureStore;