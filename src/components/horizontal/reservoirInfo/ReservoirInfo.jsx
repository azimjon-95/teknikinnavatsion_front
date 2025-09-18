import React from "react";
import "./ReservoirInfo.css";
import { Link } from "react-router-dom";

export default function ReservoirInfo({ language = "ru" }) {
  // Content object with translations for each language
  const content = {
    ru: {
      intro: "Наиболее часто используются:",
      list: [
        "резервуары горизонтальные РГС для светлых нефтепродуктов;",
        "резервуары горизонтальные РГС для тёмных нефтепродуктов;",
        "резервуары горизонтальные РГС для воды (питьевой, пожарной, технической);",
        "резервуары горизонтальные РГС для масел и смазочных материалов;",
        "резервуары горизонтальные РГС для спиртов;",
        "резервуары горизонтальные РГС для пищевого сырья;",
      ],
      description1: `
        Как правило, горизонтальные резервуары используются для хранения
        жидкостей объемом до 100 кубометров. Для больших объемов складирования
        применяются <Link to="/vertical">вертикальные резервуары.</Link>
      `,
      description2: `
        При соблюдении производителем требований к качеству РГС способен
        выдерживать внутренне давление до 0,07 МПа и сейсмические колебания до
        7 баллов.
      `,
      description3: `
        На резервуар стальной горизонтальный цена формируется исходя из толщин
        стенки, днища, крыши, марки стали, и его комплектации.
      `,
      quality: {
        title: "ГАРАНТИЯ КАЧЕСТВА НАЗЕМНЫХ И ПОДЗЕМНЫХ ГОРИЗОНТАЛЬНЫХ РЕЗЕРВУАРОВ:",
        text: `
          Горизонтальные цилиндрические резервуары производятся ГК
          «РЕЗЕРВУАРОСТРОИТЕЛЬ» изготавливаются в соответствии с
          <a href="#" className="reservoir-link">
            ГОСТ Р.52630-2012 «Сосуды и аппараты стальные сварные»
          </a>,
          <a href="#" className="reservoir-link">
            ГОСТ 17032-2010 "Резервуары стальные горизонтальные для нефтепродуктов"
          </a>.
          Качество наших изделий подтверждено Разрешением на применение
          №РРС.00-047039 и Сертификатом соответствия №РРСс.RU.АВ17.№01286.
        `,
      },
      manufacturing: {
        title: "ПРОИЗВОДСТВО РЕЗЕРВУАРОВ СТАЛЬНЫХ ГОРИЗОНТАЛЬНЫХ ЦИЛИНДРИЧЕСКИХ:",
        text1: `
          На нашем заводе производится более 500
          <strong>горизонтальных резервуаров для нефтепродуктов</strong> и
          емкостей горизонтальных для воды, пищевого сырья и химических
          продуктов в год. Горизонтальные резервуары для нефтепродуктов
          используют преимущественно на нефтебазах. Для хранения горячей
          воды производятся
          <a href="#" className="reservoir-link">
            баки аккумуляторы
          </a> БАГВ.
        `,
        text2: `
          Производство укомплектовано автоматическим сварочным
          оборудованием Lincoln Electric и современным парком
          металлообрабатывающего оборудования. Это позволяет нам достигать
          высокого качества сборки, сокращая при этом время производства и
          издержки на ручной труд.
        `,
        imageAlt: "Производство резервуаров",
      },
      projects: {
        title: "ИНДИВИДУАЛЬНЫЕ И ТИПОВЫЕ ПРОЕКТЫ РЕЗЕРВУАРОВ ГОРИЗОНТАЛЬНЫХ РГС:",
        text1: `
          Наши Заказчики всегда могут приобрести резервуар горизонтальный
          стальной РГС, изготовленный по типовым чертежам нашего КБ.
        `,
        text2: `
          При этом в последние несколько лет все еще чаще поступают заказы на
          производство РГС нестандартных типоразмеров по индивидуальным
          проектам. Это объясняется необходимостью максимально учитывать
          особенности выбора параметров конструкции резервуара исходя из
          специфики производства и размеров конкретных строительных объектов,
          а также потребностей конкретного предприятия и финансов. Поэтому мы
          часто практикуем выпуск продукции в полном соответствии с
          требованиями Заказчика.
        `,
      },
      variants: {
        title1: "Резервуары стальные горизонтальные: варианты изготовления",
        text1: `
          ЗМК «РЕЗЕРВУАРОСТРОИТЕЛЬ» производит различные типы резервуаров
          горизонтальных стальных цилиндрических РГС.
        `,
        title2: "Подземные горизонтальные резервуары РГС / наземные резервуары РГС:",
        text2: [
          "РГСн – резервуар горизонтальный стальной наземный;",
          "РГСп – резервуар горизонтальный стальной подземный с технологическим колодцем;",
        ],
        title3: "Одностенные горизонтальные резервуары РГС / двустенные резервуары РГС:",
        text3: [
          "РГСн: резервуар горизонтальный стальной одностенный наземного расположения;",
          "РГСДн: резервуар горизонтальный стальной двустенный наземного расположения;",
          "РГСп: резервуар горизонтальный стальной одностенный подземного расположения;",
          "РГСДп: резервуар горизонтальный стальной двустенный подземного расположения;",
        ],
        text4: `
          При изготовлении двустенного РГС пространство между стенками
          заполняется азотом или жидкостью. При этом заполняется все
          межстенное пространство, а резервуар оснащается системой его
          закрытой откачки.
        `,
        title4: "Односекционные / двухсекционные / многосекционные резервуары РГС:",
        text5: `
          Все вышеперечисленные конструкции РГС могут исполняться с одной или
          несколькими камерами (секциями). Камеры образуются перегородками
          специальной конструкции внутри корпуса резервуара. Таким образом,
          резервуар РГС получается разделенным на два или несколько отсеков, в
          которых можно хранить жидкое сырье различных сортов. При
          изготовлении двухкамерных или многокамерных горизонтальных
          резервуаров мы гарантированно обеспечиваем герметизацию камер.
        `,
      },
    },
    en: {
      intro: "Most commonly used:",
      list: [
        "RGS horizontal tanks for light petroleum products;",
        "RGS horizontal tanks for dark petroleum products;",
        "RGS horizontal tanks for water (drinking, fire-fighting, technical);",
        "RGS horizontal tanks for oils and lubricants;",
        "RGS horizontal tanks for alcohols;",
        "RGS horizontal tanks for food raw materials;",
      ],
      description1: `
        Typically, horizontal tanks are used for storing liquids with a volume of up to 100 cubic meters. For larger storage volumes,
        <Link to="/vertical">vertical tanks</Link> are used.
      `,
      description2: `
        When the manufacturer adheres to quality requirements, the RGS can withstand internal pressure up to 0.07 MPa and seismic vibrations up to 7 points.
      `,
      description3: `
        The price of a horizontal steel tank is determined based on the thickness of the walls, bottom, roof, steel grade, and its configuration.
      `,
      quality: {
        title: "QUALITY ASSURANCE FOR ABOVE-GROUND AND UNDERGROUND HORIZONTAL TANKS:",
        text: `
          Horizontal cylindrical tanks manufactured by the "RESERVOIR BUILDER" Group are produced in accordance with
          <a href="#" className="reservoir-link">
            GOST R 52630-2012 "Welded Steel Vessels and Apparatus"
          </a>,
          <a href="#" className="reservoir-link">
            GOST 17032-2010 "Horizontal Steel Tanks for Petroleum Products"
          </a>.
          The quality of our products is confirmed by Permit for Use No. RRS.00-047039 and Certificate of Conformity No. RRSc.RU.AB17.No.01286.
        `,
      },
      manufacturing: {
        title: "MANUFACTURING OF HORIZONTAL CYLINDRICAL STEEL TANKS:",
        text1: `
          Our plant produces over 500
          <strong>horizontal tanks for petroleum products</strong> and
          horizontal tanks for water, food raw materials, and chemical products annually. Horizontal tanks for petroleum products
          are primarily used at oil depots. For storing hot water,
          <a href="#" className="reservoir-link">
            accumulator tanks
          </a> BAGV are produced.
        `,
        text2: `
          The production is equipped with automated welding equipment from Lincoln Electric and a modern fleet of metalworking equipment. This allows us to achieve high assembly quality while reducing production time and manual labor costs.
        `,
        imageAlt: "Tank manufacturing",
      },
      projects: {
        title: "CUSTOM AND STANDARD PROJECTS FOR HORIZONTAL RGS TANKS:",
        text1: `
          Our customers can always purchase a horizontal steel RGS tank manufactured according to our design bureau’s standard drawings.
        `,
        text2: `
          However, in recent years, there has been an increasing number of orders for the production of non-standard RGS tank sizes based on custom projects. This is due to the need to maximize consideration of the specific production requirements, dimensions of specific construction sites, and the needs and financial constraints of specific enterprises. Therefore, we often practice producing products in full compliance with the Customer’s requirements.
        `,
      },
      variants: {
        title1: "Horizontal steel tanks: manufacturing variants",
        text1: `
          ZMK "RESERVOIR BUILDER" produces various types of horizontal cylindrical steel RGS tanks.
        `,
        title2: "Underground horizontal RGS tanks / above-ground RGS tanks:",
        text2: [
          "RGSn – above-ground horizontal steel tank;",
          "RGSp – underground horizontal steel tank with a technological well;",
        ],
        title3: "Single-wall horizontal RGS tanks / double-wall RGS tanks:",
        text3: [
          "RGSn: above-ground single-wall horizontal steel tank;",
          "RGSDn: above-ground double-wall horizontal steel tank;",
          "RGSp: underground single-wall horizontal steel tank;",
          "RGSDp: underground double-wall horizontal steel tank;",
        ],
        text4: `
          When manufacturing a double-wall RGS, the space between the walls is filled with nitrogen or liquid. The entire inter-wall space is filled, and the tank is equipped with a closed evacuation system.
        `,
        title4: "Single-compartment / dual-compartment / multi-compartment RGS tanks:",
        text5: `
          All the above-mentioned RGS designs can be manufactured with one or multiple chambers (compartments). The chambers are formed by specially designed partitions inside the tank body. Thus, the RGS tank is divided into two or more compartments, allowing the storage of different types of liquid raw materials. When manufacturing dual- or multi-compartment horizontal tanks, we guarantee the sealing of the chambers.
        `,
      },
    },
    uz: {
      intro: "Eng ko‘p ishlatiladiganlar:",
      list: [
        "Yengil neft mahsulotlari uchun RGS gorizontal idishlar;",
        "Qorong‘i neft mahsulotlari uchun RGS gorizontal idishlar;",
        "Suv (ichimlik, yong‘in, texnik) uchun RGS gorizontal idishlar;",
        "Moylar va moylash materiallari uchun RGS gorizontal idishlar;",
        "Spirtlar uchun RGS gorizontal idishlar;",
        "Oziq-ovqat xomashyosi uchun RGS gorizontal idishlar;",
      ],
      description1: `
        Odatda, gorizontal idishlar 100 kub metr hajmgacha bo‘lgan suyuqliklarni saqlash uchun ishlatiladi. Katta hajmdagi saqlash uchun
        <Link to="/vertical">vertikal idishlar</Link> qo‘llaniladi.
      `,
      description2: `
        Ishlab chiqaruvchi sifat talablariga rioya qilganda, RGS ichki bosimni 0,07 MPa gacha va seysmik tebranishlarni 7 ballgacha bardosh bera oladi.
      `,
      description3: `
        Gorizontal po‘lat idishning narxi devor, pastki qism, tom, po‘lat markasi va uning konfiguratsiyasiga qarab shakllanadi.
      `,
      quality: {
        title: "YER USTI VA YER OSTI GORIZONTAL IDISHLARNING SIFAT KAFOLATI:",
        text: `
          Gorizontal silindrsimon idishlar "RESERVOIR BUILDER" Guruhi tomonidan
          <a href="#" className="reservoir-link">
            GOST R 52630-2012 "Payvandlangan po‘lat idishlar va apparatlar"
          </a>,
          <a href="#" className="reservoir-link">
            GOST 17032-2010 "Neft mahsulotlari uchun gorizontal po‘lat idishlar"
          </a>
          ga muvofiq ishlab chiqariladi.
          Mahsulotlarimizning sifati №RRS.00-047039 foydalanish ruxsatnomasi va №RRSc.RU.AB17.No.01286 muvofiqlik sertifikati bilan tasdiqlanadi.
        `,
      },
      manufacturing: {
        title: "GORIZONTAL SILINDRSIMON PO‘LAT IDISHLAR ISHLAB CHIQARISH:",
        text1: `
          Fabrikamizda yiliga 500 dan ortiq
          <strong>neft mahsulotlari uchun gorizontal idishlar</strong> va
          suv, oziq-ovqat xomashyosi va kimyoviy mahsulotlar uchun gorizontal idishlar ishlab chiqariladi. Neft mahsulotlari uchun gorizontal idishlar
          asosan neft bazalarida qo‘llaniladi. Issiq suvni saqlash uchun
          <a href="#" className="reservoir-link">
            akkumulyator baklari
          </a> BAGV ishlab chiqariladi.
        `,
        text2: `
          Ishlab chiqarish Lincoln Electric avtomatik payvandlash uskunalari va zamonaviy metall ishlov berish uskunalari parki bilan jihozlangan. Bu bizga yuqori yig‘ish sifatiga erishish imkonini beradi, shu bilan birga ishlab chiqarish vaqtini va qo‘l mehnati xarajatlarini qisqartiradi.
        `,
        imageAlt: "Idishlar ishlab chiqarish",
      },
      projects: {
        title: "GORIZONTAL RGS IDISHLARNING INDIVIDUAL VA TIPIK LOYIHALARI:",
        text1: `
          Mijozlarimiz har doim konstruktorlik byuromizning tipik chizmalari bo‘yicha ishlab chiqarilgan RGS gorizontal po‘lat idishni sotib olishlari mumkin.
        `,
        text2: `
          Shu bilan birga, so‘nggi bir necha yil ichida nostandart o‘lchamdagi RGS idishlarini individual loyihalar bo‘yicha ishlab chiqarishga buyurtmalar tobora ko‘paymoqda. Bu ishlab chiqarish xususiyatlari, muayyan qurilish ob'ektlarining o‘lchamlari, shuningdek, muayyan korxona va moliyaviy ehtiyojlarni maksimal darajada hisobga olish zarurati bilan izohlanadi. Shuning uchun biz ko‘pincha Buyurtmachining talablariga to‘liq mos keladigan mahsulotlarni ishlab chiqaramiz.
        `,
      },
      variants: {
        title1: "Gorizontal po‘lat idishlar: ishlab chiqarish variantlari",
        text1: `
          ZMK "RESERVOIR BUILDER" turli xil gorizontal silindrsimon po‘lat RGS idishlarini ishlab chiqaradi.
        `,
        title2: "Yer osti gorizontal RGS idishlari / yer usti RGS idishlari:",
        text2: [
          "RGSn – yer usti gorizontal po‘lat idish;",
          "RGSp – texnologik quduqli yer osti gorizontal po‘lat idish;",
        ],
        title3: "Bir devorli gorizontal RGS idishlari / ikki devorli RGS idishlari:",
        text3: [
          "RGSn: yer usti bir devorli gorizontal po‘lat idish;",
          "RGSDn: yer usti ikki devorli gorizontal po‘lat idish;",
          "RGSp: yer osti bir devorli gorizontal po‘lat idish;",
          "RGSDp: yer osti ikki devorli gorizontal po‘lat idish;",
        ],
        text4: `
          Ikk devorli RGS ishlab chiqarishda devorlar orasidagi bo‘shliq azot yoki suyuqlik bilan to‘ldiriladi. Bunda butun devorlararo bo‘shliq to‘ldiriladi va idish yopiq evakuatsiya tizimi bilan jihozlanadi.
        `,
        title4: "Bir sektsiyali / ikki sektsiyali / ko‘p sektsiyali RGS idishlari:",
        text5: `
          Yuqorida sanab o‘tilgan barcha RGS konstruktsiyalari bir yoki bir nechta kamerali (sektsiyali) bo‘lishi mumkin. Kameralar idish korpusi ichida maxsus konstruktsiyali bo‘linmalar orqali hosil qilinadi. Shunday qilib, RGS idishi ikki yoki undan ortiq bo‘linmalarga bo‘linadi, bu esa turli xil suyuq xomashyolarni saqlash imkonini beradi. Ikkala yoki ko‘p kamerali gorizontal idishlar ishlab chiqarishda biz kameralarning muhrlanishini kafolatlaymiz.
        `,
      },
    },
  };

  return (
    <div className="reservoir-section">
      <div className="reservoir-container">
        <p>{content[language].intro}</p>
        <ul className="reservoir-list">
          {content[language].list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p dangerouslySetInnerHTML={{ __html: content[language].description1 }} />
        <p dangerouslySetInnerHTML={{ __html: content[language].description2 }} />
        <p dangerouslySetInnerHTML={{ __html: content[language].description3 }} />

        {/* 1 - Quality Assurance */}
        <div className="reservoir-block">
          <h2 className="reservoir-title">{content[language].quality.title}</h2>
          <p
            className="reservoir-text"
            dangerouslySetInnerHTML={{ __html: content[language].quality.text }}
          />
        </div>

        {/* 2 - Manufacturing */}
        <div className="reservoir-block">
          <h2 className="reservoir-title">{content[language].manufacturing.title}</h2>
          <div className="text2">
            <div>
              <p
                className="reservoir-text"
                dangerouslySetInnerHTML={{ __html: content[language].manufacturing.text1 }}
              />
              <p
                className="reservoir-text"
                dangerouslySetInnerHTML={{ __html: content[language].manufacturing.text2 }}
              />
            </div>
            <div className="reservoir-image">
              <img
                src="https://r-stroitel.ru/upload/images/catalog-avatar/rgs/rgs-manuf-2-big.jpg"
                alt={content[language].manufacturing.imageAlt}
              />
            </div>
          </div>
        </div>

        {/* 3 - Individual Projects */}
        <div className="reservoir-block">
          <h2 className="reservoir-title">{content[language].projects.title}</h2>
          <p className="reservoir-text">{content[language].projects.text1}</p>
          <p className="reservoir-text">{content[language].projects.text2}</p>
        </div>

        <div className="pinkPart">
          <h2 className="reservoir-title">{content[language].variants.title1}</h2>
          <p className="reservoir-text">{content[language].variants.text1}</p>
          <h2 className="reservoir-title">{content[language].variants.title2}</h2>
          {content[language].variants.text2.map((item, index) => (
            <p className="reservoir-text1" key={index}>{item}</p>
          ))}
          <h2 className="reservoir-title">{content[language].variants.title3}</h2>
          {content[language].variants.text3.map((item, index) => (
            <p className="reservoir-text1" key={index}>{item}</p>
          ))}
          <p dangerouslySetInnerHTML={{ __html: content[language].variants.text4 }} />
          <h2 className="reservoir-title">{content[language].variants.title4}</h2>
          <p dangerouslySetInnerHTML={{ __html: content[language].variants.text5 }} />
        </div>
      </div>
    </div>
  );
}