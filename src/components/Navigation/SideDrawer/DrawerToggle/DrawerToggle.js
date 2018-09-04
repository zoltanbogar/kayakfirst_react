import React from 'react';

import classes from './DrawerToggle.css';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const drawerToggle = (props) => (
	<Auxiliary onClick={props.clicked}>
        <span></span>
        <span></span>
        <span></span>
	</Auxiliary>
);

export default drawerToggle;