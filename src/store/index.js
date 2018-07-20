import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducer';
// import logger from 'redux-logger'
import thunk from 'redux-thunk';
import articlesMiddleware from '../middlewares/articlesMiddleware'

const enhancer = composeWithDevTools(applyMiddleware(thunk, articlesMiddleware));

const store = createStore(rootReducer, {}, enhancer);

window.store = store;

export default store;
