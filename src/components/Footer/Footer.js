import React from 'react';
import FooterLogo from './FooterLogo/FooterLogo';
import classes from './Footer.css'
import FooterLink from './FooterLink/FooterLink';

const footer = (props) => (
    <div className={classes.FooterContainer} name="FooterContainer">
        <div className="col-md-6">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <FooterLink url={'./src/product.html'} caption={'Products'} target={'_self'} />
                            <FooterLink url={'./src/contact.html'} caption={'Contact us'} target={'_self'} />
                            <FooterLink url={'./src/ourStory.html'} caption={'Our story'} target={'_self'} />
                            <FooterLink url={'./src/terms.html'} caption={'Terms and conditions'} target={'_blank'} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <FooterLink url={'https://www.facebook.com/kayakfirst/'} caption={'Facebook'} target={'_blank'} />
                            <FooterLink url={'https://www.instagram.com/kayakfirst/'} caption={'Instagram'} target={'_blank'} />
                            <FooterLink url={'https://www.youtube.com/channel/UCp7DATOyhVHq4t1so84czRQ'} caption={'Youtube'} target={'_blank'} />
                        </div>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        </div>
        <div className={["col-md-6", classes.footerSlideLogoCol].join(' ')}>
            <div className={classes.footerSlideLogoContainer}>
                <FooterLogo />
            </div>
        </div>
    </div>
);

export default footer;