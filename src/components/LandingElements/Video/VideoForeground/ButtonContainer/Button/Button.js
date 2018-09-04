import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <a href={props.url} className={classes.Button}>
        <div>
            <div className={classes.ButtonInner}>
                {props.children}
            </div>
        </div>
    </a>
);

export default button;