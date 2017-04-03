import React from 'react';

const Display = props => {
    return props.if ? props.children : <h3>Waiting to retrieve user profile</h3>
}

export default Display;
