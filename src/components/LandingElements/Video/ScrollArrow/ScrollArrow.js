import React, {Component} from 'react';
import classes from './ScrollArrow.css';

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const scrollTo = "FooterContainer";

class ScrollArrow extends Component{
    render(){
        return(
            <Link activeClass="active" className={classes.ScrollArrowLink} to={scrollTo} spy={true} smooth={true} duration={1000} >
                <div className={classes.ScrollArrow}>
                    <i className="fas fa-angle-double-down"></i>
                </div>
            </Link>
        );
    }
};

export default ScrollArrow;