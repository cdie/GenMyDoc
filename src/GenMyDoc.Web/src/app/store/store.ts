import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import { IAppState } from './IAppState';
import { reducer } from './reducer';

declare var window: any;

const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension) ? window.devToolsExtension() : (f) => f;

function deepFreeze(o) {
    Object.freeze(o);

    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop)
            && o[prop] !== null
            && (typeof o[prop] === "object" || typeof o[prop] === "function")
            && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });

    return o;
}

export function freezeState(store) {
    return (next) => (action) => {
        let result = next(action);
        let state = store.getState();
        deepFreeze(state);
        return result;
    };
}

export const store = createStore<IAppState>(reducer,
    compose(applyMiddleware(freezeState), devToolsExtension) as GenericStoreEnhancer);