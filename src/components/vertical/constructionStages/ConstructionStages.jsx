// import React from "react";
// import "./ConstructionStages.css";

// export default function ConstructionStages() {
//   return (
//     <div className="stages">
//       <div className="stages-container">
//         <h2 className="stages-title">Этапы строительства объекта</h2>

//         <div className="stages-grid">
//           {/* Проектирование */}
//           <div className="stage-item">
//             <h3 className="stage-heading">Проектирование резервуаров</h3>
//             <p className="stage-text">
//               разработка проекта КМ, чертежей КМД, документации для монтажа,
//               антикоррозийной обработки и теплоизоляции
//             </p>
//           </div>

//           {/* Производство */}
//           <div className="stage-item">
//             <h3 className="stage-heading">
//               Производство резервуаров на заводе
//             </h3>
//             <p className="stage-text">
//               полистовым способом или методом рулонирования
//             </p>
//           </div>

//           {/* Окраска */}
//           <div className="stage-item">
//             <h3 className="stage-heading">Доставка металлоконструкций</h3>
//             <p className="stage-text">
//               авто или ж/д транспортом на площадку строительства
//             </p>
//           </div>

//           {/* Транспортировка */}
//           <div className="stage-item">
//             <h3 className="stage-heading">Монтаж резервуаров</h3>
//             <p className="stage-text">
//               на площадке, антикоррозийная обработка и теплоизоляция
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./ConstructionStages.css";

export default function ConstructionStages({ lang = "ru" }) {
  const translations = {
    ru: {
      title: "Этапы строительства объекта",
      stages: [
        {
          heading: "Проектирование резервуаров",
          text: "разработка проекта КМ, чертежей КМД, документации для монтажа, антикоррозийной обработки и теплоизоляции",
        },
        {
          heading: "Производство резервуаров на заводе",
          text: "полистовым способом или методом рулонирования",
        },
        {
          heading: "Доставка металлоконструкций",
          text: "авто или ж/д транспортом на площадку строительства",
        },
        {
          heading: "Монтаж резервуаров",
          text: "на площадке, антикоррозийная обработка и теплоизоляция",
        },
      ],
    },
    uz: {
      title: "Obyekt qurilish bosqichlari",
      stages: [
        {
          heading: "Rezervuarlar loyihalash",
          text: "KM loyihasi ishlab chiqish, KMD chizmalari, montaj, korroziyaga qarshi ishlov berish va issiqlik izolyatsiyasi hujjatlari",
        },
        {
          heading: "Zavodda rezervuarlar ishlab chiqarish",
          text: "varaqlash usuli yoki rulonlash usuli bilan",
        },
        {
          heading: "Metall konstruksiyalarni yetkazish",
          text: "avto yoki temir yo'l transport orqali qurilish maydoniga",
        },
        {
          heading: "Rezervuarlar montaji",
          text: "maydonda, korroziyaga qarshi ishlov berish va issiqlik izolyatsiyasi",
        },
      ],
    },
    en: {
      title: "Object construction stages",
      stages: [
        {
          heading: "Reservoir design",
          text: "development of KM project, KMD drawings, documentation for installation, anti-corrosion treatment and thermal insulation",
        },
        {
          heading: "Reservoir production at factory",
          text: "by sheet method or rolling method",
        },
        {
          heading: "Metal structures delivery",
          text: "by auto or railway transport to construction site",
        },
        {
          heading: "Reservoir installation",
          text: "on site, anti-corrosion treatment and thermal insulation",
        },
      ],
    },
  };

  const currentTranslation = translations[lang] || translations.ru;

  return (
    <div className="stages">
      <div className="stages-container">
        <h2 className="stages-title">{currentTranslation.title}</h2>

        <div className="stages-grid">
          {currentTranslation.stages.map((stage, index) => (
            <div className="stage-item" key={index}>
              <h3 className="stage-heading">{stage.heading}</h3>
              <p className="stage-text">{stage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
