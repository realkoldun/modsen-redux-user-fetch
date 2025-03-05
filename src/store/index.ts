import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './reducer'
import {thunk, ThunkDispatch} from "redux-thunk";
import {FetchUsersActionsType} from "./actions/types";


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, FetchUsersActionsType>;
export default store

