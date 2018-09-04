import React from 'react';

import classes from './ButtonContainer.css';

const buttonContainer = (props) => (
    <div className={classes.ButtonContainer}>
        {props.children}
    </div>
);

export default buttonContainer;