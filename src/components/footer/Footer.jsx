import React from 'react';
import { Mail } from "lucide-react";
import TEKNIK from "../../assets/TEKNIK.jpg";
import img1 from '../../assets/footer/ico-my.png';
import img2 from '../../assets/footer/ico-my1.png';
import img3 from '../../assets/footer/ico-my2.png';
import img4 from '../../assets/footer/ico-my3.png';
import img5 from '../../assets/footer/ico-my4.png';
import './style.css';

const Footer = ({ lang = "ru" }) => {
  const translations = {
    ru: {
      email: "Эл.почта:",
      phone: "Телефон/факс:",
      copyright: "© 2012-2025 РЕЗЕРВУАРОСТРОИТЕЛЬ",
      privacy: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
      sections: {
        company: {
          title: "О КОМПАНИИ",
          items: [
            "Продукция завода",
            "Услуги СМУ",
            "Услуги ПКБ",
            "Справочник оборудования"
          ]
        },
        catalog: {
          title: "КАТАЛОГ",
          items: [
            "Резервуар вертикальный стальной РВС",
            "Бак-аккумулятор горячей воды БАГВ",
            "Резервуар горизонтальный стальной РГС",
            "Ёмкости подземные дренажные ЕП / ЕПП",
            "Силос / бункер для сыпучих продуктов и материалов",
            "Свеча рассеивания газа СР",
            "Резервуары для различных продуктов",
            "Справочник резервуарного оборудования"
          ]
        },
        design: {
          title: "ПРОЕКТИРОВАНИЕ",
          items: [
            "Проектирование нефтебаз",
            "Проектирование резервуарных парков",
            "Проектирование резервуаров РВС"
          ]
        },
        production: {
          title: "ПРОИЗВОДСТВО",
          items: [
            "Рулонные резервуары вертикальные",
            "Полистовые резервуары вертикальные",
            "Производство емкостей горизонтальных стальных",
            "Услуги металлообработки в Саратове"
          ]
        },
        construction: {
          title: "СТРОИТЕЛЬСТВО",
          items: [
            "Строительство оснований и фундаментов резервуаров РВС",
            "Монтаж резервуаров",
            "Контроль качества, испытания резервуаров",
            "Антикоррозийная обработка и покраска резервуаров",
            "Теплоизоляция резервуаров",
            "Зачистка резервуаров",
            "Техническое диагностирование (дефектоскопия) резервуаров",
            "Ремонт резервуаров"
          ]
        }
      }
    },
    en: {
      email: "Email:",
      phone: "Phone/fax:",
      copyright: "© 2012-2025 TANK CONSTRUCTION",
      privacy: "PRIVACY POLICY",
      sections: {
        company: {
          title: "ABOUT COMPANY",
          items: [
            "Factory products",
            "Construction services",
            "Design bureau services",
            "Equipment handbook"
          ]
        },
        catalog: {
          title: "CATALOG",
          items: [
            "Vertical steel tank RVS",
            "Hot water accumulator tank BAGV",
            "Horizontal steel tank RGS",
            "Underground drainage tanks EP / EPP",
            "Silo / bunker for bulk products and materials",
            "Gas dispersion flare SR",
            "Tanks for various products",
            "Tank equipment handbook"
          ]
        },
        design: {
          title: "DESIGN",
          items: [
            "Oil depot design",
            "Tank farm design",
            "RVS tank design"
          ]
        },
        production: {
          title: "PRODUCTION",
          items: [
            "Rolled vertical tanks",
            "Sheet vertical tanks",
            "Horizontal steel tank production",
            "Metalworking services in Saratov"
          ]
        },
        construction: {
          title: "CONSTRUCTION",
          items: [
            "Foundation construction for RVS tanks",
            "Tank installation",
            "Quality control, tank testing",
            "Anti-corrosion treatment and tank painting",
            "Tank thermal insulation",
            "Tank cleaning",
            "Technical diagnostics (flaw detection) of tanks",
            "Tank repair"
          ]
        }
      }
    },
    uz: {
      email: "Elektron pochta:",
      phone: "Telefon/faks:",
      copyright: "© 2012-2025 REZERVUAR QURILISHI",
      privacy: "MAXFIYLIK SIYOSATI",
      sections: {
        company: {
          title: "KOMPANIYA HAQIDA",
          items: [
            "Zavod mahsulotlari",
            "Qurilish xizmatlari",
            "Loyiha byurosi xizmatlari",
            "Asbob-uskunalar ma'lumotnomasi"
          ]
        },
        catalog: {
          title: "KATALOG",
          items: [
            "Vertikal po'lat rezervuar RVS",
            "Issiq suv akumulyator baki BAGV",
            "Gorizontal po'lat rezervuar RGS",
            "Er osti drenaj baklari EP / EPP",
            "Quyma mahsulotlar va materiallar uchun silos / bunker",
            "Gaz tarqatish shamchasi SR",
            "Turli mahsulotlar uchun rezervuarlar",
            "Rezervuar uskunalari ma'lumotnomasi"
          ]
        },
        design: {
          title: "LOYIHALASH",
          items: [
            "Neft ombori loyihalash",
            "Rezervuar parki loyihalash",
            "RVS rezervuar loyihalash"
          ]
        },
        production: {
          title: "ISHLAB CHIQARISH",
          items: [
            "Rulonli vertikal rezervuarlar",
            "Varaqdagi vertikal rezervuarlar",
            "Gorizontal po'lat rezervuar ishlab chiqarish",
            "Saratovda metall ishlov berish xizmatlari"
          ]
        },
        construction: {
          title: "QURILISH",
          items: [
            "RVS rezervuarlar uchun asos va poydevor qurilishi",
            "Rezervuar o'rnatish",
            "Sifat nazorati, rezervuar sinovi",
            "Korroziyaga qarshi ishlov va rezervuar bo'yash",
            "Rezervuar issiqlik izolyatsiyasi",
            "Rezervuar tozalash",
            "Rezervuarlarning texnik diagnostikasi (nuqsonlarni aniqlash)",
            "Rezervuar ta'miri"
          ]
        }
      }
    }
  };

  const t = translations[lang] || translations.ru;

  return (
    <footer className="fot-footer">
      <div className="fot-container">
        <div className="fot-grid">

          {/* Company Section */}
          <div className="fot-section">
            <div className="fot-icon">
              <img src={img1} alt="" />
            </div>
            <h5 className="fot-section-title">{t.sections.company.title}</h5>
            <div className="fot-section-list">
              {t.sections.company.items.map((item, index) => (
                <p key={index}>
                  <a href="#" className="fot-section-link">{item}</a>
                </p>
              ))}
              <p>
                <a href={`mailto:teknikinnovatsion.info@gmail.com`} className="fot-section-link">
                  <span style={{ color: "green" }}>teknikinnovatsion.info@gmail.com</span>
                </a>
              </p>
              <h3><i>TEKNIK INNOVATSION</i> </h3>
            </div>
          </div>

          {/* Catalog Section */}
          <div className="fot-section">
            <div className="fot-icon">
              <img src={img2} alt="" />
            </div>
            <h5 className="fot-section-title">{t.sections.catalog.title}</h5>
            <div className="fot-section-list">
              {t.sections.catalog.items.map((item, index) => (
                <p key={index}>
                  <a href="#" className="fot-section-link">{item}</a>
                </p>
              ))}
            </div>
          </div>

          {/* Design Section */}
          <div className="fot-section">
            <div className="fot-icon">
              <img src={img3} alt="" />
            </div>
            <h5 className="fot-section-title">{t.sections.design.title}</h5>
            <div className="fot-section-list">
              {t.sections.design.items.map((item, index) => (
                <p key={index}>
                  <a href="#" className="fot-section-link">{item}</a>
                </p>
              ))}
            </div>
          </div>

          {/* Production Section */}
          <div className="fot-section">
            <div className="fot-icon">
              <img src={img4} alt="" />
            </div>
            <h5 className="fot-section-title">{t.sections.production.title}</h5>
            <div className="fot-section-list">
              {t.sections.production.items.map((item, index) => (
                <p key={index}>
                  <a href="#" className="fot-section-link">{item}</a>
                </p>
              ))}
            </div>
          </div>

          {/* Construction Section */}
          <div className="fot-section">
            <div className="fot-icon">
              <img src={img5} alt="" />
            </div>
            <h5 className="fot-section-title">{t.sections.construction.title}</h5>
            <div className="fot-section-list">
              {t.sections.construction.items.map((item, index) => (
                <p key={index}>
                  <a href="#" className="fot-section-link">{item}</a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;

