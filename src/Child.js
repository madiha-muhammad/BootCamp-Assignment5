import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext);

    return (
        <div>
            <h5>This is child</h5>
            <h5>Counter Value: {counterValue}</h5>
            <button
                onClick={() => {counterValue++}}
            >
                Increment
            </button>
        </div>
    )
}

export default Child;