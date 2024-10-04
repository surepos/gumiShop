import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "kr", 
    resources: {
      kr: {
        translation: {
            "home": "홈", 
            "treatment": "시술",  
            "gallery": "시술사진", 
          "title": "우리의 손길로 ",
          "title1": "완성하는 당신의  ",
          "title2": "아름다움",
          "consult": "상담하기",
          "location_info": "오시는길 & 운용시간",
          "about_us": "우리에 대해",
          "about_paragraph": "박승생Beauty를 방문해주셔서 감사합니다. 저희 매장은 구미에 위치해 있으며, 뛰어난 서비스와 품질에 대한 헌신으로 잘 알려져 있습니다. 8년 이상의 경력을 가진 숙련된 전문가들이 당신의 자연스러운 아름다움을 더욱 돋보이게 할 맞춤형 시술을 제공합니다. 손톱 관리, 아름다운 속눈썹 연장, 완벽한 눈썹 정리, 또는 전문적인 스킨 플래닝까지, 고객님의 개성과 필요에 맞는 서비스를 제공해드립니다.",
          "years_experience": "+8 Years | +1000",
          "customer_service": "고객센터",
          "working_hours": "운영 시간",
          "monday_wednesday_thursday": "월/수/목",
          "tuesday_friday": "화/금",
          "weekend_holiday": "토/일/휴일",
          "location": "처소",
          "address": "구미시 진평동 76-2 1층",
          "online_consultation": "온라인 상담",
          "plus_friend": "플러스친구",
          "name": "이름",
          "service": "서비스",
          "phone_number": "전화 번호",
          "submit": "문의하세요",
          "service_title": "시술비용",
          "service_p": "합리적인 가격으로 아름다움과 자신감을 동시에 얻으세요.",
          "service1": "속눈썹연장",
          "service2": "속눈썹펌",
          "service3": "네일",
          "service4": "스킨플래닝",
          "type": "종류",
          "price": "가격",
          "subtype": "하위종류",
          "gallery_title": "시술사진",
          "gallery_p": "눈길을 사로잡는 순간들, 세련됨과 자연스러움의 조화 당신의 아름다움을  담은 특별한 갤러리"
        }
      },
      en: {
        translation: {
            "home": "Home", 
            "treatment": "Treatment",  
            "gallery": "Gallery", 
          "title": "With our hands, ",
          "title1": "We perfect your ",
          "title2": "beauty",
          "consult": "Consultation",
          "location_info": "Directions & Operating Hours",
          "about_us": "About Us",
          "about_paragraph": "Thank you for visiting 박승생Beauty. We are located in Gumi and are known for our commitment to outstanding service and quality. Our skilled experts with over 8 years of experience offer personalized treatments to enhance your natural beauty. From nail care to beautiful eyelash extensions, perfect eyebrow shaping, or professional skin planning, we offer services tailored to your individuality and needs.",
          "years_experience": "+8 Years | +1000",
          "customer_service": "Customer Service",
          "working_hours": "Operating Hours",
          "monday_wednesday_thursday": "Mon/Wed/Thu",
          "tuesday_friday": "Tue/Fri",
          "weekend_holiday": "Sat/Sun/Holidays",
          "location": "location",
          "address": "76-2, Jinpyeong-dong, Gumi City, 1st floor",
          "online_consultation": "Online Consultation",
          "plus_friend": "Plus friend",
          "name": "Name",
          "service": "Service",
          "phone_number": "Phone Number",
          "submit": "Inquire",
          "service_title": "Treatment Cost",
          "service_p": "Enhance your beauty and confidence at an affordable price.",
          "service1": "Eyelash extensions",
          "service2": "Eyelash perm",
          "service3": "Nail",
          "service4": "Skin Planning",
          "type": "Type",
          "price": "Price",
          "subtype": "Subtype",
          
            "gallery_title": "Treatment Photos",
            "gallery_p": "Captivating moments, a harmony of sophistication and natural beauty, a special gallery capturing your elegance."
          
          
        }
      },
      vn: {
        translation: {
            "home": "trang chủ", 
            "treatment": "sự đối đãi",  
            "gallery": "phòng trưng bày",  
          "title": "chúng tôi hoàn",
          "title1": "thiện vẻ đẹp",
          "title2": "của bạn",
          "consult": "Tư vấn",
          "location_info": "Chỉ dẫn & Giờ hoạt động",
          "about_us": "Về chúng tôi",
          "about_paragraph": "Cảm ơn bạn đã ghé thăm 박승생Beauty. Chúng tôi tọa lạc tại Gumi và được biết đến với cam kết về dịch vụ và chất lượng xuất sắc. Các chuyên gia lành nghề của chúng tôi với hơn 8 năm kinh nghiệm cung cấp các liệu pháp cá nhân hóa để nâng cao vẻ đẹp tự nhiên của bạn. Từ chăm sóc móng tay, nối mi đẹp, tạo dáng lông mày hoàn hảo đến chăm sóc da chuyên nghiệp, chúng tôi cung cấp dịch vụ phù hợp với cá tính và nhu cầu của bạn.",
          "years_experience": "+8 Năm | +1000",
          "customer_service": "Dịch vụ khách hàng",
          "working_hours": "Giờ hoạt động",
          "monday_wednesday_thursday": "Thứ Hai/Thứ Tư/Thứ Năm",
          "tuesday_friday": "Thứ Ba/Thứ Sáu",
          "weekend_holiday": "Thứ Bảy/Chủ Nhật/Ngày lễ",
          "location": "vị trí",
          "address": "76-2, Jinpyeong-dong, Thành phố Gumi, Tầng 1",
          "online_consultation": "Tư vấn trực tuyến",
          "plus_friend": "thêm vào",
          "name": "Tên",
          "service": "Dịch vụ",
          "phone_number": "Số điện thoại",
          "submit": "Gửi",
          "service_title": "Chi phí điều trị",
  "service_p": "Nâng cao vẻ đẹp và sự tự tin của bạn với giá cả phải chăng.",
  "service1": "Nối mi",
  "service2": "Uốn mi",
  "service3": "Móng tay",
  "service4": "Chăm sóc da",
  "type": "Loại",
  "price": "Giá",
  "subtype": "Phân loại",
  
    "gallery_title": "Hình ảnh điều trị",
    "gallery_p": "Những khoảnh khắc thu hút, sự hài hòa giữa tinh tế và vẻ đẹp tự nhiên, bộ sưu tập đặc biệt lưu giữ nét thanh lịch của bạn."
  
  
        }
      },
      th: {
        translation: {
            "home": "บ้าน", 
            "treatment": "การรักษา",  
            "gallery": "แกลเลอรี่", 
          "title": "ด้วยมือของเรา",
          "title1": "เราสมบูรณ์แบบ",
          "title2": "ความงามของคุณ",
          "consult": "ปรึกษาทันที",
          "location_info": "เส้นทาง & เวลาทำการ",
          "about_us": "เกี่ยวกับเรา",
          "about_paragraph": "ขอบคุณที่เยี่ยมชม 박승생Beauty ร้านของเราตั้งอยู่ที่กูมีและเป็นที่รู้จักในด้านการให้บริการและคุณภาพที่ยอดเยี่ยม ผู้เชี่ยวชาญที่มีประสบการณ์กว่า 8 ปีของเรานำเสนอการรักษาเฉพาะบุคคลเพื่อเสริมความงามตามธรรมชาติของคุณ ตั้งแต่การดูแลเล็บ การต่อขนตาอันงดงาม การจัดแต่งคิ้วที่สมบูรณ์แบบ หรือการวางแผนผิวอย่างมืออาชีพ เราให้บริการตามความต้องการและความเป็นเอกลักษณ์ของคุณ",
          "years_experience": "+8 ปี | +1000",
          "customer_service": "บริการลูกค้า",
          "working_hours": "เวลาทำการ",
          "monday_wednesday_thursday": "จันทร์/พุธ/พฤหัสบดี",
          "tuesday_friday": "อังคาร/ศุกร์",
          "weekend_holiday": "เสาร์/อาทิตย์/วันหยุด",
          "location": "ที่ตั้ง",
          "address": "76-2, Jinpyeong-dong, เมืองกูมี, ชั้น 1",
          "online_consultation": "การให้คำปรึกษาออนไลน์",
          "plus_friend": "บวกเพื่อน",
          "name": "ชื่อ",
          "service": "บริการ",
          "phone_number": "หมายเลขโทรศัพท์",
          "submit": "ส่ง",
          "service_title": "ค่าบริการการรักษา",
          "service_p": "เพิ่มความสวยงามและความมั่นใจของคุณในราคาที่เอื้อมถึง",
          "service1": "ต่อขนตา",
          "service2": "ดัดขนตา",
          "service3": "เล็บ",
          "service4": "การดูแลผิว",
          "type": "ประเภท",
          "price": "ราคา",
          "subtype": "ชนิดย่อย",
          
            "gallery_title": "รูปภาพการรักษา",
            "gallery_p": "ช่วงเวลาที่ดึงดูดใจ ความลงตัวระหว่างความหรูหราและความเป็นธรรมชาติ แกลเลอรี่พิเศษที่เก็บภาพความงามของคุณ"
          
          
        }
      }
    }
  });

export default i18n;
