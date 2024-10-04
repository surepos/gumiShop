import React from 'react'
import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import kakao from "../assets/images/kakao.png"
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="above-line">
            <div className="first-column">
                <motion.h1
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 transition={{duration:0.4, delay:0.3}}>박슨생Beauty</motion.h1>
                <motion.p
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 transition={{duration:0.4, delay:0.4}}>010-9448-1769</motion.p>
                <motion.p
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 transition={{duration:0.4, delay:0.5}}>카카오톡: ssurri0329</motion.p>
                <motion.p
                  initial={{ y: 20, opacity:0 }}
                  whileInView={{y:0, opacity:1}}
                  transition={{duration:0.4, delay:0.6}}>구미시 진평동 76-2 1층 <span>(조은정형외과 뒷편)</span></motion.p>
            </div>
            <div className="second-column">
                <motion.p className="column-title"
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 transition={{duration:0.4, delay:0.3}}>Menu</motion.p>
                <motion.div className="line"
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 transition={{duration:0.4, delay:0.4}}>
                    <div className="first-line"></div>
                    <div className="second-line"></div>
                </motion.div>
                <motion.p className='p-link'
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 whileHover={{ scale: 1.2 }}
                 transition={{duration:0.4, delay:0.5, scale:{
                  duration:0.1
                }}}><Link to="/">홈</Link></motion.p>
                 <motion.p className='p-link'
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 whileHover={{ scale: 1.2 }}
                 transition={{duration:0.4, delay:0.6, scale:{
                  duration:0.1
                }}}><Link to="/service">서비스</Link></motion.p>
               <motion.p className='p-link'
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 whileHover={{ scale: 1.2 }}
                 transition={{duration:0.4, delay:0.7, scale:{
                  duration:0.1
                }}}><Link to="/">상담</Link></motion.p>
                <motion.p className='p-link'
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 whileHover={{ scale: 1.2 }}
                 transition={{duration:0.4, delay:0.8, scale:{
                  duration:0.1
                }}}><Link to="/gallery">갤러리</Link></motion.p>
                
            </div>
            <div className="third-column">
            <motion.p className="column-title"
             initial={{ y: 20, opacity:0 }}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.4, delay:0.3}}>정보</motion.p>
               <motion.div className="line"
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 transition={{duration:0.4, delay:0.4}}>
                    <div className="first-line"></div>
                    <div className="second-line"></div>
                </motion.div>
                <motion.p className='p-link'
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 whileHover={{ scale: 1.2 }}
                 transition={{duration:0.4, delay:0.5, scale:{
                  duration:0.1
                }}}>온라인상담</motion.p>
                 <motion.p className='p-link'
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 whileHover={{ scale: 1.2 }}
                 transition={{duration:0.4, delay:0.6, scale:{
                  duration:0.1
                }}}>이용 약관</motion.p>
                <motion.p className='p-link'
                 initial={{ y: 20, opacity:0 }}
                 whileInView={{y:0, opacity:1}}
                 whileHover={{ scale: 1.2 }}
                 transition={{duration:0.4, delay:0.7, scale:{
                  duration:0.1
                }}}>개인정보처리방침</motion.p>
            </div>
        </div>
        <hr />
        <div className="below-line">
            <motion.div className='copyright-text'
              initial={{ y: 20, opacity:0 }}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.4, delay:0.3}}>COPYRIGHT ⓒ 2024 박슨생Beauty. All Rights Reserved.</motion.div>
            <div className='social-media'>
                <motion.div className="facebook"
                  initial={{ x: -20, opacity:0 }}
                  whileInView={{x:0, opacity:1}}
                  transition={{duration:0.4, delay:0.3}}><a href="https://www.facebook.com/share/ddaSVx92D1Xjywf9/?mibextid=LQQJ4d"><img src= {facebook} alt="Facebook"/></a></motion.div>
                <motion.div className="instagram"
                initial={{ x: -20, opacity:0 }}
                whileInView={{x:0, opacity:1}}
                transition={{duration:0.4, delay:0.4}}><a href="https://www.instagram.com/suri0119?igsh=cGt0b2J2ZmViZGJm"><img src= {instagram} alt="Instagram"/></a></motion.div>
                <motion.div className="kakao"
                initial={{ x: -20, opacity:0 }}
                whileInView={{x:0, opacity:1}}
                transition={{duration:0.4, delay:0.5}}><a href="http://"><img src= {kakao} alt="Kakao"/></a></motion.div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Footer
