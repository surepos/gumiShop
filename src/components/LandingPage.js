import React, { useEffect, useRef, useState } from 'react';
import location from '../assets/images/location.png';
import lottie from 'lottie-web';
import image1 from '../assets/images/eyelash.jpg';
import image2 from '../assets/images/nail.png';
import image3 from '../assets/images/eyegel.png';
import image4 from '../assets/images/skinplan.png';
import arrow from '../assets/images/right-arrow.png';
import longArrow from '../assets/images/arrow.png';
import facility1 from '../assets/images/facility-1.png';
import facility2 from '../assets/images/facility-2.png';
import facility3 from '../assets/images/facility-3.png';
import facility4 from '../assets/images/facility-4.jpeg';
import facility5 from '../assets/images/facility-5.jpg';
import Footer from './Footer';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';


function LandingPage(props) {
  const { t } = useTranslation();
  const images = [image1, image2, image3, image4];
  const comments = [
    '" 애교살 다른덴 너무 진해서 고민했는데 박슨생Beauty에서 한거 후기보고 예약했어요 그래도 나는 진하게 되면 어떻게 하지했는데  넘 자연스럽고 굿입니다요~ "',
    '" 친구 추천으로 처음 와봤는데 완전 만족이에요! 눈썹 정리 받았는데 정말 섬세하고 자연스럽게 잘 해주셔서 감동했습니다. 박슨생Beauty 최고예요, 앞으로도 계속 올게요! "',
    '" 여기저기 속눈썹 연장 받았는데 매번 자연스럽지 않아서 아쉬웠어요. 그런데 박슨생Beauty에서 받은 건 진짜 완벽했어요! 너무 자연스럽고 제 눈에 딱 맞아요. 이제는 여기만 다니려고요~ "',
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [commentIndex, setCommentIndex] = useState(0);
  const [name, setName] = useState('');
  const [selection, setSelection] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Selection: ${selection}, Phone: ${phone}`);
  };
  const locationRef = useRef(null);
  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: locationRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('.././marker.json'),
    });
    return () => {
      animationInstance.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) {
        return images.length - 1;
      }
      return index - 1;
    });
  };
  const showNextImage = () => {
    setImageIndex((index) => {
      if (index == images.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  const showPrevComment = () => {
    setCommentIndex((index) => (index === 0 ? comments.length - 1 : index - 1));
  };

  const showNextComment = () => {
    setCommentIndex((index) => (index === comments.length - 1 ? 0 : index + 1));
  };
  const { i18n } = useTranslation();
  console.log(i18n.language == 'kr')

  return (
    <div className="landing-page">
      <div className="first-section">
        <div className="landing-container">
          <div className="landing-info">
            <motion.div className={`${i18n.language == 'kr' ? 'notKorean loanding-text' : 'loanding-text'}`}
             initial={{ y: 20, opacity:0 }}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.4, delay:0.3}}
            >
              {t("title")} {t("title1")}  <br /><span>{t("title2")}</span>
            </motion.div>
            <div className="landing-button">
              <motion.div className="consult"
              onClick={
                () => {props.onlineConsultRef.current.scrollIntoView({ behavior: "smooth" })}
              }
              initial={{ x: -40, opacity:0 }}
              whileInView={{x:0, opacity:1}}
              whileHover={{ scale: 1.2 }}
              transition={{duration:0.4, delay:0, scale:{
                duration:0.1
              }}}
              >{t("consult")} </motion.div>
              <Link to="/direction">
              <motion.div className="location"
              initial={{ x: 20, opacity:0 }}
              whileInView={{x:0, opacity:1}}
              whileHover={{ scale: 1.2 }}
              transition={{duration:0.4, delay:0, scale:{
                duration:0.1
              }}}
              >
                <div className="location-wrapper">
                  <img
                    className="location-svg-image"
                    src={location}
                    alt="location"
                  />
                  <div className="location-svg" ref={locationRef}></div>
                </div>
                <div className="location-text">{t("location_info")} </div>
              </motion.div>
              </Link>
            </div>
          </div>
          <motion.div className="landing-image"
           initial={{ y: 40, opacity:0 }}
           whileInView={{y:0, opacity:1}}
           transition={{duration:0.4, delay:0.3}}
          >
            <div className="image-container">
              {images.map((image, index) => (
                <img
                  src={image}
                  alt={`image-${index}`}
                  key={index}
                  style={{
                    transform: `translate(${-100 * imageIndex}%)`,
                    transition:
                      imageIndex === 0 ? 'none' : 'transform 0.5s ease-in-out',
                  }}
                />
              ))}
            </div>
            <div className="leftArrow" onClick={showPrevImage}>
              <img src={arrow} alt="left arraw" />
            </div>
            <div className="rightArrow" onClick={showNextImage}>
              <img src={arrow} alt="right arraw" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="second-section">
        <div className="about-container">
          <div className="about-text">
            <motion.h1
             initial={{ y: 20, opacity:0 }}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.4, delay:0.3}}
            >{t("about_us")} </motion.h1>
            <img className="facility-mobile" src={facility5} alt="Home-design" />
            <motion.p
             initial={{ y: 20, opacity:0 }}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.4, delay:0.3}}
            >
             {t("about_paragraph")} 
            </motion.p>
            <motion.div className="about-button"
             initial={{ y: 20, opacity:0 }}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.4, delay:0.3}}
            > {t("years_experience")} </motion.div>
          </div>
          <div className="about-image">
            <motion.img className="facility1" src={facility2} alt="Home-design" 
             initial={{ y: 20, opacity:0 }}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.4, delay:0.7}}/>
            <motion.img className="facility2" src={facility4} alt="Home-design" 
             initial={{ y: 20, opacity:0 }}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.4, delay:0.5}}/>
           <motion.img className="facility3" src={facility5} alt="Home-design" 
             initial={{ y: 20, opacity:0 }}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.4, delay:0.3}}/>
          </div>
        </div>
      </div>
      <div className="third-section" ref={props.onlineConsultRef}>
        <div className="third-section-container">
          {/* <div className="review-container">
            <div className="review">
              <div className="review-text">{comments[commentIndex]}</div>
              <div className="dots">
                {Array.from({ length: 3 }, (_, i) => (
                  <div
                    className={
                      i == commentIndex ? 'active each-dot' : 'each-dot'
                    }></div>
                ))}
              </div>
              <div className="review-buttons">
                <div className="leftArrow" onClick={showPrevComment}>
                  <img src={longArrow} alt="left arrow" />
                </div>
                <div className="rightArrow" onClick={showNextComment}>
                  <img src={longArrow} alt="right arrow" />
                </div>
              </div>

              <div></div>
            </div>
          </div> */}
          <div className="customer-service-container">
            <motion.div className="customer-service"
            initial={{ x: -20, opacity:0 }}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.4, delay:0.3}}
            >
              <div className="customer-service-title">
                <span>박슨생Beauty </span>   {t("customer_service")} 
              </div>
              <div className="phone-number">010-9448-1769</div>
              <div className="working-hour">
                <div className="day"> {t("monday_wednesday_thursday")} </div>
                <div className="time">Am 10:00 - Pm 22:00</div>
              </div>
              
              <div className="working-hour">
                <div className="day">{t("weekend_holiday")}</div>
                <div className="time">Am 10:00 - Pm 22:00</div>
              </div>
              <div className="working-hour">
                <div className="day">{t("location")}</div>
                <div className="time">{t("address")}</div>
              </div>
              <div className="customer-service-buttons">
                <div className='address'><Link to="/direction">{t("location_info")}</Link></div>
                <div className='kakao'>{t("plus_friend")}</div>
              </div>
              
            </motion.div>
          </div>
          <div className="booking">
            <motion.div className="booking-container"
            initial={{ x: 20, opacity:0 }}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.4, delay:0.3}}
            >
              <form onSubmit={handleSubmit}>
                <div className="booking-title">{t("online_consultation")}</div>
                <div class="floating-label">
                  <input
                    className="input"
                    type="text"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label>{t("name")}</label>
                </div>
                <br />
                <label>
                  <select
                    value={selection}
                    onChange={(event) => setSelection(event.target.value)}
                    className="input">
                    <option value="">{t("service")}</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </label>
                <br />
                <br />
                <div class="floating-label">
                  <input
                    className="input"
                    type="tel"
                    value={phone}
                    required
                    onChange={(event) => setPhone(event.target.value)}
                  />
                  <label>{t("phone_number")}</label>
                </div>
                <br />
                <br />
                <input className="button" type="submit" value={t("submit")} />
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;
