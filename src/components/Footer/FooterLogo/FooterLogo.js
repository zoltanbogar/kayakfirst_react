import React from 'react';

import kayakLogo from '../../../assets/images/logos/kayakfirst_app_logo_white@3x.png';
import classes from './FooterLogo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={kayakLogo} alt="Kayakfirst" />
    </div>
);

export default logo;