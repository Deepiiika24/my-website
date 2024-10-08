import React from 'react';
import '../css/Footer.css'
import '../css/Responsive/FooterResponsive.css'
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <div>
            <section className='footer'>
                <div className='footer-container ' >
                    <div className='footer-class-contant'>
                        <div className='footer-content'>
                            <h4>Information</h4>
                            <ul>
                                <li><Link to="/"><ArrowForwardIosIcon />Home</Link></li>
                                <li><Link to="/Aboutus"><ArrowForwardIosIcon />About-Us</Link></li>
                                <li><ArrowForwardIosIcon />Products</li>
                                <li><Link to="/Certificate"><ArrowForwardIosIcon />Certificate</Link></li>
                                <li><Link to="/Contactus"><ArrowForwardIosIcon />Contact-Us</Link></li>
                            </ul>
                        </div>
                        <div className='footer-content'>
                            <h4>Products Range</h4>
                            <ul >
                                <li><Link to="/Vegetables"><ArrowForwardIosIcon />Vegetables</Link></li>
                                <li><Link to="/Rices"><ArrowForwardIosIcon />Rice</Link></li>
                                <li><Link to="/Leaves"><ArrowForwardIosIcon />Leaf</Link></li>
                                <li><Link to="/Snacksmain"><ArrowForwardIosIcon />Snacks</Link></li>
                                <li><Link to="/Spices"><ArrowForwardIosIcon />Spices</Link></li>
                                <li><Link to="/Beeda"><ArrowForwardIosIcon />Beeda</Link></li>
                                <li><Link to="/Flower"><ArrowForwardIosIcon />Flower</Link></li>
                                <li><Link to="/PoojaProduct"><ArrowForwardIosIcon />Pooja Product</Link></li>
                            </ul>
                        </div>
                        <div className='footer-content'>
                            <h4>Branches</h4>
                            <ul>
                                <li > <ArrowForwardIosIcon /> India</li>
                                <li><ArrowForwardIosIcon /> Australia</li>
                            </ul>
                        </div>
                        <div className='footer-content'>
                            <h4>Stay Connected</h4>
                            <h3><FmdGoodIcon />Registered address:</h3>
                            <h5>No:11, M.R.K Nagar, 50feet Main Road, Kolapakkam, Chennai-600128, Tamil Nadu, India</h5>
                            <h3><PhoneIcon />PhoneNo:</h3>
                            <h5>+91 6374980568</h5>
                            <h3> <MailOutlineIcon />Email:</h3>
                            <h5>koogulinfo@gmail.com</h5>
                        </div>
                    </div>
                    <div className='icon'>
                        <span >
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </span>
                        <span >
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                        </span>
                        <span >
                            <a href="https://www.instagram.com/rameshram3636" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </span>
                    </div>
                </div>
            </section>
            <section className='end-footer'>
                <div className='end-footer-contant'>
                    <h2>©️ Koogul Industries 2024 – All Rights Reserved</h2>
                </div>

            </section>
        </div>
    );
}

export default Footer;
