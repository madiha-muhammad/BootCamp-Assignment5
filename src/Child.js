import React from 'react';

const Child = (props) => {
    return (
        <div>
            <h5>This is child</h5>
            <h5>This is {props.name}</h5>
        </div>
    )
}

export default Child;