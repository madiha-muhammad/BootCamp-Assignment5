import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext)
    console.log(counterValue)

    return (
        <div>
            <h5>This is child</h5>
            <h5>Counter Value: {counterValue[0]}</h5>
            <button
                onClick={() => {counterValue[1](++counterValue[0])}}
            >
                Increment
            </button>
        </div>
    )
}

export default Child;