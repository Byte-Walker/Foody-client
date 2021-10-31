import React from 'react';
import './Footer.css';
import logo from '../../../../media/foody-logo.png';
import facebook from '../../../../media/facebook.png';
import instagram from '../../../../media/instagram.png';
import twitter from '../../../../media/twitter.png';

const Footer = () => {
    return (
        <div className="footer">
            {/* <nav>
                <Link to="/">HOME</Link>
                <a href="/#why-us">WHY US</a>
                <Link to="/foods">AVAILABLE FOODS</Link>
            </nav> */}
            <img src={logo} alt="Foody logo" />
            <div className="footer-social-icons">
                <a
                    href="https://www.facebook.com/profile.php?id=100008215602384"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img src={facebook} alt="Facebook logo" />
                </a>
                <a
                    href="https://www.instagram.com/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img src={instagram} alt="instagram logo" />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100008215602384"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img src={twitter} alt="twitter logo" />
                </a>

            </div>
            <p>Copyright &copy; 2021 | All rights reserved</p>
        </div>
    );
};

export default Footer;
