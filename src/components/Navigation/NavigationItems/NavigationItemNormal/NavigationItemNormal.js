import React from 'react';

import classes from './NavigationItemNormal.css';

const navigationItemNormal = (props) => (
    <a href={props.url} target={props.target}>
        <li className={classes.menuMainItem}>{props.caption}</li>
    </a>
);

export default navigationItemNormal;