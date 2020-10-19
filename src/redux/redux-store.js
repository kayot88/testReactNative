import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchImagesReducer } from "./../redux/duck";




let rootReducer = combineReducers({
  mainScreenState: fetchImagesReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

window.store = store;
