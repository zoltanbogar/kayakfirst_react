import React from 'react';

import classes from './NavigationItemSocial.css';

const navigationItemSocial = (props) => (
    <a href={props.url} target={props.target}>
        <li className={classes.menuSocialItem}>
            <img className={classes.socialText} src={require('../../../../assets/images/icons/' + props.iconSource)}/>
        </li>
    </a>
);

export default navigationItemSocial;