import React from 'react'
import Footer from './Footer'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


function ShopMap() {
  const { t } = useTranslation();
    
    
  return (
    <div className='shop-direction'>
        <div className="operating-time">
        <div className="customer-service-container">
            <motion.div className="customer-service"
            initial={{ y: 20, opacity:0 }}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.4, delay:0.2}}
           
            >
              <motion.div className="customer-service-title"
              initial={{ y: 20, opacity:0 }}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.4, delay:0.4}}>
              {t("working_hours")}
              </motion.div>
              <motion.div className="working-hour"
              initial={{ y: 20, opacity:0 }}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.4, delay:0.5}}>
                <div className="day">{t("monday_wednesday_thursday")}</div>
                <div className="time">Am 10:00 - Pm 22:00</div>
              </motion.div>
             
              <motion.div className="working-hour"
              initial={{ y: 20, opacity:0 }}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.4, delay:0.7}}>
                <div className="day">{t("weekend_holiday")}</div>
                <div className="time">Am 10:00 - Pm 22:00</div>
              </motion.div>
              <motion.div className="working-hour"
              initial={{ y: 20, opacity:0 }}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.4, delay:0.8}}>
                <div className="day">{t("location")}</div>
                <div className="time">구미시 진평동 76-2 1층  </div>
              </motion.div>
              <motion.div className="customer-service-buttons"
              initial={{ y: 20, opacity:0 }}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.4, delay:0.9}}>
                <div className='kakao'>{t("plus_friend")}</div>
              </motion.div>
              
            </motion.div>
            </div>
        </div>
        <div className="map" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.9344511331387!2d128.4266342109872!3d36.0950858723417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565c47657bc384d%3A0xfdb628fee624e071!2z67CV7Iqo7IOd67ew7Yuw!5e0!3m2!1sen!2skr!4v1727609252996!5m2!1sen!2skr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      <Footer />
    </div>
  )
}

export default ShopMap
