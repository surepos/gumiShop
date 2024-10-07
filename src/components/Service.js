import React from 'react'
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Service() {
    const { t } = useTranslation();
    const services = [
        {
            service: "속눈썹연장",
            types: [
                {
                    type: "클래식연장(기본)",
                    subtypes: [
                        { name: "내추럴(0.10t)" },
                        { name: "천연밍크(0.10t)" },
                        { name: "스모키(0.20t)"},
                        { name: "스모키(0.23t)"}
                    ]
                },
                {
                    type: "증모연장(더블)",
                    subtypes: [
                        { name: "2D(0.20t)" },
                        { name: "더블볼륨(0.30t)"},
                        { name: "스모키2D(0.40t)" }
                    ]
                },
                {
                    type: "특수연장",
                    subtypes: [
                        { name: "퍼펙트볼륨(2)" },
                        { name: "퍼펙트볼륨+(3)"},
                        { name: "퍼펙트볼륨++(5)"},
                        { name: "퍼펙트볼륨+++(7)"},
                        { name: "바비래쉬(3)"},
                        { name: "포인트연장" }
                    ]
                },
                {
                    type: "러시안볼륨",
                    subtypes: [
                        { name: "핸드메이드(10,12)" },
                        { name: "완제품(10,12)" }
                    ]
                }
            ]
        },
        {
        service: "속눈썹펌",
        types: [
            {
                type: "기본펌",
                subtypes: [
                    { name: "-" },
                ]
            },
            {
                type: "케라틴영양펌",
                subtypes: [
                    { name: "-" },
                ]
            }
        ]
    },
    {
        service: "네일",
        types: [
            {
                type: "-",
                subtypes: [
                    { name: "-" },
                ]
            }
        ]
    },
    {
        service: "스킨플래닝",
        types: [
            {
                type: "-",
                subtypes: [
                    { name: "-" },
                ]
            }
        ]
    }
    ];
    
  return (
    <div className='service'>
      <div className='image-section'>
      <motion.h1
        initial={{ y: 20, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.4, delay:0.3}}>{t("service_title")}</motion.h1>
        <motion.p
        initial={{ y: 20, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.4, delay:0.5}}>{t("service_p")}</motion.p>
      </div>
      <div className='service-section'>
        <div className="service-container"> 
            <motion.div className='service-item'
            initial={{ y: 20, opacity:0 }}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.4, delay:0.6}}>{t("service1")}<span>|</span>{t("service2")}<span>|</span>{t("service3")}<span>|</span>{t("service4")}</motion.div>
            <div className="table-container">
            <motion.table
            initial={{ y: 20, opacity:0 }}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.4, delay:0.6}}>
                <thead>
                    <tr>
                        <th>{t("treatment")}</th>
                        <th>{t("type")}</th>
                        <th>{t("subtype")}</th>
                        <th>{t("price")}</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) =>
                        service.types && service.types.map((type, typeIndex) => (
                            type.subtypes && type.subtypes.map((subtype, subtypeIndex) => (
                                <tr key={subtype.name}>
                                    {/* Only show the service name on the first row of its group */}
                                    {typeIndex === 0 && subtypeIndex === 0 && (
                                        <td rowSpan={service.types.reduce((acc, curr) => acc + (curr.subtypes ? curr.subtypes.length : 0), 0)}>
                                            {service.service}
                                        </td>
                                    )}
                                    {/* Only show the type name on the first row of its group */}
                                    {subtypeIndex === 0 && (
                                        <td rowSpan={type.subtypes.length}>
                                            {type.type}
                                        </td>
                                    )}
                                    <td>{subtype.name}</td>
                                    {typeIndex === 0 && subtypeIndex === 0 && (
                                        <td rowSpan={service.types.reduce((acc, curr) => acc + (curr.subtypes ? curr.subtypes.length : 0), 0)}>
                                           상담문의
                                        </td>
                                    )}
                                </tr>
                            ))
                        ))
                    )}
                </tbody>
            </motion.table>
        </div>
    
            </div>
       
      </div>
      <Footer/>
    </div>
  )
}

export default Service
