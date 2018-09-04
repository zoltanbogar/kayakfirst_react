import React from 'react';
import classes from './FooterLink.css';

const footerLink = (props) => (
    <a href={props.url} target={props.target}>
        <div className={classes.footerColumnText}>{props.caption}</div>
    </a>
);

export default footerLink;