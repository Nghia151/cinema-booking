import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import homeReducers from 'containers/client/Home/module/reducers';
import movieDetailReducer from 'containers/client/MovieDetail/module/reducers';
import quanLyDatVeReducer from 'containers/client/SeatPlan/module/reducers';
import QuanLyUserReducer from 'containers/client/Infomation/module/reducers';
const rootReducer = combineReducers({
  homeReducers,
  movieDetailReducer,
  quanLyDatVeReducer,
  QuanLyUserReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;