// import React from "react";
// import "./ReservoirInfo.css";
// import { Link } from "react-router-dom";

// export default function ReservoirInfo() {
//   return (
//     <div className="reservoir-section">
//       <div className="reservoir-container">
//         <p>
//           Резервуары стальные вертикальные цилиндрические РВС применяются для
//           приема, хранения и выдачи жидких продуктов. Как правило, резервуары
//           вертикальные используются для хранения:
//         </p>
//         <ul className="reservoir-list">
//           <li>
//             нефти и нефтепродуктов (бензина, дизельного топлива, керосина,
//             мазута),
//           </li>
//           <li>технических спиртов, аммиачной воды,</li>
//           <li>
//             жидкого сырья для пищевой промышленности: растительных масел,
//             сахарных сиропов и т.д.;
//           </li>
//           <li>сжиженных газов</li>
//           <li>воды, в том числе противопожарного запаса.</li>
//         </ul>
//         <p>
//           Популярность вертикальных цилиндрических резервуаров в качестве
//           способа хранения нефтепродуктов, воды и прочих жидкостей обусловлена
//           их дешевизной, быстротой изготовления и простотой эксплуатации.
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./ReservoirInfo.css";
import { Link } from "react-router-dom";

export default function ReservoirInfo({ lang = "ru" }) {
  const translations = {
    ru: {
      description:
        "Резервуары стальные вертикальные цилиндрические РВС применяются для приема, хранения и выдачи жидких продуктов. Как правило, резервуары вертикальные используются для хранения:",
      uses: [
        "нефти и нефтепродуктов (бензина, дизельного топлива, керосина, мазута),",
        "технических спиртов, аммиачной воды,",
        "жидкого сырья для пищевой промышленности: растительных масел, сахарных сиропов и т.д.;",
        "сжиженных газов",
        "воды, в том числе противопожарного запаса.",
      ],
      conclusion:
        "Популярность вертикальных цилиндрических резервуаров в качестве способа хранения нефтепродуктов, воды и прочих жидкостей обусловлена их дешевизной, быстротой изготовления и простотой эксплуатации.",
    },
    uz: {
      description:
        "RVS vertikal silindrsimon po'lat rezervuarlar suyuq mahsulotlarni qabul qilish, saqlash va chiqarish uchun qo'llaniladi. Odatda, vertikal rezervuarlar quyidagilarni saqlash uchun ishlatiladi:",
      uses: [
        "neft va neft mahsulotlari (benzin, dizel yoqilg'isi, kerosin, mazut),",
        "texnik spirtlar, ammiak suvi,",
        "oziq-ovqat sanoati uchun suyuq xom ashyo: o'simlik moylari, shakar siroplari va boshqalar;",
        "suyultirilgan gazlar",
        "suv, shu jumladan yong'inga qarshi zaxira.",
      ],
      conclusion:
        "Vertikal silindrsimon rezervuarlarning neft mahsulotlari, suv va boshqa suyuqliklarni saqlash usuli sifatida mashhurligi ularning arzonligi, tez ishlab chiqarish va ekspluatatsiya oddiyligidan kelib chiqadi.",
    },
    en: {
      description:
        "RVS vertical cylindrical steel reservoirs are used for receiving, storing and dispensing liquid products. Typically, vertical reservoirs are used for storing:",
      uses: [
        "oil and petroleum products (gasoline, diesel fuel, kerosene, fuel oil),",
        "technical alcohols, ammonia water,",
        "liquid raw materials for food industry: vegetable oils, sugar syrups, etc.;",
        "liquefied gases",
        "water, including fire-fighting reserves.",
      ],
      conclusion:
        "The popularity of vertical cylindrical reservoirs as a method of storing petroleum products, water and other liquids is due to their cheapness, speed of manufacture and simplicity of operation.",
    },
  };

  const currentTranslation = translations[lang] || translations.ru;

  return (
    <div className="reservoir-section">
      <div className="reservoir-container">
        <p>{currentTranslation.description}</p>
        <ul className="reservoir-list">
          {currentTranslation.uses.map((use, index) => (
            <li key={index}>{use}</li>
          ))}
        </ul>
        <p>{currentTranslation.conclusion}</p>
      </div>
    </div>
  );
}
