// import React from "react";
// import "./ReservoirTable.css";

// export default function ReservoirTable() {
//   const data = [
//     {
//       name: "РВС-100",
//       single: { d: 4.73, l: 6.0, m: 3.6, h: 0.76, s: 0.87 },
//       double: { d: 2.14, l: 2.1, m: 9.47, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-200",
//       single: { d: 6.63, l: 6.0, m: 5.03, h: 1.47, s: 1.69 },
//       double: { d: 2.47, l: 2.1, m: 12.77, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-300",
//       single: { d: 7.58, l: 7.5, m: 7.18, h: 1.95, s: 2.34 },
//       double: { d: 2.84, l: 2.3, m: 16.61, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-400",
//       single: { d: 8.53, l: 7.5, m: 8.04, h: 2.4, s: 2.66 },
//       double: { d: 3.6, l: 2.3, m: 19.01, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-500",
//       single: { d: 8.45, l: 9.3, m: 11.75, h: 3.48, s: 5.05 },
//       double: { d: 3.76, l: 2.3, m: 26.34, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-700",
//       single: { d: 10.43, l: 9.0, m: 11.75, h: 3.58, s: 5.08 },
//       double: { d: 5.55, l: 3.2, m: 29.16, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-1000",
//       single: { d: 10.43, l: 12.0, m: 16.51, h: 3.47, s: 5.01 },
//       double: { d: 5.86, l: 3.8, m: 34.67, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-2000",
//       single: { d: 15.18, l: 12.0, m: 25.08, h: 8.46, s: 13.84 },
//       double: { d: 6.16, l: 5.2, m: 58.74, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-3000",
//       single: { d: 18.98, l: 12.0, m: 38.6, h: 13.43, s: 22.8 },
//       double: { d: 7.38, l: 5.7, m: 87.91, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-5000",
//       single: { d: 20.92, l: 15.0, m: 64.42, h: 17.73, s: 26.2 },
//       double: { d: 8.42, l: 10.8, m: 127.57, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-10000",
//       single: { d: 28.5, l: 17.9, m: 86.72, h: 42.15, s: 78.61 },
//       double: { d: 12.82, l: 14.0, m: 234.3, h: "-", s: "-" },
//     },
//     {
//       name: "РВС-20000",
//       single: { d: 39.9, l: 17.9, m: 225.14, h: 57.41, s: 106.05 },
//       double: { d: 16.78, l: 27.37, m: 432.74, h: "-", s: "-" },
//     },
//   ];
//   return (
//     <div className="reservoir-table-section">
//       <h2 className="table-title">НАЗЕМНЫЕ РЕЗЕРВУАРЫ РГСН:</h2>
//       <p className="table-description">
//         Резервуары горизонтальные стальные для нефтепродуктов и других жидкостей
//         наземного расположения РГСн, как правило, исполняются из стали Ст3сп5,
//         09Г2С, “нержавеющих” или “пищевых” сталей.
//       </p>
//       <p className="table-description">
//         В стандартную комплектацию РГСн входит люк-лаз, стальные ложементы и
//         строповочные рымы.
//       </p>
//       <div className="table-wrapper">
//         <table className="reservoir-table">
//           <thead>
//             <tr>
//               <th>Объем</th>
//               <th colSpan={10}>Наземные резервуары РГСН</th>
//             </tr>
//             <tr>
//               <th></th>
//               <th colSpan={5}>Одностенные</th>
//               <th colSpan={5}>Двухстенные</th>
//             </tr>
//             <tr>
//               <th></th>
//               <th>
//                 Диаметр
//                 <br />
//                 мм
//               </th>
//               <th>
//                 Длина
//                 <br />
//                 мм
//               </th>
//               <th>
//                 Масса
//                 <br />
//                 кг
//               </th>
//               <th>
//                 Высота
//                 <br />
//                 мм
//               </th>
//               <th>
//                 Кол-во опор
//                 <br />
//                 шт.
//               </th>
//               <th>
//                 Диаметр
//                 <br />
//                 мм
//               </th>
//               <th>
//                 Длина
//                 <br />
//                 мм
//               </th>
//               <th>
//                 Масса
//                 <br />
//                 кг
//               </th>
//               <th>
//                 Высота
//                 <br />
//                 мм
//               </th>
//               <th>
//                 Кол-во опор
//                 <br />
//                 шт.
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, i) => (
//               <tr key={i}>
//                 <td className="volume">
//                   <a href="#" className="volume-link">
//                     {item.name}
//                   </a>
//                 </td>
//                 <td>{item.single.d}</td>
//                 <td>{item.single.l}</td>
//                 <td>{item.single.m}</td>
//                 <td>{item.single.h}</td>
//                 <td>{item.single.s}</td>
//                 <td>{item.double.d}</td>
//                 <td>{item.double.l}</td>
//                 <td>{item.double.m}</td>
//                 <td>{item.double.h}</td>
//                 <td>{item.double.s}</td>
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

export default function ReservoirTable() {
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

  return (
    <div className="reservoir-table-section">
      <h2 className="table-title">
        Технические характеристики цилиндрических резервуаров РВС:
      </h2>
      <div className="table-wrapper">
        <table className="reservoir-table">
          <thead>
            <tr>
              <th>Наименование и объем</th>
              <th>Диаметр, м</th>
              <th>Высота, м</th>
              <th>Масса стенки, т</th>
              <th>Масса днища, т</th>
              <th>Масса крыши, т</th>
              <th>Масса прочих конструкций, т</th>
              <th>Масса каркаса и упаковки, т</th>
              <th>Итого масса резервуара, т</th>
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
