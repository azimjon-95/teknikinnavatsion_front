import React from "react";
import "./ReservoirTable.css";

export default function ReservoirTable2() {
  const data = [
    {
      name: "РГС-3",
      single: { d: 1410, l: 2466, m: 982, h: 1750, s: 2 },
      double: { d: 1440, l: 2496, m: 1980, h: 1780, s: 2 },
    },
    {
      name: "РГС-5",
      single: { d: 1810, l: 2400, m: 1382, h: 3215, s: 2 },
      double: { d: 1840, l: 2430, m: 2423, h: 3245, s: 2 },
    },
    {
      name: "РГС-10",
      single: { d: 2010, l: 3880, m: 1994, h: 3415, s: 2 },
      double: { d: 2040, l: 3910, m: 3022, h: 3445, s: 2 },
    },
    {
      name: "РГС-15",
      single: { d: 2010, l: 5380, m: 2393, h: 3415, s: 2 },
      double: { d: 2040, l: 5410, m: 3882, h: 3445, s: 2 },
    },
    {
      name: "РГС-20",
      single: { d: 2410, l: 5520, m: 2945, h: 3815, s: 2 },
      double: { d: 2440, l: 5550, m: 4827, h: 3845, s: 2 },
    },
    {
      name: "РГС-25",
      single: { d: 2410, l: 7220, m: 3726, h: 3815, s: 2 },
      double: { d: 2440, l: 7250, m: 5872, h: 3845, s: 2 },
    },
    {
      name: "РГС-30",
      single: { d: 2410, l: 8220, m: 4112, h: 3815, s: 2 },
      double: { d: 2440, l: 8250, m: 6822, h: 3845, s: 2 },
    },
    {
      name: "РГС-40",
      single: { d: 2410, l: 10220, m: 4800, h: 3815, s: 3 },
      double: { d: 2440, l: 10250, m: 7600, h: 3845, s: 3 },
    },
    {
      name: "РГС-50",
      single: { d: 2810, l: 10370, m: 5864, h: 4215, s: 3 },
      double: { d: 2840, l: 10400, m: 9219, h: 4245, s: 3 },
    },
    {
      name: "РГС-60",
      single: { d: 2810, l: 11370, m: 7029, h: 4215, s: 3 },
      double: { d: 2840, l: 11410, m: 10924, h: 4245, s: 3 },
    },
    {
      name: "РГС-75",
      single: { d: 3210, l: 10520, m: 8647, h: 4615, s: 3 },
      double: { d: 3240, l: 10560, m: 13704, h: 4645, s: 3 },
    },
    {
      name: "РГС-100",
      single: { d: 3210, l: 13520, m: 10530, h: 4615, s: 3 },
      double: { d: 3240, l: 13550, m: 18174, h: 4645, s: 3 },
    },
  ];

  return (
    <div className="reservoir-table-section">
      <h2 className="table-title">Подземные горизонтальные резервуары РГСп:</h2>
      <p className="table-description">
        Резервуары горизонтальные стальные подземные РГСп исполняются из стали
        Ст3сп5, легированной стали 09Г2С, нержавеющей стали или сталей,
        сертифицированных для хранения пищевых продуктов
      </p>
      <p className="table-description">
        В стандартную комплектацию подземного горизонтального резервуара входит
        технологический колодец, люк-лаз, стальные ложементы и строповочные рымы
      </p>
      <p className="table-description">
        Также стандартный <b>резервуар горизонтальный стальной подземный</b>{" "}
        РГСп поставляется с антикоррозийным слоем резино-битумной мастики.
      </p>

      <div className="table-wrapper">
        <table className="reservoir-table">
          <thead>
            <tr>
              <th>Объем</th>
              <th colSpan={10}>Подземные резервуары РГСП</th>
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
