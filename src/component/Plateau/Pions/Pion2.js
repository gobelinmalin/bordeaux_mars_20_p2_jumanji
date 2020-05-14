import React from 'react'
import './Pion.css'
//FRAMER LIBRARY
import { motion } from 'framer-motion'
//FRAMER LIBRARY

class Pion2 extends React.Component {
    render() {
        const {top} = this.props
        return (
            <div className="containerP2">
                <motion.img
                    animate={{ scale: [0.9, 1, 1, 0.9] }}
                    transition={{
                        type: "tween",
                        stiffness: 10,
                        yoyo: Infinity,
                        duration: 1
                    }}

                    className="picturePion2" src={top > 40 ? "https://zupimages.net/up/20/19/gs4q.png" : "https://zupimages.net/up/20/20/jdx0.png"} alt="" />
            </div>
        )
    }
}

export default Pion2