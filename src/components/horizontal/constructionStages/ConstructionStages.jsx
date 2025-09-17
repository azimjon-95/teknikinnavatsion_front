import React from "react";
import "./ConstructionStages.css";

export default function ConstructionStages({ language = "ru" }) {
  // Content object with translations for each language
  const content = {
    ru: {
      title: "ЭТАПЫ СТРОИТЕЛЬСТВА ОБЪЕКТА",
      stages: [
        {
          heading: "ПРОЕКТИРОВАНИЕ",
          text: "На все горизонтальные резервуары в нашем КБ есть готовые чертежи КМД, которые всегда дорабатываются с учетом требований Заказчика.",
        },
        {
          heading: "ПРОИЗВОДСТВО",
          text: "Сборка резервуара РГС осуществляется из вальцованных обечаек на сварочном манипуляторе в автоматическом режиме. Все сварные соединения выполняются встык, согласно требованиям ГОСТ 17032-2010.",
        },
        {
          heading: "ОКРАСКА",
          text: "Выполняется с предварительной пескоструйной обработкой, обезжириванием и обеспыливанием поверхности в специальной малярной камере с контролем температуры и влажности воздуха.",
        },
        {
          heading: "ТРАНСПОРТИРОВКА",
          text: "Автотранспортом или ж/д транспортом с собственных подъездных путей.",
        },
      ],
    },
    en: {
      title: "STAGES OF OBJECT CONSTRUCTION",
      stages: [
        {
          heading: "DESIGN",
          text: "For all horizontal tanks, our design bureau has ready-made detailed metal structure drawings (KMD), which are always refined to meet the Customer's requirements.",
        },
        {
          heading: "MANUFACTURING",
          text: "The assembly of the RGS tank is carried out from rolled shells on a welding manipulator in automatic mode. All welded joints are made butt-to-butt, in accordance with the requirements of GOST 17032-2010.",
        },
        {
          heading: "PAINTING",
          text: "Performed with preliminary sandblasting, degreasing, and dust removal of the surface in a special painting chamber with controlled temperature and humidity.",
        },
        {
          heading: "TRANSPORTATION",
          text: "By road transport or railway transport from our own access routes.",
        },
      ],
    },
    uz: {
      title: "OB'YEKT QURILISH BOSQICHLARI",
      stages: [
        {
          heading: "LOYIHALASH",
          text: "Barcha gorizontal idishlar uchun bizning konstruktorlik byuromizda tayyor KMD (metall konstruktsiyalar detallari) chizmalari mavjud bo‘lib, ular har doim Buyurtmachining talablariga moslashtirib qayta ishlanadi.",
        },
        {
          heading: "ISHLAB CHIQARISH",
          text: "RGS idishining yig‘ilishi avtomatik rejimda payvandlash manipulyatorida prokatlangan qobiqlardan amalga oshiriladi. Barcha payvand choklari GOST 17032-2010 talablariga muvofiq bir-biriga ulanma tarzda bajariladi.",
        },
        {
          heading: "BO‘YASH",
          text: "Sirtni oldindan qum bilan tozalash, yog‘sizlantirish va changdan tozalash bilan maxsus bo‘yoq kamerasida harorat va namlik nazorati ostida amalga oshiriladi.",
        },
        {
          heading: "TASHISH",
          text: "Avtotransport yoki o‘zimizning kirish yo‘llarimizdan temir yo‘l transporti orqali.",
        },
      ],
    },
  };

  return (
    <div className="stages">
      <div className="stages-container">
        <h2 className="stages-title">{content[language].title}</h2>

        <div className="stages-grid">
          {content[language].stages.map((stage, index) => (
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