import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/images/logo.png"
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useTranslation } from 'react-i18next';
function Navbar(props) {
  const {i18n} = useTranslation();
  const location = useLocation();
  const active = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  // console.log(active)
  const [selectedLanguage, setSelectedLanguage] = useState('Korean');
  const [isOpen, setIsOpen] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  const handleLanguageChange = (event) => {
    const selected = event.target.value;
    setSelectedLanguage(selected);
    if (selected === 'Korean') {
      changeLanguage('kr');
    } else if (selected === 'English') {
      changeLanguage('en');
    } else if (selected === 'Vietnamese') {
      changeLanguage('vn');
    } else if (selected === 'Thai') {
      changeLanguage('th');
    }
  };
  
  
  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
  const { t } = useTranslation();
 
  
  return (
    <>
    <motion.div className={isOpen?"sidebar":"sidebar close-sidebar"}
      initial={{x:-1000}}
      animate={isOpen?{x:0}:{x:-100}}
      transition={{duration:0.5}}
      >
      <ul>
          <li className={active === 'home' ? 'active' : ''} onClick={()=>{setIsOpen(false)}}>
            <Link to="/">{t("home")}</Link>
          </li>
          <li className={active === 'service' ? 'active' : ''} onClick={()=>{setIsOpen(false)}}>
            <Link to="/service">{t("treatment")}</Link>
          </li>
          <li className={active === 'consult' ? 'active' : ''} onClick={()=>{
            setIsOpen(false);
            setTimeout(()=>{
              if (props.onlineConsultRef.current) {
                props.onlineConsultRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }, 0)
            
          }}>
            <Link to="/">{t("online_consultation")}</Link>
          </li>
          <li className={active === 'direction' ? 'active' : ''} onClick={()=>{setIsOpen(false)}}>
            <Link to="/direction">{t("location_info")}</Link>
          </li>
          <li className={active === 'gallery' ? 'active' : ''} onClick={()=>{setIsOpen(false)}}>
            <Link to="/gallery">{t("gallery")}</Link>
          </li>
          
        </ul>
      </motion.div>
    <motion.div className="navbar"
    initial={{ y: 20, opacity:0 }}
    whileInView={{y:0, opacity:1}}
    transition={{duration:0.4, delay:0.2}}
    >
      
      <div className="nav-container">
      <div
        class="menu-toggle"
        id="menuToggle"
        onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <svg width="23" height="23" viewBox="0 0 23 23" >
  <Path
    stroke="#000000"
    initial={{ d: 'M 2 2.5 L 20 2.5' }}
    animate={isOpen ? 'open' : 'closed'}
    variants={{
      closed: { d: 'M 2 2.5 L 20 2.5' },
      open: { d: 'M 3 16.5 L 17 2.5' },
    }}
  />
  <Path
    stroke="#000000"
    initial={{ d: 'M 2 9.423 L 15 9.423', opacity: 1 }}
    animate={isOpen ? 'open' : 'closed'}
    variants={{
      closed: { d: 'M 2 9.423 L 15 9.423', opacity: 1 },
      open: { d: 'M 2 9.423 L 15 9.423', opacity: 0 },
    }}
    transition={{ duration: 0.1 }}
  />
  <Path
  stroke="#000000"
    initial={{ d: 'M 2 16.346 L 20 16.346' }}
    animate={isOpen ? 'open' : 'closed'}
    variants={{
      closed: { d: 'M 2 16.346 L 20 16.346' },
      open: { d: 'M 3 2.5 L 17 16.346' },
    }}
  />
</svg>
      </div>
      <Link to="/">
            <div className="logo-mobile">
                <img src= {logo} alt="logo" />
                <div>
                  <h1>박슨생Beauty</h1>
                  <h4>당신의 아름다움, 우리의 열정</h4>
                </div>
            </div>
            </Link>

        <ul>
          <li className={active === 'home' ? 'active' : ''}>
            <Link to="/">{t("home")}</Link>
          </li>
          <li className={active === 'service' ? 'active' : ''}>
            <Link to="/service">{t("treatment")}</Link>
          </li>
          <li className={active === 'consult' ? 'active' : ''}onClick={() => {
  setIsOpen(false);
  setTimeout(()=>{
    if (props.onlineConsultRef.current) {
      props.onlineConsultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, 0)
  
}}>
            <Link to="/">{t("online_consultation")}</Link>
          </li>
          <li >
            <Link to="/">
            <div className="logo">
                <img src= {logo} alt="logo" />
                <div>
                  <h1>박슨생Beauty</h1>
                  <h4>당신의 아름다움, 우리의 열정</h4>
                </div>
            </div>
            </Link>
          </li>
          
          <li className={active === 'direction' ? 'active' : ''}>
            <Link to="/direction">{t("location_info")}</Link>
          </li>
          <li className={active === 'gallery' ? 'active' : ''}>
            <Link to="/gallery">{t("gallery")}</Link>
          </li>
          
          
        </ul>
       <div className='language-dropdown'>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="Korean">KOR</option>
        <option value="English">ENG</option>
        <option value="Vietnamese">VNM</option>
        <option value="Thai">THA</option>
      </select>
    </div>
      </div>
    </motion.div>
    </>
  );
}

export default Navbar;
