import React, { useReducer } from "react";

const initialState = 0

const reducerFunction = (state, action) => {
   switch(action){
    case 'INCREMENT':
        return state + 1
    case 'DECREMENT':
        return state - 1
    case 'RESET':
        return initialState 
    default:
        return state
   }
};

const Counter = () => {
    
    const [count, disptachCounter] = useReducer(reducerFunction, initialState);

    const incrementHandler = () => {
        disptachCounter('INCREMENT')
    };

    const decrementHandler = () => {
        disptachCounter('DECREMENT')
    };

    const resetHandler = () => {
        disptachCounter('RESET')
    };

    return (
        <React.Fragment>
        <div> <h1>Count - {count} </h1> </div>
        <button onClick={incrementHandler} >Increment</button>
        <button onClick={decrementHandler} >Dercement</button>
        <button onClick={resetHandler} >Reset</button>
        </React.Fragment>
    )
};

export default Counter;