import React from "react";
import "./style.css";

const SodiumNitrateInfo = ({ lang = "uz" }) => {
  const translations = {
    uz: {
      title: "AFZALLIKLAR",
      subtitle: "Mijozlarimizning sharhlari bo'yicha, 'REZERVUARSTROYTEL' bir qator strategik afzalliklarga ega:",
      items: [
        {
          number: "01",
          title: "Tarmoq professionalligi",
          text: "Kompaniya neft-kimyo mahsulotlarini saqlash va tashish ob'ektlarini qurishga ixtisoslashgan. Bu ishlarning yuqori sifatini ta'minlaydi va mijoz uchun xarajatlarni kamaytiradi."
        },
        {
          number: "02",
          title: "O'z ilmiy-texnologik bazasi",
          text: "Kompaniya SSSR davridan beri rezervuar qurilishi tajribasiga ega ITR jamoasi va yangi texnologiyalarni faol joriy qilayotgan yosh mutaxassislarning intellektual resurslarini rivojlantiradi."
        },
        {
          number: "03",
          title: "Yevropa boshqaruvi",
          text: "Kompaniya zamonaviy boshqaruv texnologiyalariga sarmoya kiritadi. Biz kompaniyani mijozga yo'naltirilgan qildik, loyiha rahbarlari jamoasini shakllantirdik, bu mijozlarning vaqt va hissiy xarajatlarini qisqartiradi."
        },
        {
          number: "04",
          title: "O'z ishlab chiqarish quvvatlari",
          text: "Kompaniya po'lat rezervuarlar, idishlar va metall konstruktsiyalarni mustaqil ravishda ishlab chiqaradi."
        },
        {
          number: "05",
          title: "Mobillik va to'liq tsikl xizmatlari",
          text: "Biz MDH va Yevropa mamlakatlari hududida ishlaymiz. Biz ob'ektni professional qo'llab-quvvatlash uchun to'liq mas'uliyatni o'z zimmamizga olamiz: loyihalash, asosiy elementlarni ishlab chiqarish, qurilish va montaj ishlarini nazorat qilish va kafolat majburiyatlarini o'z zimmamizga olamiz."
        },
        {
          number: "06",
          title: "Qurilish ichidagi qurilish",
          text: "Qurilish-montaj brigadalari 100% mobil va qurilish maydonlarida to'liq avtonomdir."
        }
      ]
    },
    ru: {
      title: "ПРЕИМУЩЕСТВА",
      subtitle: "По отзывам наших заказчиков, 'РЕЗЕРВУАРСТРОЙТЕЛЬ' имеет ряд стратегических преимуществ:",
      items: [
        {
          number: "01",
          title: "Нишевый профессионализм",
          text: "Компания уже специализируется на строительстве объектов складывания и перевалки жидких нефтехимических продуктов. Это обеспечивает высокое качество работ и снижение их стоимости для заказчика."
        },
        {
          number: "02",
          title: "Собственная научно-технологическая база",
          text: "Компания развивает интеллектуальные ресурсы команды ИТР с практикой резервуаростроения со времен СССР и молодых специалистов, активно внедряющих новые технологии."
        },
        {
          number: "03",
          title: "Европейский менеджмент",
          text: "Компания инвестирует в современные технологии управления. Мы сделали компанию клиент-ориентированной, сформировали команду руководителей проектов, сокращающих временные и эмоциональные затраты заказчиков."
        },
        {
          number: "04",
          title: "Собственные производственные мощности",
          text: "Компания самостоятельно производит стальные резервуары, емкости и металлоконструкции."
        },
        {
          number: "05",
          title: "Мобильность и услуги полного цикла",
          text: "Мы работаем на всей территории стран СНГ и Европы. Мы берем на себя полную ответственность за профессиональное сопровождение объекта: проектируем его, производим ключевые элементы, контролируем строительство и монтажные работы и несем гарантийные обязательства."
        },
        {
          number: "06",
          title: "Строительство в строительстве",
          text: "Строительство монтажные бригады мобильны на 100% и полностью автономны на стройплощадках."
        }
      ]
    },
    en: {
      title: "ADVANTAGES",
      subtitle: "According to our clients' feedback, 'RESERVOIRBUILDER' has several strategic advantages:",
      items: [
        {
          number: "01",
          title: "Niche Professionalism",
          text: "The company specializes in the construction of storage and handling facilities for liquid petrochemical products. This ensures high-quality work and cost reduction for the client."
        },
        {
          number: "02",
          title: "Proprietary Scientific and Technological Base",
          text: "The company develops the intellectual resources of its engineering team with experience in tank construction since Soviet times and young specialists actively implementing new technologies."
        },
        {
          number: "03",
          title: "European Management",
          text: "The company invests in modern management technologies. We have made the company client-oriented, formed a team of project managers that reduce time and emotional costs for clients."
        },
        {
          number: "04",
          title: "Own Production Facilities",
          text: "The company independently manufactures steel tanks, containers, and metal structures."
        },
        {
          number: "05",
          title: "Mobility and Full-Cycle Services",
          text: "We operate throughout the CIS and Europe. We take full responsibility for the professional support of the project: designing it, producing key elements, overseeing construction and installation works, and fulfilling warranty obligations."
        },
        {
          number: "06",
          title: "Construction within Construction",
          text: "Construction and installation teams are 100% mobile and fully autonomous at construction sites."
        }
      ]
    }
  };

  const content = translations[lang] || translations.uz;

  return (
    <div className="vju-premium-container">
      <h1 className="vju-premium-title">{content.title}</h1>
      <p className="vju-premium-subtitle"><i>{content.subtitle}</i></p>
      <div className="vju-premium-list">
        {content.items.map((item, index) => (
          <div key={index} className="vju-premium-item">
            <h2 className="vju-item-number">{item.number}</h2>
            <strong className="vju-item-title">{item.title}</strong>
            <p className="vju-item-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SodiumNitrateInfo;