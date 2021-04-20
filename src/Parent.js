import React from 'react';
import ChildContext from './ChildContext';
import ChildReducer from './ChildReducer';

const Parent = (props) => {
    return (
        <div>
            <ChildContext />
            <ChildReducer />
        </div>
    )
}

export default Parent;