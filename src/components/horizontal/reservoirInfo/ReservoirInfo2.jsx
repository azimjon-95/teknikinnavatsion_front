import React from "react";
import "./ReservoirInfo.css";

export default function ReservoirInfo2({ language = "ru" }) {
  // Content object with translations for each language
  const content = {
    ru: {
      construction: {
        title: "Конструкция резервуаров горизонтальных стальных цилиндрических РГС:",
        texts: [
          "Элементы конструкции горизонтального цилиндрического резервуара РГС:",
          "- опорная часть,",
          "- стенка корпуса и узлы жесткости,",
          "- торцевые части корпуса (днища),",
          "- навесное оборудование.",
          "Опорная часть исполняется в нескольких вариантах:",
          "- стальные опоры (опорные стойки);",
          "- опоры седловидные из железобетона;",
          "- основания из уплотненного песка с гидрофобным слоем.",
          "Корпус РГС состоит из цилиндрической и торцевых частей. Цилиндрическую часть корпуса также принято называть стенкой, а торцевые части – днищами.",
          "Цилиндрическая часть корпуса или стенка РГС состоит из определенного проектом количества обечаек, которые выполняются из металлопроката и в диаметре достигают 3,25 м. Толщины металлопроката определяют расчетами на устойчивость и прочность. Обечайки свариваются встык (монтажный шов при этом может быть выполнен внахлёст). Корпус РГС часто комплектуется кольцами жесткости.",
          "Днища РГС бывают двух видов:",
          "- плоские днища (безреберные или ребристые) – применяются в РГС с избыточным давлением до 40 кПа;",
          "- конические днища – применяются в РГС с избыточным давлением от 40 кПа до 70 кПа.",
          `Изделия снабжают заземлением, лестницами, люками-лазами, оборудованием приёма-раздачи, вентиляции и КИПиА. По необходимости оборудуют устройствами подогрева. Также <b>резервуары стальные горизонтальные</b> подвергаются антикоррозийной защите и теплоизоляции.`,
        ],
      },
      guarantees: {
        title: "Гарантии на горизонтальные цилиндрические резервуары:",
        texts: [
          "В соответствие с ГОСТ Р 52630-2006:",
          "Предприятие-изготовитель гарантирует соответствие оборудования требованиям ГОСТ Р 52630-2006 «Сосуды и аппараты стальные сварные» при соблюдении условий хранения, транспортировки, монтажа и эксплуатации.",
          "Гарантийный срок эксплуатации резервуаров стальных горизонтальных цилиндрических: 18 месяцев со дня ввода оборудования в эксплуатацию, но не более 24 месяцев после отгрузки Заказчику с завода.",
        ],
      },
    },
    en: {
      construction: {
        title: "Construction of Horizontal Cylindrical Steel RGS Tanks:",
        texts: [
          "Components of the horizontal cylindrical RGS tank construction:",
          "- supporting structure,",
          "- tank body wall and stiffening elements,",
          "- end parts of the body (bottoms),",
          "- mounted equipment.",
          "The supporting structure is available in several variants:",
          "- steel supports (supporting columns);",
          "- saddle-shaped reinforced concrete supports;",
          "- bases made of compacted sand with a hydrophobic layer.",
          "The RGS body consists of cylindrical and end parts. The cylindrical part of the body is commonly referred to as the wall, and the end parts are called bottoms.",
          "The cylindrical part of the body, or the RGS wall, consists of a project-specified number of shells made from rolled metal, reaching a diameter of 3.25 m. The thickness of the rolled metal is determined by calculations for stability and strength. The shells are welded butt-to-butt (though the assembly seam may be overlapped). The RGS body is often equipped with stiffening rings.",
          "RGS bottoms are of two types:",
          "- flat bottoms (ribless or ribbed) – used in RGS tanks with excess pressure up to 40 kPa;",
          "- conical bottoms – used in RGS tanks with excess pressure from 40 kPa to 70 kPa.",
          `The tanks are equipped with grounding, ladders, manholes, intake-dispensing equipment, ventilation, and instrumentation. If necessary, heating devices are installed. Additionally, <b>horizontal steel tanks</b> undergo anti-corrosion protection and thermal insulation.`,
        ],
      },
      guarantees: {
        title: "Guarantees for Horizontal Cylindrical Tanks:",
        texts: [
          "In accordance with GOST R 52630-2006:",
          "The manufacturing company guarantees that the equipment complies with the requirements of GOST R 52630-2006 'Welded Steel Vessels and Apparatus' provided the conditions of storage, transportation, installation, and operation are met.",
          "The warranty period for the operation of horizontal cylindrical steel tanks is 18 months from the date of commissioning, but no more than 24 months after shipment to the Customer from the factory.",
        ],
      },
    },
    uz: {
      construction: {
        title: "Gorizontal silindrsimon po‘lat RGS idishlarining konstruktsiyasi:",
        texts: [
          "Gorizontal silindrsimon RGS idish konstruktsiyasining elementlari:",
          "- tayanch qismi,",
          "- korpus devori va mustahkamlovchi tugunlar,",
          "- korpusning uchlari (tagliklar),",
          "- o‘rnatilgan jihozlar.",
          "Tayanch qismi bir nechta variantlarda tayyorlanadi:",
          "- po‘lat tayanchlar (tayanch ustunlari);",
          "- temir-beton saddlesimon tayanchlar;",
          "- gidrofob qatlamli siqilgan qum asoslari.",
          "RGS korpusi silindrsimon va uchlardagi qismlardan iborat. Korpusning silindrsimon qismi odatda devor deb ataladi, uchlardagi qismlar esa tagliklar deb nomlanadi.",
          "Korpusning silindrsimon qismi yoki RGS devori loyihada belgilangan miqdordagi prokat metallidan tayyorlangan qobiqlardan iborat bo‘lib, diametri 3,25 m ga yetadi. Prokat metallining qalinligi barqarorlik va mustahkamlik hisob-kitoblari bilan aniqlanadi. Qobiqlar bir-biriga ulanma payvandlanadi (montaj choki esa bir-biriga yopishgan holda bajarilishi mumkin). RGS korpusi ko‘pincha mustahkamlovchi halqalar bilan jihozlanadi.",
          "RGS tagliklari ikki turdagi bo‘ladi:",
          "- tekis tagliklar (qovurg‘asiz yoki qovurg‘ali) – 40 kPa gacha ortiqcha bosimli RGS idishlarida qo‘llaniladi;",
          "- konussimon tagliklar – 40 kPa dan 70 kPa gacha ortiqcha bosimli RGS idishlarida qo‘llaniladi.",
          `Mahsulotlar yerga ulash, zinapoyalar, lyuk-lazlar, qabul qilish-tashish jihozlari, ventilyatsiya va KIPiA bilan jihozlanadi. Agar kerak bo‘lsa, isitish moslamalari o‘rnatiladi. Shuningdek, <b>gorizontal po‘lat idishlar</b> korroziyaga qarshi himoya va issiqlik izolyatsiyasiga duchor bo‘ladi.`,
        ],
      },
      guarantees: {
        title: "Gorizontal silindrsimon idishlar uchun kafolatlar:",
        texts: [
          "GOST R 52630-2006 ga muvofiq:",
          "Ishlab chiqaruvchi korxona uskunaning saqlash, tashish, o‘rnatish va ekspluatatsiya shartlariga rioya qilinganda GOST R 52630-2006 “Payvandlangan po‘lat idishlar va apparatlar” talablariga muvofiqligini kafolatlaydi.",
          "Gorizontal silindrsimon po‘lat idishlarning ekspluatatsiya kafolat muddati: uskunaning ishga tushirilgan kunidan boshlab 18 oy, lekin zavoddan Buyurtmachiga jo‘natilgandan keyin 24 oydan oshmasligi kerak.",
        ],
      },
    },
  };

  return (
    <div className="reservoir-section">
      <div className="reservoir-container">
        {/* Commented-out section remains unchanged */}
        {/* <p>Наиболее часто используются:</p>
        <ul className="reservoir-list">
          <li>резервуары горизонтальные РГС для светлых нефтепродуктов;</li>
          <li>резервуары горизонтальные РГС для тёмных нефтепродуктов;</li>
          <li>
            резервуары горизонтальные РГС для воды (питьевой, пожарной,
            технической);
          </li>
          <li>
            резервуары горизонтальные РГС для масел и смазочных материалов;
          </li>
          <li>резервуары горизонтальные РГС для спиртов;</li>
          <li>резервуары горизонтальные РГС для пищевого сырья;</li>
        </ul>
        <p>
          Как правило, горизонтальные резервуары используются для хранения
          жидкостей объемом до 100 кубометров. Для больших объемов складирования
          применяются <Link to={"/vertical"}>вертикальные резервуары.</Link>
        </p>
        <p>
          При соблюдении производителем требований к качеству РГС способен
          выдерживать внутренне давление до 0,07 МПа и сейсмические колебания до
          7 баллов.
        </p>
        <p>
          На резервуар стальной горизонтальный цена формируется исходя из толщин
          стенки, днища, крыши, марки стали, и его комплектации.
        </p> */}

        {/* 1 - Construction */}
        <div className="reservoir-block">
          <h2 className="reservoir-title">{content[language].construction.title}</h2>
          {content[language].construction.texts.map((text, index) => (
            <p
              key={index}
              className="reservoir-text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>

        {/* 2 - Guarantees */}
        <div className="reservoir-block">
          <h2 className="reservoir-title">{content[language].guarantees.title}</h2>
          <div className="text2">
            <div>
              {content[language].guarantees.texts.map((text, index) => (
                <p
                  key={index}
                  className="reservoir-text"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}