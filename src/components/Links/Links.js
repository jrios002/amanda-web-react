import React from 'react';
import ParaLogo from './ParamountLogo.jpg';
import GoogleClass from './Googleclassroom.png';
import ParaFacebook from './FBimage.png';
import ParaTwitter from './TwitterLogo.png';

const Links = () => {
    return (
        <div>
            <div className="regText b mt4 mb2 tc white">Here are some useful links for you!!</div>
            <ul className="mb6 inline-flex list justify-center w-100">
                <li className="ma3">
                    <a href="https://ptamaisd.sharpschool.com/" target="_blank" rel="noopener noreferrer">
                        <img className="shadow-5" alt="ParaLogo" src={ParaLogo} width="118" height="auto"></img>
                    </a>
                </li>
                <li className="ma3">
                    <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer">
                        <img className="shadow-5" alt="GoogleLogo" src={GoogleClass} width="266" height="auto"></img>
                    </a>
                </li>
                <li className="ma3">
                    <a href="https://www.facebook.com/pages/category/Elementary-School/Paramount-Terrace-Elementary-School-278545358825640/" target="_blank" rel="noopener noreferrer">
                        <img className="shadow-5" alt="ParaFacebook" src={ParaFacebook} width="148" height="auto"></img>
                    </a>
                </li>
                <li className="ma3">
                    <a href="https://twitter.com/ptecougars?lang=en" target="_blank" rel="noopener noreferrer">
                        <img className="shadow-5" alt="ParaTwitter" src={ParaTwitter} width="149" height="auto"></img>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Links;