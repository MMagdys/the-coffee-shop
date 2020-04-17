import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

function Footer(props) {
    
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <FacebookIcon />
                    <TwitterIcon />
                    <EmailIcon />
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2020 The Coffe Shop</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;