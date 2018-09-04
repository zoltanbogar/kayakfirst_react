import React from "react";

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import ScrollArrow from './ScrollArrow/ScrollArrow';
import VideoForeground from './VideoForeground/VideoForeground';
import classes from './Video.css';

const landingVideoSource = require("../../../assets/videos/KAYAKIRST_FRONTPAGE.mp4");

const landingVideo = (props) => (
    <Auxiliary>
        <video className={classes.Video} loop muted autoPlay>
            <source src={landingVideoSource} type="video/mp4" />
                Your browser does not support HTML5 video.
        </video>
        <ScrollArrow />
        <VideoForeground />
    </Auxiliary>
);

export default landingVideo;