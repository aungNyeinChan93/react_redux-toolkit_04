import { legacy_createStore } from "redux";

// asign waiter
const waiterReducer = (state = { cake: 100 }, action) => {
    if (action.type === 'CAKEORDER') {
        return { ...state, cake: state.cake - action.payload }
    };
    if (action.type === 'FILLSTOCK') {
        return { ...state, cake: state.cake + action.payload }
    };
    return state;
};

// open cakeStore
const cakeStore = legacy_createStore(waiterReducer);

// order records
const unsubscribe = cakeStore.subscribe(() => console.log(cakeStore.getState()));
console.log(cakeStore.getState());

// orders action
const customerOrder = () => {
    return { type: "CAKEORDER", payload: 3 }
};

cakeStore.dispatch((customerOrder()));
cakeStore.dispatch((customerOrder()));
cakeStore.dispatch((customerOrder()));
cakeStore.dispatch({ type: 'FILLSTOCK', payload: 100 });

// const total = cakeStore.getState();
// console.log(`Amount of cakes :`, total)

unsubscribe();

export default cakeStore;

