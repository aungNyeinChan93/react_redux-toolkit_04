import { legacy_createStore } from "redux";


const waiterReducer = (state = { cake: 100 }, action) => {
    if (action.type === 'CAKEORDER') {
        return { ...state, cake: state.cake - action.payload }
    };
    return state;
};


const cakeStore = legacy_createStore(waiterReducer);


cakeStore.subscribe(() => console.log(cakeStore.getState()));

console.log(cakeStore.getState());

const customerOrder = () => {
    return { type: "CAKEORDER", payload: 3 }
};

cakeStore.dispatch((customerOrder()));
cakeStore.dispatch((customerOrder()));
cakeStore.dispatch((customerOrder()));

const total = cakeStore.getState();
console.log(`Amount of cakes :`, total)


