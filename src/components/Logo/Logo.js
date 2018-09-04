import React from 'react';

import kayakLogo from '../../assets/images/logos/kayakfirst_app_logo.png';
import classes from './Logo.css';

const logo = (props) => (
	<div className={classes.Logo}>
		<img src={kayakLogo} alt="Kayakfirst" />
	</div>
);

export default logo;