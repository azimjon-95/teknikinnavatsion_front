// import React from "react";
// import "./Sug.css";
// import { useLocation } from "react-router-dom";

// const GasEquipmentTable = ({ lang }) => {
//   const location = useLocation();
//   const [language, setLanguage] = useState(lang || "ru");

//   useEffect(() => {
//     const pathLang = location.pathname.split("/")[1];
//     const validLangs = ["ru", "en", "uz"];
//     if (validLangs.includes(pathLang)) {
//       setLanguage(pathLang);
//       localStorage.setItem("lang", pathLang);
//     } else if (lang) {
//       setLanguage(lang);
//     }
//   }, [location.pathname, lang]);

//   const data = [
//     {
//       header: "Стационарные резервуары для хранения СУГ",
//       rows: [
//         [
//           "Металлический стационарный резервуар объёмом 5 м³",
//           "Толщина-10-10мм, Диаметр-1400мм, Длина-3700мм",
//         ],
//         [
//           "Металлический стационарный резервуар объёмом 10 м³",
//           "Толщина-10-12мм, Диаметр-1600мм, Длина-5400мм",
//         ],
//         [
//           "Металлический стационарный резервуар объёмом 20 м³",
//           "Толщина-10-12мм, Диаметр-2000мм, Длина-6500мм",
//         ],
//         [
//           "Металлический стационарный резервуар объёмом 25 м³",
//           "Толщина-12-14мм, Диаметр-2200мм, Длина-7000мм",
//         ],
//         [
//           "Металлический стационарный резервуар объёмом 50 м³",
//           "Толщина-14-16мм, Диаметр-2400мм, Длина-11700мм",
//         ],
//         ["Металлический стационарный резервуар объёмом 100 м³", ""],
//       ],
//     },
//     {
//       header: "ППЦЗ (полуприцеп цистерна) для СУГ",
//       rows: [
//         ["ППЦЗ-42 (42куб)", "Толщина-12-14мм"],
//         ["ППЦЗ-46 (46куб)", "Толщина-12-14мм"],
//       ],
//     },
//     {
//       header: "АЦТ автоцистерна для СУГ",
//       rows: [
//         ["АЦТ-8", "Толщина-10-12мм"],
//         ["АЦТ-12", "Толщина-10-12мм"],
//         ["АЦТ-18", "Толщина-12-14мм"],
//         ["АЦТ-20", "Толщина-12-14мм"],
//         ["АЦТ-22", "Толщина-12-14мм"],
//       ],
//     },
//     {
//       header: "Испарители СУГ",
//       rows: [
//         [
//           "Испарители газа модели",
//           "KDV-030 (30кг/ч) Нагреватель (кВт)-4.5",
//           "KDV-050 (50кг/ч) Нагреватель (кВт)-7,5",
//         ],
//         ["Испаритель газа модели KDV-100 (100кг/ч)", "Нагреватель (кВт)-15"],
//         ["Испаритель газа модели KEV-150 (150кг/ч)", "Нагреватель (кВт)-22,5"],
//         ["Испаритель газа модели KEV-200 (200кг/ч)", "Нагреватель (кВт)-30"],
//         ["Испаритель газа модели KEV-300 (300кг/ч)", "Нагреватель (кВт)-45"],
//       ],
//     },
//     {
//       header: "Блок очистки и осушки для природного газа",
//       rows: [
//         ["БООГП (Блок очистки и осушки для природного газа) – 2,6 м³", ""],
//         ["ФГ (Фильтр газовый)", ""],
//       ],
//     },
//   ];

//   return (
//     <div className="table-wrapper">
//       <h1 className="title">Емкости для СУГ Резервуары СУГ</h1>
//       <table className="equipment-table">
//         <thead>
//           <tr>
//             <th>Наименование</th>
//             <th>Стоимость с учётом 12% НДС (сум)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((section, i) => (
//             <React.Fragment key={i}>
//               <tr className="section-header">
//                 <td colSpan={2}>{section.header}</td>
//               </tr>
//               {section.rows.map((row, j) => (
//                 <tr key={j}>
//                   <td>
//                     {/* {row[0]} <br /> {row[1]} <br /> {row[2]} */}
//                     {row[0]}
//                     {row[1] ? (
//                       <span>
//                         <br /> {row[1]}
//                       </span>
//                     ) : null}
//                     {row[2] ? (
//                       <span>
//                         <br /> {row[2]}
//                       </span>
//                     ) : null}
//                   </td>
//                   {/* <td>{row[1]}</td> */}
//                   <td></td>
//                 </tr>
//               ))}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GasEquipmentTable;

import React, { useState, useEffect } from "react";
import "./Sug.css";
import { useLocation } from "react-router-dom";

const GasEquipmentTable = ({ lang }) => {
  const location = useLocation();
  const [language, setLanguage] = useState(
    lang || localStorage.getItem("lang") || "ru"
  );

  useEffect(() => {
    const pathLang = location.pathname.split("/")[1];
    const validLangs = ["ru", "en", "uz"];

    if (validLangs.includes(pathLang)) {
      setLanguage(pathLang);
      localStorage.setItem("lang", pathLang);
    } else if (lang) {
      setLanguage(lang);
      localStorage.setItem("lang", lang);
    }
  }, [location.pathname, lang]);

  const texts = {
    ru: {
      title: "Емкости для СУГ — Резервуары СУГ",
      name: "Наименование",
      price: "Стоимость с учётом 12% НДС (сум)",
      data: [
        {
          header: "Стационарные резервуары для хранения СУГ",
          rows: [
            [
              "Металлический стационарный резервуар объёмом 5 м³",
              "Толщина-10-10мм, Диаметр-1400мм, Длина-3700мм",
            ],
            [
              "Металлический стационарный резервуар объёмом 10 м³",
              "Толщина-10-12мм, Диаметр-1600мм, Длина-5400мм",
            ],
            [
              "Металлический стационарный резервуар объёмом 20 м³",
              "Толщина-10-12мм, Диаметр-2000мм, Длина-6500мм",
            ],
            [
              "Металлический стационарный резервуар объёмом 25 м³",
              "Толщина-12-14мм, Диаметр-2200мм, Длина-7000мм",
            ],
            [
              "Металлический стационарный резервуар объёмом 50 м³",
              "Толщина-14-16мм, Диаметр-2400мм, Длина-11700мм",
            ],
            ["Металлический стационарный резервуар объёмом 100 м³", ""],
          ],
        },
        {
          header: "ППЦЗ (полуприцеп цистерна) для СУГ",
          rows: [
            ["ППЦЗ-42 (42куб)", "Толщина-12-14мм"],
            ["ППЦЗ-46 (46куб)", "Толщина-12-14мм"],
          ],
        },
        {
          header: "АЦТ автоцистерна для СУГ",
          rows: [
            ["АЦТ-8", "Толщина-10-12мм"],
            ["АЦТ-12", "Толщина-10-12мм"],
            ["АЦТ-18", "Толщина-12-14мм"],
            ["АЦТ-20", "Толщина-12-14мм"],
            ["АЦТ-22", "Толщина-12-14мм"],
          ],
        },
        {
          header: "Испарители СУГ",
          rows: [
            [
              "Испарители газа модели",
              "KDV-030 (30кг/ч) Нагреватель (кВт)-4.5",
              "KDV-050 (50кг/ч) Нагреватель (кВт)-7,5",
            ],
            [
              "Испаритель газа модели KDV-100 (100кг/ч)",
              "Нагреватель (кВт)-15",
            ],
            [
              "Испаритель газа модели KEV-150 (150кг/ч)",
              "Нагреватель (кВт)-22,5",
            ],
            [
              "Испаритель газа модели KEV-200 (200кг/ч)",
              "Нагреватель (кВт)-30",
            ],
            [
              "Испаритель газа модели KEV-300 (300кг/ч)",
              "Нагреватель (кВт)-45",
            ],
          ],
        },
        {
          header: "Блок очистки и осушки для природного газа",
          rows: [
            ["БООГП (Блок очистки и осушки для природного газа) – 2,6 м³", ""],
            ["ФГ (Фильтр газовый)", ""],
          ],
        },
      ],
    },
    en: {
      title: "LPG Tanks and Equipment",
      name: "Name",
      price: "Price (incl. 12% VAT, UZS)",
      data: [
        {
          header: "Stationary LPG Storage Tanks",
          rows: [
            [
              "Metal stationary tank 5 m³",
              "Thickness-10-10mm, Diameter-1400mm, Length-3700mm",
            ],
            [
              "Metal stationary tank 10 m³",
              "Thickness-10-12mm, Diameter-1600mm, Length-5400mm",
            ],
            [
              "Metal stationary tank 20 m³",
              "Thickness-10-12mm, Diameter-2000mm, Length-6500mm",
            ],
            [
              "Metal stationary tank 25 m³",
              "Thickness-12-14mm, Diameter-2200mm, Length-7000mm",
            ],
            [
              "Metal stationary tank 50 m³",
              "Thickness-14-16mm, Diameter-2400mm, Length-11700mm",
            ],
            ["Metal stationary tank 100 m³", ""],
          ],
        },
        {
          header: "LPG Semi-trailer Tanks",
          rows: [
            ["PPTsZ-42 (42 m³)", "Thickness-12-14mm"],
            ["PPTsZ-46 (46 m³)", "Thickness-12-14mm"],
          ],
        },
        {
          header: "LPG Road Tankers",
          rows: [
            ["ACT-8", "Thickness-10-12mm"],
            ["ACT-12", "Thickness-10-12mm"],
            ["ACT-18", "Thickness-12-14mm"],
            ["ACT-20", "Thickness-12-14mm"],
            ["ACT-22", "Thickness-12-14mm"],
          ],
        },
        {
          header: "LPG Vaporizers",
          rows: [
            [
              "Gas vaporizers",
              "KDV-030 (30kg/h) Heater(kW)-4.5",
              "KDV-050 (50kg/h) Heater(kW)-7.5",
            ],
            ["Gas vaporizer KDV-100 (100kg/h)", "Heater(kW)-15"],
            ["Gas vaporizer KEV-150 (150kg/h)", "Heater(kW)-22.5"],
            ["Gas vaporizer KEV-200 (200kg/h)", "Heater(kW)-30"],
            ["Gas vaporizer KEV-300 (300kg/h)", "Heater(kW)-45"],
          ],
        },
        {
          header: "Gas Cleaning and Drying Units",
          rows: [
            ["BOOGP (Gas cleaning and drying block) – 2.6 m³", ""],
            ["FG (Gas filter)", ""],
          ],
        },
      ],
    },
    uz: {
      title: "SUG uchun sig‘imlar va uskunalar",
      name: "Nomi",
      price: "Narxi (12% QQS bilan, so‘m)",
      data: [
        {
          header: "SUG saqlash uchun stasionar rezervuarlar",
          rows: [
            [
              "Metall stasionar rezervuar 5 m³",
              "Qalinlik-10-10mm, Diametr-1400mm, Uzunlik-3700mm",
            ],
            [
              "Metall stasionar rezervuar 10 m³",
              "Qalinlik-10-12mm, Diametr-1600mm, Uzunlik-5400mm",
            ],
            [
              "Metall stasionar rezervuar 20 m³",
              "Qalinlik-10-12mm, Diametr-2000mm, Uzunlik-6500mm",
            ],
            [
              "Metall stasionar rezervuar 25 m³",
              "Qalinlik-12-14mm, Diametr-2200mm, Uzunlik-7000mm",
            ],
            [
              "Metall stasionar rezervuar 50 m³",
              "Qalinlik-14-16mm, Diametr-2400mm, Uzunlik-11700mm",
            ],
            ["Metall stasionar rezervuar 100 m³", ""],
          ],
        },
        {
          header: "SUG uchun yarim tirkama sisternalar (PPCZ)",
          rows: [
            ["PPCZ-42 (42 m³)", "Qalinlik-12-14mm"],
            ["PPCZ-46 (46 m³)", "Qalinlik-12-14mm"],
          ],
        },
        {
          header: "SUG uchun avtomobil sisternalar (ACT)",
          rows: [
            ["ACT-8", "Qalinlik-10-12mm"],
            ["ACT-12", "Qalinlik-10-12mm"],
            ["ACT-18", "Qalinlik-12-14mm"],
            ["ACT-20", "Qalinlik-12-14mm"],
            ["ACT-22", "Qalinlik-12-14mm"],
          ],
        },
        {
          header: "SUG isitgich (ispiratorlari)",
          rows: [
            [
              "Gaz isitgich modellari",
              "KDV-030 (30kg/soat) Isitgich (kVt)-4.5",
              "KDV-050 (50kg/soat) Isitgich (kVt)-7.5",
            ],
            ["Gaz isitgich modeli KDV-100 (100kg/soat)", "Isitgich (kVt)-15"],
            ["Gaz isitgich modeli KEV-150 (150kg/soat)", "Isitgich (kVt)-22.5"],
            ["Gaz isitgich modeli KEV-200 (200kg/soat)", "Isitgich (kVt)-30"],
            ["Gaz isitgich modeli KEV-300 (300kg/soat)", "Isitgich (kVt)-45"],
          ],
        },
        {
          header: "Tabiiy gazni tozalash va quritish bloki",
          rows: [
            ["BOOGP (gazni tozalash va quritish bloki) – 2.6 m³", ""],
            ["FG (gaz filtri)", ""],
          ],
        },
      ],
    },
  };

  const t = texts[language];

  return (
    <div className="table-wrapper">
      <h1 className="title">{t.title}</h1>
      <table className="equipment-table">
        <thead>
          <tr>
            <th>{t.name}</th>
            <th>{t.price}</th>
          </tr>
        </thead>
        <tbody>
          {t.data.map((section, i) => (
            <React.Fragment key={i}>
              <tr className="section-header">
                <td colSpan={2}>{section.header}</td>
              </tr>
              {section.rows.map((row, j) => (
                <tr key={j}>
                  <td>
                    {row[0]}
                    {row[1] && (
                      <span>
                        <br /> {row[1]}
                      </span>
                    )}
                    {row[2] && (
                      <span>
                        <br /> {row[2]}
                      </span>
                    )}
                  </td>
                  <td></td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GasEquipmentTable;
