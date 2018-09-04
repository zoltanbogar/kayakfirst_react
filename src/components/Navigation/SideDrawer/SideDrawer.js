import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItemSocial from '../NavigationItems/NavigationItemSocial/NavigationItemSocial';
import NavigationItemNormal from '../NavigationItems/NavigationItemNormal/NavigationItemNormal';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const sideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if(props.open){
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<Auxiliary>
			<Backdrop show={props.open} clicked={props.closed}/>
            <nav role="navigation">
                <div className={classes.menuToggle}>
                    <div className={classes.menuPreText}>Menu</div>
                    <input type="checkbox"/>
                    <input type="checkbox" className={classes.menuInput}/>
                    <DrawerToggle clicked={props.drawerToggleClicked} />
                    <ul className={classes.menu}>
                        <div className={classes.menuTextContainer}>
                            <NavigationItemNormal url={"../src/product.html"} caption={"Products"} target={"_self"} />
                            <NavigationItemNormal url={"../src/ourStory.html"} caption={"Our story"} target={"_self"} />
                            <NavigationItemNormal url={"../src/contact.html"} caption={"Contact"} target={"_self"} />
                            <NavigationItemNormal url={"../src/pricing.html"} caption={"Pricing"} target={"_self"} />
                            <NavigationItemNormal url={"http://traininglog.kayakfirst.com"} caption={"Training log"} target={"_blank"} />
                        </div>
                        <NavigationItemNormal url={"../src/login.html"} caption={"Login"} target={"_self"} />
                        <div className={classes.menuSocialBottom}>
                            <div className={classes.menuSocialContainer}>
                                <NavigationItemSocial url={"https://www.facebook.com/kayakfirst/"} target={"_blank"} iconSource={"facebook_menu_icon.png"} />
                                <NavigationItemSocial url={"https://www.linkedin.com/in/jozsefweimper/"} target={"_blank"} iconSource={"linkedin_menu_icon.png"} />
                                <NavigationItemSocial url={"https://www.instagram.com/kayakfirst/"} target={"_blank"} iconSource={"instagram_menu_icon.png"} />
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
		</Auxiliary>
	);
}

export default sideDrawer;