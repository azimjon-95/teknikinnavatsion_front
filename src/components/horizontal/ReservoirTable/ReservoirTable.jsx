import React from "react";
import "./ReservoirTable.css";

export default function ReservoirTable({ language = "ru" }) {
  // Data array with translated names for each language
  const data = {
    ru: [
      { name: "РГС-3", single: { d: 1410, l: 2466, m: 800, h: 1750, s: 2 }, double: { d: 1440, l: 2496, m: 1800, h: 1780, s: 2 } },
      { name: "РГС-5", single: { d: 1810, l: 2400, m: 1200, h: 2150, s: 2 }, double: { d: 1840, l: 2430, m: 2200, h: 2180, s: 2 } },
      { name: "РГС-10", single: { d: 2010, l: 3880, m: 1812, h: 2400, s: 2 }, double: { d: 2040, l: 3910, m: 2840, h: 2430, s: 2 } },
      { name: "РГС-15", single: { d: 2010, l: 5380, m: 2211, h: 2400, s: 2 }, double: { d: 2040, l: 5410, m: 3700, h: 2430, s: 2 } },
      { name: "РГС-20", single: { d: 2410, l: 5520, m: 2763, h: 2800, s: 3 }, double: { d: 2440, l: 5550, m: 4645, h: 2830, s: 2 } },
      { name: "РГС-25", single: { d: 2410, l: 7220, m: 3499, h: 2800, s: 3 }, double: { d: 2440, l: 7250, m: 5645, h: 2830, s: 2 } },
      { name: "РГС-30", single: { d: 2410, l: 8220, m: 3885, h: 2800, s: 2 }, double: { d: 2440, l: 8250, m: 6595, h: 2830, s: 2 } },
      { name: "РГС-40", single: { d: 2410, l: 10220, m: 4650, h: 2800, s: 3 }, double: { d: 2440, l: 10250, m: 7400, h: 2830, s: 3 } },
      { name: "РГС-50", single: { d: 2810, l: 10370, m: 5410, h: 3200, s: 3 }, double: { d: 2840, l: 10400, m: 8765, h: 3230, s: 3 } },
      { name: "РГС-60", single: { d: 2810, l: 11370, m: 6575, h: 3200, s: 3 }, double: { d: 2840, l: 11400, m: 10470, h: 3230, s: 3 } },
      { name: "РГС-75", single: { d: 3210, l: 10520, m: 8193, h: 3580, s: 3 }, double: { d: 3242, l: 10552, m: 13250, h: 3612, s: 3 } },
      { name: "РГС-100", single: { d: 3210, l: 13520, m: 10076, h: 3580, s: 3 }, double: { d: 3242, l: 13552, m: 17720, h: 3612, s: 3 } },
    ],
    en: [
      { name: "RGS-3", single: { d: 1410, l: 2466, m: 800, h: 1750, s: 2 }, double: { d: 1440, l: 2496, m: 1800, h: 1780, s: 2 } },
      { name: "RGS-5", single: { d: 1810, l: 2400, m: 1200, h: 2150, s: 2 }, double: { d: 1840, l: 2430, m: 2200, h: 2180, s: 2 } },
      { name: "RGS-10", single: { d: 2010, l: 3880, m: 1812, h: 2400, s: 2 }, double: { d: 2040, l: 3910, m: 2840, h: 2430, s: 2 } },
      { name: "RGS-15", single: { d: 2010, l: 5380, m: 2211, h: 2400, s: 2 }, double: { d: 2040, l: 5410, m: 3700, h: 2430, s: 2 } },
      { name: "RGS-20", single: { d: 2410, l: 5520, m: 2763, h: 2800, s: 3 }, double: { d: 2440, l: 5550, m: 4645, h: 2830, s: 2 } },
      { name: "RGS-25", single: { d: 2410, l: 7220, m: 3499, h: 2800, s: 3 }, double: { d: 2440, l: 7250, m: 5645, h: 2830, s: 2 } },
      { name: "RGS-30", single: { d: 2410, l: 8220, m: 3885, h: 2800, s: 2 }, double: { d: 2440, l: 8250, m: 6595, h: 2830, s: 2 } },
      { name: "RGS-40", single: { d: 2410, l: 10220, m: 4650, h: 2800, s: 3 }, double: { d: 2440, l: 10250, m: 7400, h: 2830, s: 3 } },
      { name: "RGS-50", single: { d: 2810, l: 10370, m: 5410, h: 3200, s: 3 }, double: { d: 2840, l: 10400, m: 8765, h: 3230, s: 3 } },
      { name: "RGS-60", single: { d: 2810, l: 11370, m: 6575, h: 3200, s: 3 }, double: { d: 2840, l: 11400, m: 10470, h: 3230, s: 3 } },
      { name: "RGS-75", single: { d: 3210, l: 10520, m: 8193, h: 3580, s: 3 }, double: { d: 3242, l: 10552, m: 13250, h: 3612, s: 3 } },
      { name: "RGS-100", single: { d: 3210, l: 13520, m: 10076, h: 3580, s: 3 }, double: { d: 3242, l: 13552, m: 17720, h: 3612, s: 3 } },
    ],
    uz: [
      { name: "RGS-3", single: { d: 1410, l: 2466, m: 800, h: 1750, s: 2 }, double: { d: 1440, l: 2496, m: 1800, h: 1780, s: 2 } },
      { name: "RGS-5", single: { d: 1810, l: 2400, m: 1200, h: 2150, s: 2 }, double: { d: 1840, l: 2430, m: 2200, h: 2180, s: 2 } },
      { name: "RGS-10", single: { d: 2010, l: 3880, m: 1812, h: 2400, s: 2 }, double: { d: 2040, l: 3910, m: 2840, h: 2430, s: 2 } },
      { name: "RGS-15", single: { d: 2010, l: 5380, m: 2211, h: 2400, s: 2 }, double: { d: 2040, l: 5410, m: 3700, h: 2430, s: 2 } },
      { name: "RGS-20", single: { d: 2410, l: 5520, m: 2763, h: 2800, s: 3 }, double: { d: 2440, l: 5550, m: 4645, h: 2830, s: 2 } },
      { name: "RGS-25", single: { d: 2410, l: 7220, m: 3499, h: 2800, s: 3 }, double: { d: 2440, l: 7250, m: 5645, h: 2830, s: 2 } },
      { name: "RGS-30", single: { d: 2410, l: 8220, m: 3885, h: 2800, s: 2 }, double: { d: 2440, l: 8250, m: 6595, h: 2830, s: 2 } },
      { name: "RGS-40", single: { d: 2410, l: 10220, m: 4650, h: 2800, s: 3 }, double: { d: 2440, l: 10250, m: 7400, h: 2830, s: 3 } },
      { name: "RGS-50", single: { d: 2810, l: 10370, m: 5410, h: 3200, s: 3 }, double: { d: 2840, l: 10400, m: 8765, h: 3230, s: 3 } },
      { name: "RGS-60", single: { d: 2810, l: 11370, m: 6575, h: 3200, s: 3 }, double: { d: 2840, l: 11400, m: 10470, h: 3230, s: 3 } },
      { name: "RGS-75", single: { d: 3210, l: 10520, m: 8193, h: 3580, s: 3 }, double: { d: 3242, l: 10552, m: 13250, h: 3612, s: 3 } },
      { name: "RGS-100", single: { d: 3210, l: 13520, m: 10076, h: 3580, s: 3 }, double: { d: 3242, l: 13552, m: 17720, h: 3612, s: 3 } },
    ],
  };

  // Content object with translations for table title, descriptions, and headers
  const content = {
    ru: {
      title: "НАЗЕМНЫЕ РЕЗЕРВУАРЫ РГСН:",
      description1: `
        Резервуары горизонтальные стальные для нефтепродуктов и других жидкостей
        наземного расположения РГСн, как правило, исполняются из стали Ст3сп5,
        09Г2С, “нержавеющих” или “пищевых” сталей.
      `,
      description2: `
        В стандартную комплектацию РГСн входит люк-лаз, стальные ложементы и
        строповочные рымы.
      `,
      headers: {
        volume: "Объем",
        mainHeader: "Наземные резервуары РГСН",
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
      title: "ABOVE-GROUND RGSn TANKS:",
      description1: `
        Horizontal steel tanks for petroleum products and other liquids, above-ground RGSn, are typically made from St3sp5, 09G2S, “stainless” or “food-grade” steels.
      `,
      description2: `
        The standard RGSn configuration includes a manhole, steel supports, and lifting lugs.
      `,
      headers: {
        volume: "Volume",
        mainHeader: "Above-ground RGSn Tanks",
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
      title: "YER USTI RGSn IDISHLARI:",
      description1: `
        Neft mahsulotlari va boshqa suyuqliklar uchun gorizontal po‘lat idishlar, yer usti RGSn, odatda St3sp5, 09G2S, “zanglamaydigan” yoki “oziq-ovqat” po‘latlaridan tayyorlanadi.
      `,
      description2: `
        RGSnning standart konfiguratsiyasiga lyuk-laz, po‘lat tayanchlar va ko‘tarish halqalari kiradi.
      `,
      headers: {
        volume: "Hajm",
        mainHeader: "Yer usti RGSn idishlari",
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