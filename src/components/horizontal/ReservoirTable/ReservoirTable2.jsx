import React from "react";
import "./ReservoirTable.css";

export default function ReservoirTable2({ language = "ru" }) {
  // Data array with translated names for each language
  const data = {
    ru: [
      { name: "РГС-3", single: { d: 1410, l: 2466, m: 982, h: 1750, s: 2 }, double: { d: 1440, l: 2496, m: 1980, h: 1780, s: 2 } },
      { name: "РГС-5", single: { d: 1810, l: 2400, m: 1382, h: 3215, s: 2 }, double: { d: 1840, l: 2430, m: 2423, h: 3245, s: 2 } },
      { name: "РГС-10", single: { d: 2010, l: 3880, m: 1994, h: 3415, s: 2 }, double: { d: 2040, l: 3910, m: 3022, h: 3445, s: 2 } },
      { name: "РГС-15", single: { d: 2010, l: 5380, m: 2393, h: 3415, s: 2 }, double: { d: 2040, l: 5410, m: 3882, h: 3445, s: 2 } },
      { name: "РГС-20", single: { d: 2410, l: 5520, m: 2945, h: 3815, s: 2 }, double: { d: 2440, l: 5550, m: 4827, h: 3845, s: 2 } },
      { name: "РГС-25", single: { d: 2410, l: 7220, m: 3726, h: 3815, s: 2 }, double: { d: 2440, l: 7250, m: 5872, h: 3845, s: 2 } },
      { name: "РГС-30", single: { d: 2410, l: 8220, m: 4112, h: 3815, s: 2 }, double: { d: 2440, l: 8250, m: 6822, h: 3845, s: 2 } },
      { name: "РГС-40", single: { d: 2410, l: 10220, m: 4800, h: 3815, s: 3 }, double: { d: 2440, l: 10250, m: 7600, h: 3845, s: 3 } },
      { name: "РГС-50", single: { d: 2810, l: 10370, m: 5864, h: 4215, s: 3 }, double: { d: 2840, l: 10400, m: 9219, h: 4245, s: 3 } },
      { name: "РГС-60", single: { d: 2810, l: 11370, m: 7029, h: 4215, s: 3 }, double: { d: 2840, l: 11410, m: 10924, h: 4245, s: 3 } },
      { name: "РГС-75", single: { d: 3210, l: 10520, m: 8647, h: 4615, s: 3 }, double: { d: 3240, l: 10560, m: 13704, h: 4645, s: 3 } },
      { name: "РГС-100", single: { d: 3210, l: 13520, m: 10530, h: 4615, s: 3 }, double: { d: 3240, l: 13550, m: 18174, h: 4645, s: 3 } },
    ],
    en: [
      { name: "RGS-3", single: { d: 1410, l: 2466, m: 982, h: 1750, s: 2 }, double: { d: 1440, l: 2496, m: 1980, h: 1780, s: 2 } },
      { name: "RGS-5", single: { d: 1810, l: 2400, m: 1382, h: 3215, s: 2 }, double: { d: 1840, l: 2430, m: 2423, h: 3245, s: 2 } },
      { name: "RGS-10", single: { d: 2010, l: 3880, m: 1994, h: 3415, s: 2 }, double: { d: 2040, l: 3910, m: 3022, h: 3445, s: 2 } },
      { name: "RGS-15", single: { d: 2010, l: 5380, m: 2393, h: 3415, s: 2 }, double: { d: 2040, l: 5410, m: 3882, h: 3445, s: 2 } },
      { name: "RGS-20", single: { d: 2410, l: 5520, m: 2945, h: 3815, s: 2 }, double: { d: 2440, l: 5550, m: 4827, h: 3845, s: 2 } },
      { name: "RGS-25", single: { d: 2410, l: 7220, m: 3726, h: 3815, s: 2 }, double: { d: 2440, l: 7250, m: 5872, h: 3845, s: 2 } },
      { name: "RGS-30", single: { d: 2410, l: 8220, m: 4112, h: 3815, s: 2 }, double: { d: 2440, l: 8250, m: 6822, h: 3845, s: 2 } },
      { name: "RGS-40", single: { d: 2410, l: 10220, m: 4800, h: 3815, s: 3 }, double: { d: 2440, l: 10250, m: 7600, h: 3845, s: 3 } },
      { name: "RGS-50", single: { d: 2810, l: 10370, m: 5864, h: 4215, s: 3 }, double: { d: 2840, l: 10400, m: 9219, h: 4245, s: 3 } },
      { name: "RGS-60", single: { d: 2810, l: 11370, m: 7029, h: 4215, s: 3 }, double: { d: 2840, l: 11410, m: 10924, h: 4245, s: 3 } },
      { name: "RGS-75", single: { d: 3210, l: 10520, m: 8647, h: 4615, s: 3 }, double: { d: 3240, l: 10560, m: 13704, h: 4645, s: 3 } },
      { name: "RGS-100", single: { d: 3210, l: 13520, m: 10530, h: 4615, s: 3 }, double: { d: 3240, l: 13550, m: 18174, h: 4645, s: 3 } },
    ],
    uz: [
      { name: "RGS-3", single: { d: 1410, l: 2466, m: 982, h: 1750, s: 2 }, double: { d: 1440, l: 2496, m: 1980, h: 1780, s: 2 } },
      { name: "RGS-5", single: { d: 1810, l: 2400, m: 1382, h: 3215, s: 2 }, double: { d: 1840, l: 2430, m: 2423, h: 3245, s: 2 } },
      { name: "RGS-10", single: { d: 2010, l: 3880, m: 1994, h: 3415, s: 2 }, double: { d: 2040, l: 3910, m: 3022, h: 3445, s: 2 } },
      { name: "RGS-15", single: { d: 2010, l: 5380, m: 2393, h: 3415, s: 2 }, double: { d: 2040, l: 5410, m: 3882, h: 3445, s: 2 } },
      { name: "RGS-20", single: { d: 2410, l: 5520, m: 2945, h: 3815, s: 2 }, double: { d: 2440, l: 5550, m: 4827, h: 3845, s: 2 } },
      { name: "RGS-25", single: { d: 2410, l: 7220, m: 3726, h: 3815, s: 2 }, double: { d: 2440, l: 7250, m: 5872, h: 3845, s: 2 } },
      { name: "RGS-30", single: { d: 2410, l: 8220, m: 4112, h: 3815, s: 2 }, double: { d: 2440, l: 8250, m: 6822, h: 3845, s: 2 } },
      { name: "RGS-40", single: { d: 2410, l: 10220, m: 4800, h: 3815, s: 3 }, double: { d: 2440, l: 10250, m: 7600, h: 3845, s: 3 } },
      { name: "RGS-50", single: { d: 2810, l: 10370, m: 5864, h: 4215, s: 3 }, double: { d: 2840, l: 10400, m: 9219, h: 4245, s: 3 } },
      { name: "RGS-60", single: { d: 2810, l: 11370, m: 7029, h: 4215, s: 3 }, double: { d: 2840, l: 11410, m: 10924, h: 4245, s: 3 } },
      { name: "RGS-75", single: { d: 3210, l: 10520, m: 8647, h: 4615, s: 3 }, double: { d: 3240, l: 10560, m: 13704, h: 4645, s: 3 } },
      { name: "RGS-100", single: { d: 3210, l: 13520, m: 10530, h: 4615, s: 3 }, double: { d: 3240, l: 13550, m: 18174, h: 4645, s: 3 } },
    ],
  };

  // Content object with translations for table title, descriptions, and headers
  const content = {
    ru: {
      title: "Подземные горизонтальные резервуары РГСп:",
      description1: `
        Резервуары горизонтальные стальные подземные РГСп исполняются из стали
        Ст3сп5, легированной стали 09Г2С, нержавеющей стали или сталей,
        сертифицированных для хранения пищевых продуктов
      `,
      description2: `
        В стандартную комплектацию подземного горизонтального резервуара входит
        технологический колодец, люк-лаз, стальные ложементы и строповочные рымы
      `,
      description3: `
        Также стандартный <b>резервуар горизонтальный стальной подземный</b> 
        РГСп поставляется с антикоррозийным слоем резино-битумной мастики.
      `,
      headers: {
        volume: "Объем",
        mainHeader: "Подземные резервуары РГСп",
        subHeaderSingle: "Одностенные",
        subHeaderDouble: "Двухстенные",
        diameter: "Диаметр<br />мм",
        length: "Длина<br />мм",
        mass: "Масса<br />кг",
        height: "Высота<br />мм",
        supports: "Кол-во опор<br />шт.",
      },
    },
    en: {
      title: "Underground Horizontal RGSp Tanks:",
      description1: `
        Underground horizontal steel RGSp tanks are made from St3sp5 steel, 
        alloyed 09G2S steel, stainless steel, or steels certified for storing food products.
      `,
      description2: `
        The standard configuration of an underground horizontal tank includes 
制的

System: a technological well, a manhole, steel supports, and lifting lugs.
      `,
      description3: `
        The standard <b>underground horizontal steel tank</b> RGSp is also supplied 
        with an anti-corrosion layer of rubber-bitumen mastic.
      `,
      headers: {
        volume: "Volume",
        mainHeader: "Underground RGSp Tanks",
        subHeaderSingle: "Single-wall",
        subHeaderDouble: "Double-wall",
        diameter: "Diameter<br />mm",
        length: "Length<br />mm",
        mass: "Mass<br />kg",
        height: "Height<br />mm",
        supports: "Number of supports<br />units",
      },
    },
    uz: {
      title: "Yer osti gorizontal RGS idishlari:",
      description1: `
        Yer osti gorizontal po‘lat RGS idishlari St3sp5 po‘latdan, 
        09G2S qotishma po‘latdan, zanglamaydigan po‘latdan yoki oziq-ovqat mahsulotlarini saqlash uchun sertifikatlangan po‘latlardan tayyorlanadi.
      `,
      description2: `
        Yer osti gorizontal idishning standart konfiguratsiyasiga texnologik quduq, lyuk-laz, po‘lat tayanchlar va ko‘tarish halqalari kiradi.
      `,
      description3: `
        Shuningdek, standart <b>yer osti gorizontal po‘lat idish</b> RGS 
        kauchuk-bitumli mastika antikorroziya qatlami bilan yetkazib beriladi.
      `,
      headers: {
        volume: "Hajm",
        mainHeader: "Yer osti RGS idishlari",
        subHeaderSingle: "Bir devorli",
        subHeaderDouble: "Ikk devorli",
        diameter: "Diametr<br />mm",
        length: "Uzunlik<br />mm",
        mass: "Og‘irlik<br />kg",
        height: "Balandlik<br />mm",
        supports: "Tayanchlar soni<br />dona",
      },
    },
  };

  return (
    <div className="reservoir-table-section">
      <h2 className="table-title">{content[language].title}</h2>
      <p
        className="table-description"
        dangerouslySetInnerHTML={{ __html: content[language].description1 }}
      />
      <p
        className="table-description"
        dangerouslySetInnerHTML={{ __html: content[language].description2 }}
      />
      <p
        className="table-description"
        dangerouslySetInnerHTML={{ __html: content[language].description3 }}
      />
      <div className="table-wrapper">
        <table className="reservoir-table">
          <thead>
            <tr>
              <th>{content[language].headers.volume}</th>
              <th colSpan={10}>{content[language].headers.mainHeader}</th>
            </tr>
            <tr>
              <th></th>
              <th colSpan={5}>{content[language].headers.subHeaderSingle}</th>
              <th colSpan={5}>{content[language].headers.subHeaderDouble}</th>
            </tr>
            <tr>
              <th></th>
              <th
                dangerouslySetInnerHTML={{ __html: content[language].headers.diameter }}
              />
              <th
                dangerouslySetInnerHTML={{ __html: content[language].headers.length }}
              />
              <th
                dangerouslySetInnerHTML={{ __html: content[language].headers.mass }}
              />
              <th
                dangerouslySetInnerHTML={{ __html: content[language].headers.height }}
              />
              <th
                dangerouslySetInnerHTML={{ __html: content[language].headers.supports }}
              />
              <th
                dangerouslySetInnerHTML={{ __html: content[language].headers.diameter }}
              />
              <th
                dangerouslySetInnerHTML={{ __html: content[language].headers.length }}
              />
              <th
                dangerouslySetInnerHTML={{ __html: content[language].headers.mass }}
              />
              <th
                dangerouslySetInnerHTML={{ __html: content[language].headers.height }}
              />
              <th
                dangerouslySetInnerHTML={{ __html: content[language].headers.supports }}
              />
            </tr>
          </thead>
          <tbody>
            {data[language].map((item, i) => (
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