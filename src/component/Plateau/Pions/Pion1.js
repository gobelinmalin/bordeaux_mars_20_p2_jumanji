import React from 'react'
import './Pion.css'
//FRAMER LIBRARY
import { motion } from 'framer-motion'
//FRAMER LIBRARY

class Pion1 extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const {left} = this.props
        return (
            <div>
                <motion.img
                    animate={{scale: [0.9, 1, 1,0.9]}}
                    transition={{
                        type:"tween",
                        stiffness: 10,
                        yoyo: Infinity,
                        duration: 1.5
                         }}
                    className="picturePion1" src={ left < 40 ? "https://zupimages.net/up/20/19/cr8j.png" : "https://zupimages.net/up/20/20/z428.png"} alt="" />
            </div>
        )
    }
}

export default Pion1