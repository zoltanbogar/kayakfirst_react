import React from 'react';

import classes from './Slide.css';

const slide = (props) => (
    <div className={classes[props.givenClassName]}>
        {props.children}
    </div>
);

export default slide;