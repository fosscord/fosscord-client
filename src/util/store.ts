import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../reducers/";
import thunk from "redux-thunk";

// @ts-ignore
const devTools = global.__REDUX_DEVTOOLS_EXTENSION__ ? global.__REDUX_DEVTOOLS_EXTENSION__() : undefined;
const middlewares = [devTools, applyMiddleware(thunk)].filter((x) => x != undefined);

export default createStore(reducers, compose(...middlewares));
