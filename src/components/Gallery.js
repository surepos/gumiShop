import React from 'react'
import g1 from "../assets/images/g1.jpg"
import g2 from "../assets/images/g2.jpg"
import g3 from "../assets/images/g3.jpg"
import g4 from "../assets/images/g4.jpg"
import g5 from "../assets/images/g5.jpg"
import g6 from "../assets/images/g6.png"
import g7 from "../assets/images/g7.png"
import g8 from "../assets/images/g8.png"
import g9 from "../assets/images/g9.jpg"
import g10 from "../assets/images/g10.jpg"
import g11 from "../assets/images/g11.jpg"
import g12 from "../assets/images/g12.jpg"
import g13 from "../assets/images/g13.jpg"
import g14 from "../assets/images/g14.png"
import g15 from "../assets/images/g15.png"
import pin from "../assets/images/pin.png"

import Footer from './Footer'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';

function Gallery() {
  const { t } = useTranslation();
  
  const imageList = [g1, g2, g3, g14, g15, g6, g7, g8, g9, g10, g11, g12, g13, g4, g5] 
  return (
    <div className='gallery'>
      <div className="gallery-header">
        <motion.h1
        initial={{ y: 20, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.4, delay:0.3}}>{t("gallery_title")}</motion.h1>
        <motion.p
        initial={{ y: 20, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.4, delay:0.5}}>{t("gallery_p")}</motion.p>
      </div>
      <div className="gallery-body">
        <div className='gallery-container'>

        {imageList.map((image, index) => {
    return (
        <motion.div className="gallery-item" key={index}
        initial={{ y: 20, opacity:0 }}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.2, delay:0.1 * index}}>
            <img src={pin} alt="PiN" className='pin'/>
            <img src={image} alt={`Gallery item ${index}`} />
            <p>박슨생Beauty</p>
        </motion.div>
    );
})}


           


        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
