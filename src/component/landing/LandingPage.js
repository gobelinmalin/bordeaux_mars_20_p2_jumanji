import React from 'react'
import './css/landing.css'

function LandingPage(){
    return(
        <div className="container">
            container
            <img className="slide-top" src="../image/plateau.jpg" alt="slide du plateau de jeu top"/>
            <img className="slide-background" src="../image/plateau.jpg" alt="plateau de jeu fond"/>
            <img className="slide-bottom" src="../image/plateau.jpg" alt="slide du plateau de jeu bottom"/>
        </div>
    )
}

export default LandingPage