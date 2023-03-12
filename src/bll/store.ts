import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {saveState} from "../utils/localStorage";

const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState;
const persistedState = localStorage.getItem('app-state')
if (persistedState) {
    preloadedState = JSON.parse(persistedState)
}

export const store = createStore(
    rootReducer,
    preloadedState
);
store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type AppStateType = ReturnType<typeof rootReducer>
