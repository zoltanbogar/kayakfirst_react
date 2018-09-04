import React from 'react';

import classes from './VideoForeground.css';
import MainTitle from './MainTitle/MainTitle';
import ButtonContainer from './ButtonContainer/ButtonContainer';
import Button from './ButtonContainer/Button/Button';

const videoForeground = () => (
    <div className={classes.VideoForeground}>
        <MainTitle />
        <ButtonContainer>
            <Button url={"./www/video/KAYAKIRST_FRONTPAGE.mp4"}>
                <i className="fa fa-play"></i> Play the video
            </Button>
            <Button url={"./src/product.html"}>
                Choose your ergometer
            </Button>
        </ButtonContainer>
    </div>
);

export default videoForeground;