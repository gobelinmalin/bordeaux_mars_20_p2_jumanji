// LIBRARY
import React from 'react'
import $ from 'jquery'
import Intro from '../Intro/Intro'
// LIBRARY

// CSS
import './css/landing.css'
// CSS

// IMAGE
/* import slideTop from '../../image/slide-top.jpg'
import slideBottom from '../../image/slide-bottom.jpg' */
// IMAGE
// import { NavLink } from 'react-router-dom';


function LandingPage(){
    $(document).ready(function () {
        $('.jcontentle').appendTo('.img-whois+p');
    });
    return(
        <div className=" jcontentle">
            <div className="jalterre" id="jalter1">
                <Intro className="video"/>
            </div>

            <div className="select-player"></div>

            <div className="end-page"></div>

            <a href="http://www.oursourcecode.net/u6090" target="_blank" rel="noopener noreferrer" class="">By Jackin</a>
        </div>
    )
}

export default LandingPage