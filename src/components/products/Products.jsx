import React, { useState } from 'react';
import img1 from '../../assets/production/proektirovanie.jpg';
import img2 from '../../assets/production/proizvodstvo.jpg';
import img3 from '../../assets/production/stroitelstvo.jpg';
import './style.css';

const translations = {
  en: {
    mainTitle: "MAIN AREAS OF ACTIVITY",
    sections: [
      {
        id: "design",
        title: "RESERVOIR\nDESIGN",
        color: "#2c3e50",
      },
      {
        id: "production",
        title: "RESERVOIR\nPRODUCTION",
        color: "#c0392b",
      },
      {
        id: "construction",
        title: "RESERVOIR\nCONSTRUCTION",
        color: "#27ae60",
      },
    ],
    designData: {
      title: "PCB 'TECHNIC INNOVATION' Design and Engineering Bureau",
      subtitle: "Our PCB provides services for:",
      capabilities: [
        "- Design and reconstruction projects for industrial facilities;",
        "- KM and KMD projects for reservoirs;",
        "- Practicing specialists;",
        "- Consulting support.",
      ],
      description: [
        "- Designing oil depots and reservoir parks – developing projects for constructing new facilities or reconstructing existing ones;",
        "- Developing KM and KMD design documentation for customers purchasing reservoirs and metal structures from our production.",
      ],
      method:
        "A distinctive feature of PCB 'TECHNIC INNOVATION' is that our projects are 'practice-oriented.' Since our company independently manufactures key oil depot equipment and performs turnkey construction and installation work, our specialists are aware of which equipment is truly effective, which technologies have proven themselves in Russian conditions, and how to avoid issues during construction and subsequent operation of the facility.",
      products: [
        { type: "", typeUz: "", volume: "", volumeUz: "" },
        { type: "", typeUz: "", description: "" },
      ],
    },
    productionData: {
      title: "ZMK 'TECHNIC INNOVATION' Reservoir and Metal Structure Plant",
      subtitle: "Our reservoir plant is fully equipped to manufacture:",
      capabilities: [
        "- Rolling stand for vertical reservoir panels;",
        "- Edge milling line for sheet metal;",
        "- Painting workshop;",
      ],
      description: [
        "- Vertical steel reservoirs (RVS) with volumes from 100 m³ to 50,000 m³ using rolling and sheet-by-sheet methods. Production uses a rolling stand and automatic submerged arc welding.",
        "- Horizontal steel reservoirs (RGS) and EP containers. Production is fully automated, using column-type welding manipulators and Lincoln Electric welding machines, ensuring perfect weld quality.",
        "- Silos and bunkers for bulk products and construction materials. Depending on the structure and volume, they can be produced as rolled blanks or finished products.",
        "ZMK 'TECHNIC INNOVATION' is also equipped with a mechanical metalworking workshop. Our plant independently manufactures hatches, nozzles, and shaped components for reservoirs and containers, reducing the cost of the final product for customers.",
      ],
      method:
        "We ship finished products worldwide. For deliveries in Central Russia, road transport (flatbeds, Euro trucks) is used; for long-distance shipments, rail transport is utilized.",
    },
    constructionData: {
      title: "SMU 'TECHNIC INNOVATION' Construction and Installation Department",
      capabilities: [
        "- Work geography: Russia, CIS, Europe;",
        "- Certified specialists on staff;",
        "- Permits and certifications: OHNVP, GO, KO, NGDO, NAKS;",
        "- Experience working on Gazprom and Lukoil projects.",
      ],
      method:
        "Our SMU offers professional installation of vertical steel reservoirs (RVS), pipeline installation, anti-corrosion protection of metal structures, and general construction work. We take responsibility for turnkey oil depot construction, with all necessary permits and approvals.",
      type:
        "SMU 'TECHNIC INNOVATION' has been developing for over 6 years, gradually increasing its staff of engineers, welders, and installers, equipping teams with modern welding equipment and tools, and expanding PTO and technological control departments.",
      volume:
        "Today, our enterprise has a truly mobile construction and installation structure, unlike many organizations that merely obtain the necessary permits.",
      description:
        "Our SMU operates throughout Russia, CIS countries, and Europe. Our teams are",
      products: "100% mobile and fully autonomous at construction sites.",
    },
  },
  ru: {
    mainTitle: "ОСНОВНЫЕ НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ",
    sections: [
      {
        id: "design",
        title: "ПРОЕКТИРОВАНИЕ\nРЕЗЕРВУАРОВ",
        color: "#2c3e50",
      },
      {
        id: "production",
        title: "ПРОИЗВОДСТВО\nРЕЗЕРВУАРОВ",
        color: "#c0392b",
      },
      {
        id: "construction",
        title: "СТРОИТЕЛЬСТВО\nРЕЗЕРВУАРОВ",
        color: "#27ae60",
      },
    ],
    designData: {
      title: "ПКБ 'ТЕКНИК ИННОВАЦИОН' проектно-конструкторское бюро",
      subtitle: "Наше ПКБ оказывает услуги по:",
      capabilities: [
        "- проекты строительства и реконструкции промышленных объектов;",
        "- проекты КМ и КМД резервуаров;",
        "- специалисты-практики;",
        "- консультационное сопровождение.",
      ],
      description: [
        "- проектированию нефтебаз и резервуарных парков – разработке проектов строительства новых объектов или реконструкции существующих;",
        "- разработке конструкторской документации стадии КМ и КМД для Заказчиков, приобретающих резервуары и металлоконструкции нашего производства.",
      ],
      method:
        "Отличительной чертой ПКБ «ТЕКНИК ИННОВАЦИОН» является то, что наши проекты «привязаны к практике». Поскольку наша компания самостоятельно производит ключевое оборудование нефтебаз и осуществляет строительно-монтажные работы «под ключ», наши специалисты осведомлены о том, какое оборудование действительно эффективно работает, какие технологии хорошо зарекомендовали себя в российских условиях, а также о том, как избежать проблем на этапе строительства и последующей эксплуатации объекта.",
      products: [
        { type: "", typeUz: "", volume: "", volumeUz: "" },
        { type: "", typeUz: "", description: "" },
      ],
    },
    productionData: {
      title: "ЗМК 'ТЕКНИК ИННОВАЦИОН' завод резервуаров и металлоконструкций",
      subtitle: "Наш завод резервуаров полностью оснащен для изготовления:",
      capabilities: [
        "- стенд рулонирования полотнищ вертикальных резервуаров;",
        "- линия торцефрезерной обработки листового металла;",
        "- малярный цех;",
      ],
      description: [
        "- Резервуаров вертикальных стальных РВС объемом от 100 м³ до 50000 м³ методом рулонирования и полистовым способом. Для производства используется стенд рудонирования и автоматическая сварка под флюсом.",
        "- Резервуаров горизонтальных стальных РГС, емкостей ЕП. Производство полностью автоматизировано, используются сварочные манипуляторы колонного типа и сварочные автоматы Lincoln Electric, что обеспечивает идеальное качество сварных соединений.",
        "- Силосов и бункеров для сыпучих продуктов и строительных материалов. В зависимости от типа конструкции и объема могут выпускаться в виде рулонированных заготовок, либо в виде готового изделия.",
        "ЗМК 'ТЕКНИК ИННОВАЦИОН' также оснащен цехом механической металлообработки. Наш ЗМК самостоятельно изготавливает люки, патрубки, фасонные изделия для резервуаров и емкостей, снижая стоимость готового изделия для Заказчиков.",
      ],
      method:
        "Мы отправляем готовую продукцию по всему миру. Для доставки резервуаров по Центральной России используется автотранспорт (тралы, еврофуры), для дальних перевозок — железнодорожный транспорт.",
    },
    constructionData: {
      title: "СМУ 'ТЕКНИК ИННОВАЦИОН' строительно-монтажное управление",
      capabilities: [
        "- география работ: Россия, СНГ, Европа;",
        "- аттестованные специалисты в штате;",
        "- допуски и аттестации: ОХНВП, ГО, КО, НГДО, НАКС;",
        "- опыт работ на объектах 'Газпром', 'Лукойл'.",
      ],
      method:
        "Наше СМУ предлагает профессиональный монтаж резервуаров вертикальных стальных типа РВС, монтаж трубопроводов, работы по антикоррозийной защите металлоконструкций, а также общестроительные работы. Мы берем на себя ответственность за строительство нефтебаз «под ключ», для чего имеются все необходимые допуски и разрешения.",
      type:
        "СМУ 'ТЕКНИК ИННОВАЦИОН' развивалось более 6 лет, постепенно наращивая штат ИТР, сварщиков и монтажников, комплектуя бригады современным сварочным оборудованием и оснасткой, расширяя отделы ПТО и Технологического контроля.",
      volume:
        "Сегодня наше предприятие обладает настоящей мобильной строительно-монтажной структурой, в отличие от большого количества организаций, просто оформивших необходимые допуски.",
      description: "Наше СМУ работает по всей России, странам СНГ и Европе. Наши бригады мобильны на",
      products: "100% и полностью автономны на строительных площадках.",
    },
  },
  uz: {
    mainTitle: "ASOSIY FAOLIYAT YO‘NALISHLARI",
    sections: [
      {
        id: "design",
        title: "REZERVUARLARNI\nLOYIHALASH",
        color: "#2c3e50",
      },
      {
        id: "production",
        title: "REZERVUARLARNI\nISHLAB CHIQARISH",
        color: "#c0392b",
      },
      {
        id: "construction",
        title: "REZERVUARLARNI\nQURISH",
        color: "#27ae60",
      },
    ],
    designData: {
      title: "PKB 'TECHNIK INNOVATSION' loyiha-konstruktorlik byurosi",
      subtitle: "Bizning PKB quyidagi xizmatlarni taqdim etadi:",
      capabilities: [
        "- sanoat ob'ektlarini qurish va rekonstruktsiya qilish loyihalari;",
        "- rezervuarlar uchun KM va KMD loyihalari;",
        "- amaliyotchi mutaxassislar;",
        "- maslahat yordami.",
      ],
      description: [
        "- neft bazalari va rezervuar parklarini loyihalash – yangi ob'ektlar qurish yoki mavjudlarini rekonstruktsiya qilish loyihalarini ishlab chiqish;",
        "- bizning ishlab chiqarishimizdan rezervuarlar va metall konstruktsiyalarni xarid qiluvchi mijozlar uchun KM va KMD bosqichidagi konstruktor hujjatlarini ishlab chiqish.",
      ],
      method:
        "PKB 'TECHNIK INNOVATSION'ning o‘ziga xos xususiyati shundaki, bizning loyihalarimiz 'amaliyotga bog‘liq'. Chunki kompaniyamiz neft bazalarining asosiy uskunalarini mustaqil ravishda ishlab chiqaradi va 'kalit topshirish' asosida qurilish-montaj ishlarini amalga oshiradi, bizning mutaxassislarimiz qaysi uskunalar haqiqatda samarali ishlashi, qaysi texnologiyalar Rossiya sharoitida o‘zini yaxshi ko‘rsatgani va qurilish va keyingi ekspluatatsiya bosqichida muammolarni qanday oldini olish haqida xabardor.",
      products: [
        { type: "", typeUz: "", volume: "", volumeUz: "" },
        { type: "", typeUz: "", description: "" },
      ],
    },
    productionData: {
      title: "ZMK 'TECHNIK INNOVATSION' rezervuarlar va metall konstruktsiyalar zavodi",
      subtitle: "Bizning rezervuar zavodimiz quyidagilarni ishlab chiqarish uchun to‘liq jihozlangan:",
      capabilities: [
        "- vertikal rezervuarlar panellarini rulonlash stendi;",
        "- metall plitalarni chet frezalash liniyasi;",
        "- bo‘yoq sexi;",
      ],
      description: [
        "- 100 m³ dan 50,000 m³ gacha bo‘lgan vertikal po‘lat rezervuarlar (RVS) rulonlash va varaq bo‘yicha usullar yordamida. Ishlab chiqarishda rulonlash stendi va avtomatik fluks ostida payvandlash ishlatiladi.",
        "- Gorizontal po‘lat rezervuarlar (RGS) va EP idishlari. Ishlab chiqarish to‘liq avtomatlashtirilgan, ustun tipidagi payvandlash manipulatorlari va Lincoln Electric payvandlash avtomatlari qo‘llaniladi, bu payvand choklarining mukammal sifatini ta'minlaydi.",
        "- Donador mahsulotlar va qurilish materiallari uchun siloslar va bunkerlar. Konstruktsiya turi va hajmiga qarab, ular rulonlangan blanklar yoki tayyor mahsulot sifatida ishlab chiqarilishi mumkin.",
        "ZMK 'TECHNIK INNOVATSION' shuningdek, mexanik metall ishlov berish sexi bilan jihozlangan. Zavodimiz rezervuarlar va idishlar uchun lyuklar, trubkalar va shaklli buyumlarni mustaqil ravishda ishlab chiqaradi, bu mijozlar uchun tayyor mahsulot narxini pasaytiradi.",
      ],
      method:
        "Biz tayyor mahsulotlarni butun dunyo bo‘ylab jo‘natamiz. Markaziy Rossiyaga yetkazib berish uchun avtotransport (platformalar, yevrofuralar), uzoq masofali tashishlar uchun temir yo‘l transporti qo‘llaniladi.",
    },
    constructionData: {
      title: "SMU 'TECHNIK INNOVATSION' qurilish-montaj boshqarmasi",
      capabilities: [
        "- ishlar geografiyasi: Rossiya, MDH, Yevropa;",
        "- shtatda sertifikatlangan mutaxassislar;",
        "- ruxsatnomalar va sertifikatlar: OHNVP, GO, KO, NGDO, NAKS;",
        "- 'Gazprom', 'Lukoil' ob'ektlarida ish tajribasi.",
      ],
      method:
        "Bizning SMU vertikal po‘lat rezervuarlar (RVS)ni professional montaj qilish, quvur liniyalarini o‘rnatish, metall konstruktsiyalarni korroziyadan himoya qilish ishlari va umumiy qurilish ishlarini taklif qiladi. Biz barcha kerakli ruxsatnoma va tasdiqlarga ega bo‘lgan holda neft bazalarini 'kalit topshirish' asosida qurish uchun mas'uliyatni o‘z zimmamizga olamiz.",
      type:
        "SMU 'TECHNIK INNOVATSION' 6 yildan ortiq vaqt davomida rivojlanib, muhandislar, payvandchilar va montajchilar shtatini asta-sekin ko‘paytirib, jamoalarni zamonaviy payvandlash uskunalari va jihozlar bilan ta'minlab, PTD va texnologik nazorat bo‘limlarini kengaytirdi.",
      volume:
        "Bugungi kunda bizning korxonamiz, faqat kerakli ruxsatnomalarni olgan ko‘plab tashkilotlardan farqli o‘laroq, haqiqiy mobil qurilish-montaj tuzilmasiga ega.",
      description:
        "Bizning SMU butun Rossiya, MDH mamlakatlari va Yevropada ishlaydi. Bizning jamoalarimiz",
      products: "100% mobil va qurilish maydonchalarida to‘liq avtonomdir.",
    },
  },
};

const Products = ({ lang = "uz" }) => {
  const [activeSection, setActiveSection] = useState('production');
  const t = translations[lang] || translations.uz; // Fallback to Uzbek if lang is invalid

  return (
    <div className="klu-container">
      {/* Header */}
      <div className="klu-header">
        <h2 className="klu-main-title">{t.mainTitle}</h2>

        {/* Navigation Tabs */}
        <div className="klu-nav-tabs">
          {t.sections.map((section) => (
            <button
              key={section.id}
              className={`klu-nav-tab ${activeSection === section.id ? 'klu-active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <h2 className="klu-tab-text">{section.title}</h2>
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="klu-content">
        {activeSection === 'production' && (
          <div className="klu-production-section">
            <div className="klu-production-grid">
              <div className="klu-image-container">
                <img src={img2} alt="" />
              </div>
              <div className="klu-info-panel">
                <h3 className="klu-company-title">{t.productionData.title}</h3>
                <div className="klu-capabilities">
                  {t.productionData.capabilities.map((item, index) => (
                    <span key={index} className="klu-capability-ru">{item}</span>
                  ))}
                </div>
                <p className="klu-company-subtitle">{t.productionData.subtitle}</p>
                <div className="klu-capabilities">
                  {t.productionData.description.map((item, index) => (
                    <span style={{ marginTop: "8px" }} className="klu-capability-ru">{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <span className="klu-capability-ru">{t.productionData.method}</span>
          </div>
        )}

        {activeSection === 'design' && (
          <div className="klu-production-section">
            <div className="klu-production-grid">
              <div className="klu-image-container">
                <img src={img1} alt="" />
              </div>
              <div className="klu-info-panel">
                <h3 className="klu-company-title">{t.designData.title}</h3>
                <div className="klu-capabilities">
                  {t.designData.capabilities.map((item, index) => (
                    <span className="klu-capability-ru">{item}</span>
                  ))}
                </div>
                <p className="klu-company-subtitle">{t.designData.subtitle}</p>
                <div className="klu-capabilities">
                  {t.designData.description.map((item, index) => (
                    <span className="klu-capability-ru">{item}</span>
                  ))}
                </div>
                <span className="klu-capability-ru">{t.designData.method}</span>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'construction' && (
          <div className="klu-production-section">
            <div className="klu-production-grid">
              <div className="klu-image-container">
                <img src={img3} alt="" />
              </div>
              <div className="klu-info-panel">
                <h3 className="klu-company-title">{t.constructionData.title}</h3>
                <div className="klu-capabilities">
                  {t.constructionData.capabilities.map((item, index) => (
                    <span className="klu-capability-ru">{item}</span>
                  ))}
                </div>
                <span className="klu-capability-ru" style={{ marginTop: "10px" }}>{t.constructionData.method}</span>
                <span className="klu-capability-ru" style={{ marginTop: "10px" }}>{t.constructionData.type}</span>
                <span className="klu-capability-ru" style={{ marginTop: "10px" }}>{t.constructionData.volume}</span>
                <span className="klu-capability-ru" style={{ marginTop: "10px" }}>{t.constructionData.description}</span>
              </div>
            </div>
            <span className="klu-capability-ru">{t.constructionData.products}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;