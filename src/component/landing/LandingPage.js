import React from 'react'
import Intro from '../intro/Intro'
import $ from 'jquery'

import './css/landing.css'
import slideTop from '../../image/slide-top.jpg'
import slideBottom from '../../image/slide-bottom.jpg'


function LandingPage(){
    $(document).ready(function () {
        $('.jcontentle').appendTo('.img-whois+p');
    });
    return(
        <div className=" jcontentle ">
            container
            <div className="jalterre" id="jalter1">
                <Intro className="video"/>
            </div>
            
            <div class="jcontentle">
                <a href="http://www.oursourcecode.net/u6090" target="_blank" class="jcredit">By Jackin</a>
            </div>
        </div>
    )
}

export default LandingPage