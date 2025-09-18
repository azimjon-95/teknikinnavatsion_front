// import React from "react";
// import "./ReservoirTable.css";

// export default function ReservoirTable() {
//   const data = [
//     {
//       name: "РВС-100",
//       diameter: 4.73,
//       height: 6.0,
//       wall: 3.6,
//       bottom: 0.76,
//       roof: 0.87,
//       other: 2.14,
//       frame: 2.1,
//       total: 9.47,
//     },
//     {
//       name: "РВС-200",
//       diameter: 6.63,
//       height: 6.0,
//       wall: 5.03,
//       bottom: 1.47,
//       roof: 1.69,
//       other: 2.47,
//       frame: 2.1,
//       total: 12.77,
//     },
//     {
//       name: "РВС-300",
//       diameter: 7.58,
//       height: 7.5,
//       wall: 7.18,
//       bottom: 1.95,
//       roof: 2.34,
//       other: 2.84,
//       frame: 2.3,
//       total: 16.61,
//     },
//     {
//       name: "РВС-400",
//       diameter: 8.53,
//       height: 7.5,
//       wall: 8.04,
//       bottom: 2.4,
//       roof: 2.66,
//       other: 3.6,
//       frame: 2.3,
//       total: 19.01,
//     },
//     {
//       name: "РВС-500",
//       diameter: 8.45,
//       height: 9.3,
//       wall: 11.75,
//       bottom: 3.48,
//       roof: 5.05,
//       other: 3.76,
//       frame: 2.3,
//       total: 26.34,
//     },
//     {
//       name: "РВС-700",
//       diameter: 10.43,
//       height: 9.0,
//       wall: 11.75,
//       bottom: 3.58,
//       roof: 5.08,
//       other: 5.55,
//       frame: 3.2,
//       total: 29.16,
//     },
//     {
//       name: "РВС-1000",
//       diameter: 10.43,
//       height: 12.0,
//       wall: 16.51,
//       bottom: 3.47,
//       roof: 5.01,
//       other: 5.86,
//       frame: 3.8,
//       total: 34.67,
//     },
//     {
//       name: "РВС-2000",
//       diameter: 15.18,
//       height: 12.0,
//       wall: 25.08,
//       bottom: 8.46,
//       roof: 13.84,
//       other: 6.16,
//       frame: 5.2,
//       total: 58.74,
//     },
//     {
//       name: "РВС-3000",
//       diameter: 18.98,
//       height: 12.0,
//       wall: 38.6,
//       bottom: 13.43,
//       roof: 22.8,
//       other: 7.38,
//       frame: 5.7,
//       total: 87.91,
//     },
//     {
//       name: "РВС-5000",
//       diameter: 20.92,
//       height: 15.0,
//       wall: 64.42,
//       bottom: 17.73,
//       roof: 26.2,
//       other: 8.42,
//       frame: 10.8,
//       total: 127.57,
//     },
//     {
//       name: "РВС-10000",
//       diameter: 28.5,
//       height: 17.9,
//       wall: 86.72,
//       bottom: 42.15,
//       roof: 78.61,
//       other: 12.82,
//       frame: 14.0,
//       total: 234.3,
//     },
//     {
//       name: "РВС-20000",
//       diameter: 39.9,
//       height: 17.9,
//       wall: 225.14,
//       bottom: 57.41,
//       roof: 106.05,
//       other: 16.78,
//       frame: 27.37,
//       total: 432.74,
//     },
//   ];

//   return (
//     <div className="reservoir-table-section">
//       <h2 className="table-title">
//         Технические характеристики цилиндрических резервуаров РВС:
//       </h2>
//       <div className="table-wrapper">
//         <table className="reservoir-table">
//           <thead>
//             <tr>
//               <th>Наименование и объем</th>
//               <th>Диаметр, м</th>
//               <th>Высота, м</th>
//               <th>Масса стенки, т</th>
//               <th>Масса днища, т</th>
//               <th>Масса крыши, т</th>
//               <th>Масса прочих конструкций, т</th>
//               <th>Масса каркаса и упаковки, т</th>
//               <th>Итого масса резервуара, т</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, i) => (
//               <tr key={i}>
//                 <td>{item.name}</td>
//                 <td>{item.diameter}</td>
//                 <td>{item.height}</td>
//                 <td>{item.wall}</td>
//                 <td>{item.bottom}</td>
//                 <td>{item.roof}</td>
//                 <td>{item.other}</td>
//                 <td>{item.frame}</td>
//                 <td>{item.total}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./ReservoirTable.css";

export default function ReservoirTable({ lang = "ru" }) {
  const translations = {
    ru: {
      title: "Технические характеристики цилиндрических резервуаров РВС:",
      headers: {
        name: "Наименование и объем",
        diameter: "Диаметр, м",
        height: "Высота, м",
        wall: "Масса стенки, т",
        bottom: "Масса днища, т",
        roof: "Масса крыши, т",
        other: "Масса прочих конструкций, т",
        frame: "Масса каркаса и упаковки, т",
        total: "Итого масса резервуара, т",
      },
    },
    uz: {
      title: "RVS silindrsimon rezervuarlarining texnik xususiyatlari:",
      headers: {
        name: "Nomi va hajmi",
        diameter: "Diametri, m",
        height: "Balandligi, m",
        wall: "Devor massasi, t",
        bottom: "Tag massasi, t",
        roof: "Tom massasi, t",
        other: "Boshqa konstruksiyalar massasi, t",
        frame: "Karkas va qadoqlash massasi, t",
        total: "Rezervuar umumiy massasi, t",
      },
    },
    en: {
      title: "Technical specifications of RVS cylindrical reservoirs:",
      headers: {
        name: "Name and volume",
        diameter: "Diameter, m",
        height: "Height, m",
        wall: "Wall mass, t",
        bottom: "Bottom mass, t",
        roof: "Roof mass, t",
        other: "Other structures mass, t",
        frame: "Frame and packaging mass, t",
        total: "Total reservoir mass, t",
      },
    },
  };

  const data = [
    {
      name: "РВС-100",
      diameter: 4.73,
      height: 6.0,
      wall: 3.6,
      bottom: 0.76,
      roof: 0.87,
      other: 2.14,
      frame: 2.1,
      total: 9.47,
    },
    {
      name: "РВС-200",
      diameter: 6.63,
      height: 6.0,
      wall: 5.03,
      bottom: 1.47,
      roof: 1.69,
      other: 2.47,
      frame: 2.1,
      total: 12.77,
    },
    {
      name: "РВС-300",
      diameter: 7.58,
      height: 7.5,
      wall: 7.18,
      bottom: 1.95,
      roof: 2.34,
      other: 2.84,
      frame: 2.3,
      total: 16.61,
    },
    {
      name: "РВС-400",
      diameter: 8.53,
      height: 7.5,
      wall: 8.04,
      bottom: 2.4,
      roof: 2.66,
      other: 3.6,
      frame: 2.3,
      total: 19.01,
    },
    {
      name: "РВС-500",
      diameter: 8.45,
      height: 9.3,
      wall: 11.75,
      bottom: 3.48,
      roof: 5.05,
      other: 3.76,
      frame: 2.3,
      total: 26.34,
    },
    {
      name: "РВС-700",
      diameter: 10.43,
      height: 9.0,
      wall: 11.75,
      bottom: 3.58,
      roof: 5.08,
      other: 5.55,
      frame: 3.2,
      total: 29.16,
    },
    {
      name: "РВС-1000",
      diameter: 10.43,
      height: 12.0,
      wall: 16.51,
      bottom: 3.47,
      roof: 5.01,
      other: 5.86,
      frame: 3.8,
      total: 34.67,
    },
    {
      name: "РВС-2000",
      diameter: 15.18,
      height: 12.0,
      wall: 25.08,
      bottom: 8.46,
      roof: 13.84,
      other: 6.16,
      frame: 5.2,
      total: 58.74,
    },
    {
      name: "РВС-3000",
      diameter: 18.98,
      height: 12.0,
      wall: 38.6,
      bottom: 13.43,
      roof: 22.8,
      other: 7.38,
      frame: 5.7,
      total: 87.91,
    },
    {
      name: "РВС-5000",
      diameter: 20.92,
      height: 15.0,
      wall: 64.42,
      bottom: 17.73,
      roof: 26.2,
      other: 8.42,
      frame: 10.8,
      total: 127.57,
    },
    {
      name: "РВС-10000",
      diameter: 28.5,
      height: 17.9,
      wall: 86.72,
      bottom: 42.15,
      roof: 78.61,
      other: 12.82,
      frame: 14.0,
      total: 234.3,
    },
    {
      name: "РВС-20000",
      diameter: 39.9,
      height: 17.9,
      wall: 225.14,
      bottom: 57.41,
      roof: 106.05,
      other: 16.78,
      frame: 27.37,
      total: 432.74,
    },
  ];

  const currentTranslation = translations[lang] || translations.ru;

  return (
    <div className="reservoir-table-section">
      <h2 className="table-title">{currentTranslation.title}</h2>
      <div className="table-wrapper">
        <table className="reservoir-table">
          <thead>
            <tr>
              <th>{currentTranslation.headers.name}</th>
              <th>{currentTranslation.headers.diameter}</th>
              <th>{currentTranslation.headers.height}</th>
              <th>{currentTranslation.headers.wall}</th>
              <th>{currentTranslation.headers.bottom}</th>
              <th>{currentTranslation.headers.roof}</th>
              <th>{currentTranslation.headers.other}</th>
              <th>{currentTranslation.headers.frame}</th>
              <th>{currentTranslation.headers.total}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.diameter}</td>
                <td>{item.height}</td>
                <td>{item.wall}</td>
                <td>{item.bottom}</td>
                <td>{item.roof}</td>
                <td>{item.other}</td>
                <td>{item.frame}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
