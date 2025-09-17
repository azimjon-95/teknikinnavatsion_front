import React from "react";
import "./ReservoirTable.css";

export default function ReservoirTable() {
  const data = [
    {
      name: "РГС-3",
      single: { d: 1410, l: 2466, m: 800, h: 1750, s: 2 },
      double: { d: 1440, l: 2496, m: 1800, h: 1780, s: 2 },
    },
    {
      name: "РГС-5",
      single: { d: 1810, l: 2400, m: 1200, h: 2150, s: 2 },
      double: { d: 1840, l: 2430, m: 2200, h: 2180, s: 2 },
    },
    {
      name: "РГС-10",
      single: { d: 2010, l: 3880, m: 1812, h: 2400, s: 2 },
      double: { d: 2040, l: 3910, m: 2840, h: 2430, s: 2 },
    },
    {
      name: "РГС-15",
      single: { d: 2010, l: 5380, m: 2211, h: 2400, s: 2 },
      double: { d: 2040, l: 5410, m: 3700, h: 2430, s: 2 },
    },
    {
      name: "РГС-20",
      single: { d: 2410, l: 5520, m: 2763, h: 2800, s: 3 },
      double: { d: 2440, l: 5550, m: 4645, h: 2830, s: 2 },
    },
    {
      name: "РГС-25",
      single: { d: 2410, l: 7220, m: 3499, h: 2800, s: 3 },
      double: { d: 2440, l: 7250, m: 5645, h: 2830, s: 2 },
    },
    {
      name: "РГС-30",
      single: { d: 2410, l: 8220, m: 3885, h: 2800, s: 2 },
      double: { d: 2440, l: 8250, m: 6595, h: 2830, s: 2 },
    },
    {
      name: "РГС-40",
      single: { d: 2410, l: 10220, m: 4650, h: 2800, s: 3 },
      double: { d: 2440, l: 10250, m: 7400, h: 2830, s: 3 },
    },
    {
      name: "РГС-50",
      single: { d: 2810, l: 10370, m: 5410, h: 3200, s: 3 },
      double: { d: 2840, l: 10400, m: 8765, h: 3230, s: 3 },
    },
    {
      name: "РГС-60",
      single: { d: 2810, l: 11370, m: 6575, h: 3200, s: 3 },
      double: { d: 2840, l: 11400, m: 10470, h: 3230, s: 3 },
    },
    {
      name: "РГС-75",
      single: { d: 3210, l: 10520, m: 8193, h: 3580, s: 3 },
      double: { d: 3242, l: 10552, m: 13250, h: 3612, s: 3 },
    },
    {
      name: "РГС-100",
      single: { d: 3210, l: 13520, m: 10076, h: 3580, s: 3 },
      double: { d: 3242, l: 13552, m: 17720, h: 3612, s: 3 },
    },
  ];

  return (
    <div className="reservoir-table-section">
      <h2 className="table-title">НАЗЕМНЫЕ РЕЗЕРВУАРЫ РГСН:</h2>
      <p className="table-description">
        Резервуары горизонтальные стальные для нефтепродуктов и других жидкостей
        наземного расположения РГСн, как правило, исполняются из стали Ст3сп5,
        09Г2С, “нержавеющих” или “пищевых” сталей.
      </p>
      <p className="table-description">
        В стандартную комплектацию РГСн входит люк-лаз, стальные ложементы и
        строповочные рымы.
      </p>
      <div className="table-wrapper">
        <table className="reservoir-table">
          <thead>
            <tr>
              <th>Объем</th>
              <th colSpan={10}>Наземные резервуары РГСН</th>
            </tr>
            <tr>
              <th></th>
              <th colSpan={5}>Одностенные</th>
              <th colSpan={5}>Двухстенные</th>
            </tr>
            <tr>
              <th></th>
              <th>
                Диаметр
                <br />
                мм
              </th>
              <th>
                Длина
                <br />
                мм
              </th>
              <th>
                Масса
                <br />
                кг
              </th>
              <th>
                Высота
                <br />
                мм
              </th>
              <th>
                Кол-во опор
                <br />
                шт.
              </th>
              <th>
                Диаметр
                <br />
                мм
              </th>
              <th>
                Длина
                <br />
                мм
              </th>
              <th>
                Масса
                <br />
                кг
              </th>
              <th>
                Высота
                <br />
                мм
              </th>
              <th>
                Кол-во опор
                <br />
                шт.
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td className="volume">
                  <a href="#" className="volume-link">
                    {item.name}
                  </a>
                </td>
                <td>{item.single.d}</td>
                <td>{item.single.l}</td>
                <td>{item.single.m}</td>
                <td>{item.single.h}</td>
                <td>{item.single.s}</td>
                <td>{item.double.d}</td>
                <td>{item.double.l}</td>
                <td>{item.double.m}</td>
                <td>{item.double.h}</td>
                <td>{item.double.s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
