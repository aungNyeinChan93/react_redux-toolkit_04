import { legacy_createStore } from 'redux';

const counterReducer = (state = { count: 0 }, action) => {
    if (action.type === 'increase') {
        return { ...state, count: state.count + 1 };
    }
    return state;
}

const store = legacy_createStore(counterReducer);


store.subscribe(() => console.log(store.getState()));

console.log('>>>>' + store.getState());

store.dispatch({ type: 'increase' });
store.dispatch({ type: 'increase' });
store.dispatch({ type: 'increase' });
store.dispatch({ type: 'increase' });


console.log("<<<<", store.getState());

