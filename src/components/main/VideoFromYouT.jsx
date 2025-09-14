import React, { useEffect } from "react";
import "./main.css";

const VideoFromYouT = ({ lang = "ru" }) => {

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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Skript yuklangach blokni qayta ishlash
    script.onload = () => {
      if (window.instgrm) window.instgrm.Embeds.process();
    };
  }, []);
  return (
    <section className="bez-about-section">
      <div className="bez-container">
        <h2 className="bez-section-title">{selectedContent.about.sectionTitle}</h2>
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
      </div>

      <div className="bez-container">
        <h2 className="bez-section-title">{selectedContent.about.sectionTitle}</h2>
        <div className="bez-about-image">
          {/* <iframe
            src="https://www.youtube.com/embed/6eeedeutfXM?si=i61HHfHy56BcIZxg&amp;start=13"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/DNE8RV-ITJG/?utm_source=ig_web_copy_link"
            data-instgrm-version="14"
            style={{ maxWidth: "300px", margin: "auto", height: "400px" }}
          ></blockquote>

        </div>
      </div>
    </section>
  );
};

export default VideoFromYouT;


