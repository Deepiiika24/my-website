import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { pink } from '@mui/material/colors';
import '../css/Socialicon.css'
import '../css/Responsive/SocialiconResponsive.css'

const Socialicon = () => {
    return (
        <div className="sticky-container">
            <ul className="sticky">
                <li className='social-icon'>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon style={{ fontSize: 25,margin: "0px 20px 0px 0px" }} color="primary" className='facebook' />
                    FACEBOOK
                </a>
                </li>
                <li className='social-icon'>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                    <XIcon style={{ fontSize: 25,margin: "0px 20px 0px 0px" ,color: "black"}} className='twitter' />
                    TWITTER
                </a>
                </li>
                <li className='social-icon'>
                <a href="https://www.instagram.com/rameshram3636" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon style={{ fontSize: 25,margin: "0px 20px 0px 0px" }} sx={{ color: pink[500] }} className='instagram' />
                    INSTAGRAM
                </a>
                </li>
            </ul>
        </div>
    );
};

export default Socialicon;
