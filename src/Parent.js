import React from 'react';
import ChildCounterContext from './ChildCounterContext';
import ChildReducer from './ChildReducer';

const Parent = (props) => {
    return (
        <div>
            <ChildCounterContext />
            <ChildReducer />
        </div>
    )
}

export default Parent;