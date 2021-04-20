import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const ChildReducer = () => {
    let [state, dispatch] = useReducer(CounterReducer, 10);
    //console.log(state);

    return (
        <div>
            <h5>Value of Reducer state is: {state}</h5>
            <button
                onClick = {() => dispatch('INCREMENT')}
            >
                Increment Reducer
            </button>
        </div>
    )
}

export default ChildReducer;