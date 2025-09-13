import React from 'react';
import imgRu from '../../assets/azs_ru.jpg';
import imgEn from '../../assets/azs_en.png';
import imgUz from '../../assets/azs_uz.png';
import './style.css';

const AzsStationPage = ({ lang = "ru" }) => {
  const t = {
    ru: {
      title: "БЛОЧНАЯ АВТОЗАПРАВОЧНАЯ СТАНЦИЯ (БАЗС)",
      caption: "«БЛОЧНАЯ АВТОЗАПРАВОЧНАЯ СТАНЦИЯ (БАЗС)»",
      alt: "Блочная автозаправочная станция общий вид",
      labels: {
        canopy: "Навес",
        ceiling: "Потолок Вашей компании",
        logo: "Зона навеса",
        neon: "Неоновая подсветка",
        panel: "Электронное табло цены топлива",
        pump: "Манипуляторы насоса",
        safety: "Блок приёма платежей",
        security: "Неразмещающие оборонение островка безопасности",
        portal: "Портал",
        tanks: "Отсеки АИ-95, АИ-92, ДТ"
      },
      specsTitle: "Технические характеристики",
      intro: "БАЗС с обшитым композитными алюминиевыми панелями.",
      usage: "Использование: преимущественно коммерческое",
      volumeTitle: "Объём МАЗС, м³:",
      volumeDesc: "Двустенный и одностенный резервуар с общим объёмом от 60м³.",
      fuelTitle: "Вариант топлива:",
      fuelVariants: [
        "3 вида, 6 рукавов, 60м³",
        "3 вида, 6 рукавов, 80м³",
        "3 вида, 9 рукавов, 60м³",
        "4 вида, 8 рукавов, 80м³"
      ],
      additional: "Дополнительные возможности:",
      additionalList: [
        "Самообслуживание: Программа «IS» (1 МАЗС)",
        "Автоматический по ключам/картам",
        "Через оператора (пульт оператора/ПК)",
        "Через терминал оплаты наличными/картой"
      ],
      safety: "Системы безопасности:",
      safetyDesc: "в соответствии с НБП 111-98.",
      lowLevel: "Контроль уровня низкого: Датчик верхнего уровня.",
      automationNote: "Возможна установка автоматики и GSM модема для передачи на ПК уровень, объём, массу, температуру, плотность топлива, установленные лимиты для водителей, расход топлива)",
      services: "Дополнительные услуги:",
      servicesDesc: "доставка, пуско управления, монтаж, метрошук, рекламный баннер, гарантия 3 года, контрольные работы проводятся каждые 6 месяцев, все услуги бесплатны.",
      descTitle: "БЛОЧНАЯ АВТОЗАПРАВОЧНАЯ СТАНЦИЯ (Блочная АЗС, БАЗС)",
      desc: "— это автозаправочная станция, укомплектованная двухстенной резервуар, предназначенная для заправки транспортных средств топливом. Блочная АЗС по цене и весогабаритным показаниям характеризуется потенциям расположением резервуара и размещением разливочной колонки над блоком хранения топлива, выполненный как единое заводское изделие.",
      advantages: "Преимущества",
      advantagesList: [
        "Площадь для монтажа АЗС блочного типа требует небольшой участок, т.к. резервуар размещается под землёй, а над ним располагается топливораздаточное оборудование.",
        "Экономия АЗС по цене по сравнению с обычными, чем строительство стационарной или стационарной заправочной станции (Традиционная автозаправочная станция — это АЗС, технологическая система которой предназначена для заправки транспортных средств только жидким моторным топливом и характеризуется подземным расположением резервуара и их размещением с ТРК)",
        "Минимальный срок монтажа и ввода в эксплуатацию в сравнении со стационарной заправочной станцией.",
        "При работе с автоматической автозаправочной станцией у Вас будет возможность полностью отказаться от оператора, тем самым сохранить затраты на персонал. АЗС блочного типа бывают как с оператором, так и без него. Если необходимо автоматическая АЗС, то мы готовы оснастить блочную АЗС терминалом самообслуживания. Наш терминал самообслуживания может принимать денежные средства, банковские карты, карты собственной сети."
      ],
      documents: "Документы:",
      documentsList: [
        "Паспорт на автозаправочную станцию;",
        "Сертификат качества на автозаправочную станцию и резервуар;",
        "Акт об испытании резервуара;",
        "Инструкция по эксплуатации;",
        "Сертификат ISO 9001-2015 Euro standard (Система менеджмента качества)."
      ]
    },
    en: {
      title: "BLOCK MODULAR GAS STATION (BAZS)",
      caption: "“BLOCK MODULAR GAS STATION (BAZS)”",
      alt: "Block modular gas station general view",
      labels: {
        canopy: "Canopy",
        ceiling: "Your company's ceiling",
        logo: "Canopy area",
        neon: "Neon lighting",
        panel: "Electronic fuel price display",
        pump: "Pump manipulators",
        safety: "Payment acceptance unit",
        security: "Non-removable security island defense",
        portal: "Portal",
        tanks: "Compartments AI-95, AI-92, DT"
      },
      specsTitle: "Technical Specifications",
      intro: "BAZS lined with composite aluminum panels.",
      usage: "Usage: primarily commercial",
      volumeTitle: "MAZS Volume, m³:",
      volumeDesc: "Double-walled and single-walled tank with a total volume from 60m³.",
      fuelTitle: "Fuel Variant:",
      fuelVariants: [
        "3 types, 6 hoses, 60m³, price incl. VAT: 571,000,000 soum",
        "3 types, 6 hoses, 80m³, price incl. VAT: 671,000,000 soum",
        "3 types, 9 hoses, 60m³, price incl. VAT: 699,600,000 soum",
        "4 types, 8 hoses, 80m³, price incl. VAT: 709,600,000 soum"
      ],
      additional: "Additional Features:",
      additionalList: [
        "Self-service: “IS” program (1 MAZS) Price incl. VAT: +120,000,000 soum",
        "Automatic by keys/cards",
        "Via operator (operator console/PC)",
        "Via cash/card payment terminal"
      ],
      safety: "Safety Systems:",
      safetyDesc: "in accordance with NBP 111-98.",
      lowLevel: "Low level control: Upper level sensor.",
      automationNote: "Possible installation of automation and GSM modem for transmitting to PC the level, volume, mass, temperature, density of fuel, set limits for drivers, fuel consumption)",
      services: "Additional Services:",
      servicesDesc: "delivery, commissioning, installation, metering, advertising banner, 3-year warranty, control works every 6 months, all services free.",
      descTitle: "BLOCK MODULAR GAS STATION (Block AZS, BAZS)",
      desc: "— is a gas station equipped with a double-walled reservoir, designed for refueling vehicles with fuel. The block AZS is characterized by its price and weight-size indicators by the potential location of the reservoir and the placement of the dispensing column above the fuel storage block, made as a single factory product.",
      advantages: "Advantages",
      advantagesList: [
        "The area for installing a block-type AZS requires a small plot, since the reservoir is placed underground, and above it is the fuel dispensing equipment.",
        "Savings on AZS cost compared to conventional ones, rather than building a stationary or stationary refueling station (Traditional gas station — this is AZS, whose technological system is designed to refuel vehicles only with liquid motor fuel and is characterized by the underground location of the reservoir and their placement with TRK)",
        "Minimum installation and commissioning time compared to a stationary refueling station.",
        "When working with an automatic gas station, you will have the opportunity to completely abandon the operator, thereby saving on personnel costs. Block-type AZS can be with or without an operator. If an automatic AZS is needed, we are ready to equip the block AZS with a self-service terminal. Our self-service terminal can accept cash, bank cards, own network cards."
      ],
      documents: "Documents:",
      documentsList: [
        "Passport for the gas station;",
        "Quality certificate for the gas station and reservoir;",
        "Act on reservoir testing;",
        "Operation manual;",
        "ISO 9001-2015 Euro standard certificate (Quality Management System)."
      ]
    },
    uz: {
      title: "BLokli Avtozapravka Stansiya (BAZS)",
      caption: "“BLOKLI AVTOZAPRAVKA STANSIYA (BAZS)”",
      alt: "Blokli avtozapravka stansiya umumiy ko'rinish",
      labels: {
        canopy: "Soyabon",
        ceiling: "Sizning kompaniyangiz shift",
        logo: "Soyabon zonasi",
        neon: "Neon yoritish",
        panel: "Yoqilg'i narxi elektron jadvali",
        pump: "Nasos manipulyatorlari",
        safety: "To'lov qabul qilish bloki",
        security: "Xavfsizlik orolini himoya qilish (o'rnatilmaydigan)",
        portal: "Portal",
        tanks: "AI-95, AI-92, DT bo'linmalari"
      },
      specsTitle: "Texnik xususiyatlar",
      intro: "Kompozit alyuminiy panellar bilan qoplangan BAZS.",
      usage: "Foydalanish: asosan tijoriy",
      volumeTitle: "MAZS hajmi, m³:",
      volumeDesc: "Ikki devorli va bitta devorli rezervuar umumiy hajmi 60 m³ dan boshlab.",
      fuelTitle: "Yoqilg'i varianti:",
      fuelVariants: [
        "3 tur, 6 shlang, 60m³, QQS bilan narx: 571.000.000 so'm",
        "3 tur, 6 shlang, 80m³, QQ bilan narx: 671.000.000 so'm",
        "3 tur, 9 shlang, 60m³, QQS bilan narx: 699.600.000 so'm",
        "4 tur, 8 shlang, 80m³, QQS bilan narx: 709.600.000 so'm"
      ],
      additional: "Qo'shimcha imkoniyatlar:",
      additionalList: [
        "O'z-o'ziga xizmat: “IS” dasturi (1 MAZS) QQS bilan narx: +120.000.000 so'm",
        "Kalit/kartalar bo'yicha avtomatik",
        "Operator orqali (operator pulti/PC)",
        "Naqd/karta to'lov terminali orqali"
      ],
      safety: "Xavfsizlik tizimlari:",
      safetyDesc: "NBP 111-98 ga muvofiq.",
      lowLevel: "Past daraja nazorati: Yuqori daraja sensori.",
      automationNote: "Avtomatika va GSM modem o'rnatish mumkin, PC ga daraja, hajm, massa, harorat, yoqilg'i zichligi, haydovchilar uchun belgilangan limitlar, yoqilg'i sarfi haqida ma'lumot uzatish uchun)",
      services: "Qo'shimcha xizmatlar:",
      servicesDesc: "yetkazib berish, ishga tushirish, o'rnatish, o'lchov, reklama baneri, 3 yillik kafolat, nazorat ishlari har 6 oyda, barcha xizmatlar bepul.",
      descTitle: "BLOKLI AVTOZAPRAVKA STANSIYA (Blokli AZS, BAZS)",
      desc: "— bu ikki devorli rezervuar bilan jihozlangan avtozapravka stansiyasi bo'lib, transport vositalarini yoqilg'i bilan ta'minlash uchun mo'ljallangan. Blokli AZS narxi va og'irlik-o'lcham ko'rsatkichlari bo'yicha rezervuar joylashuvi va yoqilg'i saqlash blokining ustiga quyma ustuni joylashtirilishi bilan xarakterlanadi, bu yagona zavod mahsuloti sifatida ishlab chiqarilgan.",
      advantages: "Afzalliklar",
      advantagesList: [
        "Blokli tipdagi AZS o'rnatish uchun maydon kichik uchastkani talab qiladi, chunki rezervuar yer ostiga joylashtiriladi, ustida esa yoqilg'i taqsimlash jihozlari joylashadi.",
        "Oddiy AZZS ga nisbatan narx tejash, stasionar yoki stasionar zapravka stansiyasini qurishdan ko'ra (An'anaviy avtozapravka stansiya — bu AZS, uning texnologik tizimi faqat suyuq motor yoqilg'isi bilan transport vositalarini ta'minlash uchun mo'ljallangan va rezervuarning yer osti joylashuvi va TRK bilan joylashuvi bilan xarakterlanadi)",
        "Stasionar zapravka stansiyasiga nisbatan minimal o'rnatish va ishga tushirish muddati.",
        "Avtomatik avtozapravka stansiyasi bilan ishlashda operatorni to'liq rad etish imkoniyati bo'ladi, shu bilan xodimlar xarajatlarini tejash. Blokli tipdagi AZS operatorli ham, operatorsiz ham bo'ladi. Agar avtomatik AZS kerak bo'lsa, blokli AZS ni o'z-o'ziga xizmat terminali bilan jihozlashga tayyormiz. Bizning o'z-o'ziga xizmat terminali naqd pul, bank kartalari, o'z tarmog'ining kartalarini qabul qilishi mumkin."
      ],
      documents: "Hujjatlar:",
      documentsList: [
        "Avtozapravka stansiyasi pasporti;",
        "Avtozapravka stansiyasi va rezervuar uchun sifat sertifikati;",
        "Rezervuar sinov aktlari;",
        "Ishlatish bo'yicha ko'rsatma;",
        "ISO 9001-2015 Euro standarti sertifikati (Sifat menejmenti tizimi)."
      ]
    }
  };

  const content = t[lang];

  return (
    <div className="azs-container">

      {/* Station Images */}
      <section className="azs-images">
        <div className="azs-station-overview">
          <p className="azs-image-caption">{content.caption}</p>
          <img
            src={lang === "ru" ? imgRu : lang === "en" ? imgEn : imgUz}
            alt={content.alt}
            className="azs-main-image"
          />
        </div>

        <div className="azs-component-labels">
          <div className="azs-label azs-label-canopy">{content.labels.canopy}</div>
          <div className="azs-label azs-label-ceiling">{content.labels.ceiling}</div>
          <div className="azs-label azs-label-logo">{content.labels.logo}</div>
          <div className="azs-label azs-label-neon">{content.labels.neon}</div>
          <div className="azs-label azs-label-panel">{content.labels.panel}</div>
          <div className="azs-label azs-label-pump">{content.labels.pump}</div>
          <div className="azs-label azs-label-safety">{content.labels.safety}</div>
          <div className="azs-label azs-label-security">{content.labels.security}</div>
          <div className="azs-label azs-label-portal">{content.labels.portal}</div>
          <div className="azs-label azs-label-tanks">{content.labels.tanks}</div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="azs-specifications">
        <h3>{content.specsTitle}</h3>
        <p className="azs-intro">{content.intro}</p>
        <p className="azs-usage"><strong>{content.usage}</strong></p>

        <div className="azs-fuel-types">
          <div className="azs-fuel-item">
            <h4>{content.volumeTitle}</h4>
            <p>{content.volumeDesc}</p>
          </div>

          <div className="azs-fuel-variants">
            <div className="azs-variant">
              <h4>{content.fuelTitle}</h4>
              <ul>
                {content.fuelVariants.map((variant, index) => (
                  <li key={index}>{variant}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="azs-features">
          <h4>{content.additional}</h4>
          <ul>
            {content.additionalList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="azs-safety">
          <h4>{content.safety}</h4>
          <p>{content.safetyDesc}</p>
          <p><strong>{content.lowLevel}</strong></p>
          <p className="azs-automation-note">
            <em>{content.automationNote}</em>
          </p>
        </div>

        <div className="azs-services">
          <h4>{content.services}</h4>
          <p>{content.servicesDesc}</p>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="azs-description">
        <h3>{content.descTitle}</h3>
        <p>
          {content.desc}
        </p>

        <div className="azs-advantages">
          <h4>{content.advantages}</h4>
          <ol>
            {content.advantagesList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Documents */}
      <section className="azs-documents">
        <h3>{content.documents}</h3>
        <ul>
          {content.documentsList.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default AzsStationPage;