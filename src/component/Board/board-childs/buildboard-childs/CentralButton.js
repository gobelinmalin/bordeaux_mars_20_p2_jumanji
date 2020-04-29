import React from "react"
import './css/central-button.css'

function CentralButton(props){
    return(
    <div className={props.className}> test-props: {props.test} <br/>composant énigme</div>
    )
}

export default CentralButton;