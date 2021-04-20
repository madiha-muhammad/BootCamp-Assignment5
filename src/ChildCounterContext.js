import React, { useContext } from 'react';
import counterContext from './CounterContext';

const ChildCounterContext = () => {
    let counterValue = useContext(counterContext)
    //console.log(counterValue)

    return (
        <div>
            <h5>Value of Counter Context: {counterValue[0]}</h5>
            <button
                onClick={() => {counterValue[1](++counterValue[0])}}
            >
                Increment Context
            </button>
        </div>
    )
}

export default ChildCounterContext;