import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./main.css";

// Replace these with actual unique image paths
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import banner4 from "../../assets/banner/banner4.png";
import banner5 from "../../assets/banner/banner5.png";
import banner6 from "../../assets/banner/banner6.png";
import factory from "../../assets/factory.jpg"; // Placeholder: use actual factory image

const Main = ({ lang = "ru" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  // Array of banner images
  const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

  // Language-specific content
  const content = {
    en: {
      about: {
        sectionTitle: "Turnkey Tanks and Tank Farms",
        companyTitle: "TEKNIK INNOVATSION – a Russian engineering company specializing in the production of tanks and the construction of tank farms.",
        description: [
          "Our clients are primarily petrochemical companies with the highest standards for quality, safety, and compliance in all processes. We also have extensive experience working with large and medium-sized agricultural enterprises and food industry companies, addressing their needs for storage facilities for liquid and bulk raw materials and finished products.",
          "Our tanks and vessels are used across Russia, CIS countries, and beyond. The geographical scope of our construction and installation work is extensive, with our teams typically operating in 5–10 locations across the Eurasian continent simultaneously.",
          "In recent years, the company has invested in modern management and development technologies. We have become client-oriented and are developing a web resource that provides industry professionals with comprehensive and verified technical information.",
        ],
        button: "Learn More",
      },
      slides: [
        { title: "Slide 1", description: "High-quality chemical production" },
        { title: "Slide 2", description: "Innovative industrial solutions" },
        { title: "Slide 3", description: "Reliable mineral fertilizers" },
      ],
    },
    ru: {
      about: {
        sectionTitle: "Резервуары и резервуарные парки под ключ",
        companyTitle: "АО «ТЕКНИК ИННОВАЦИОН» – российское инжиниринговое предприятие, специализирующееся на производстве резервуаров и строительстве резервуарных парков.",
        description: [
          "Наши заказчики – преимущественно предприятия нефтехимической отрасли, предъявляющие высокие требования к качеству, безопасности и легитимности всех процессов. Также у нас есть богатый опыт работы с крупными и средними сельскохозяйственными предприятиями и компаниями пищевой промышленности, нуждающимися в хранилищах для жидкого и сыпучего сырья и продукции.",
          "Резервуары и емкости нашего производства используются по всей России, в странах СНГ и за рубежом. География наших строительно-монтажных работ обширна: наши бригады обычно работают одновременно в 5–10 точках Евразийского континента.",
          "В последние годы компания инвестирует в современные технологии управления и развития. Мы стали клиентоориентированными и создаем веб-ресурс, предоставляющий специалистам отрасли полную и проверенную техническую информацию.",
        ],
        button: "Подробнее",
      },
      slides: [
        { title: "Слайд 1", description: "Высококачественное химическое производство" },
        { title: "Слайд 2", description: "Инновационные промышленные решения" },
        { title: "Слайд 3", description: "Надежные минеральные удобрения" },
      ],
    },
    uz: {
      about: {
        sectionTitle: "Suv omborlari va ombor parklari kalit topshirilgan holda",
        companyTitle: "AO «TEKNIK INNOVATSION» – suv omborlari ishlab chiqarish va ombor parklari qurilishiga ixtisoslashgan Rossiya muhandislik kompaniyasi.",
        description: [
          "Bizning mijozlarimiz, asosan, sifat, xavfsizlik va barcha jarayonlarning qonuniyligiga eng yuqori talablar qo‘yadigan neft-kimyo sohasi korxonalari hisoblanadi. Shuningdek, biz katta va o‘rta hajmdagi qishloq xo‘jaligi korxonalari va oziq-ovqat sanoati kompaniyalari bilan suyuq va quyma xomashyo hamda tayyor mahsulot saqlash omborlari qurilishida katta tajribaga egamiz.",
          "Bizning ishlab chiqargan suv omborlari va idishlarimiz Rossiya, MDH mamlakatlari va undan tashqarida foydalaniladi. Qurilish va o‘rnatish ishlarimizning geografiyasi keng: brigadalarimiz odatda Yevroosiyo qit’asining 5–10 nuqtasida bir vaqtda ishlaydi.",
          "So‘nggi yillarda kompaniya zamonaviy boshqaruv va rivojlanish texnologiyalariga sarmoya kiritmoqda. Biz mijozlarga yo‘naltirilgan kompaniyaga aylandik va soha mutaxassislariga to‘liq va tasdiqlangan texnik ma’lumotlarni taqdim etuvchi veb-resurs yaratmoqdamiz.",
        ],
        button: "Batafsil",
      },
      slides: [
        { title: "Slayd 1", description: "Yuqori sifatli kimyoviy ishlab chiqarish" },
        { title: "Slayd 2", description: "Innovatsion sanoat yechimlari" },
        { title: "Slayd 3", description: "Ishonchli mineral o‘g‘itlar" },
      ],
    },
  };

  // Select content based on lang prop, default to Russian if lang is invalid
  const selectedContent = content[lang] || content.ru;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="bez-website-container">
      {/* Hero Slider */}
      <section className="bez-hero-slider" style={{ backgroundImage: `url(${banners[currentSlide]})` }}>
        <div className="bez-slider-container">
          <button className="bez-slider-nav bez-slider-prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="bez-slider-nav bez-slider-next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
          <div className="bez-slider-dots">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`bez-dot ${index === currentSlide ? "bez-dot-active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bez-about-section">
        <div className="bez-container">
          <h2 className="bez-section-title">{selectedContent.about.sectionTitle}</h2>
          <h3 className="bez-company-title">{selectedContent.about.companyTitle}</h3>
          <div className="bez-about-image">
            <iframe
              src="https://www.youtube.com/embed/6eeedeutfXM?si=i61HHfHy56BcIZxg&amp;start=13"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {selectedContent.about.description.map((paragraph, index) => (
            <p key={index} className="bez-about-description">{paragraph}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;


