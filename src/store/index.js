import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import homeReducers from 'containers/client/Home/module/reducers';
import movieDetailReducer from 'containers/client/MovieDetail/module/reducer';
const rootReducer = combineReducers({
  homeReducers,
  movieDetailReducer,
});
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;