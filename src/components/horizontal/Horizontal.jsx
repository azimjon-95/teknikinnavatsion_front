import React, { useEffect, useState } from "react";
import "./Horizontal.css";
import { Link, useLocation } from "react-router-dom";
import ConstructionStages from "./constructionStages/ConstructionStages";
import ReservoirInfo from "./reservoirInfo/ReservoirInfo";
import ReservoirTable from "./ReservoirTable/ReservoirTable";
import ReservoirTable2 from "./ReservoirTable/ReservoirTable2";
import ReservoirInfo2 from "./reservoirInfo/ReservoirInfo2";

import rgs3 from "./assets/rgs-3.jpg";
import rgs5 from "./assets/rgs-5.jpg";
import rgs10 from "./assets/rgs-10.jpg";
import rgs15 from "./assets/rgs-15.jpg";
import rgs20 from "./assets/rgs-20.jpg";
import rgs25 from "./assets/rgs-25.jpg";
import rgs30 from "./assets/rgs-30.jpg";
import rgs40 from "./assets/rgs-40.jpg";
import rgs50 from "./assets/rgs-50.jpg";
import rgs60 from "./assets/rgs-60.jpg";
import rgs75 from "./assets/rgs-75.jpg";
import rgs100 from "./assets/rgs-100.jpg";

function Horizontal() {
  const location = useLocation();
  const [language, setLanguage] = useState("ru");

  useEffect(() => {
    const pathLang = location.pathname.split("/")[1];
    const validLangs = ["ru", "en", "uz"];
    if (validLangs.includes(pathLang)) {
      setLanguage(pathLang);
      localStorage.setItem("lang", pathLang);
    }
  }, [location.pathname]);

  // Data array with translations for each language
  const data = {
    ru: [
      { img: rgs3, link: "rgs-3", text: "РГС-3 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs5, link: "rgs-5", text: "РГС-5 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs10, link: "rgs-10", text: "РГС-10 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs15, link: "rgs-15", text: "РГС-15 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs20, link: "rgs-20", text: "РГС-20 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs25, link: "rgs-25", text: "РГС-25 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs30, link: "rgs-30", text: "РГС-30 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs40, link: "rgs-40", text: "РГС-40 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs50, link: "rgs-50", text: "РГС-50 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs60, link: "rgs-60", text: "РГС-60 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs75, link: "rgs-75", text: "РГС-75 м³, резервуар горизонтальный стальной наземный / подземный" },
      { img: rgs100, link: "rgs-100", text: "РГС-100 м³, резервуар горизонтальный стальной наземный / подземный" },
    ],
    en: [
      { img: rgs3, link: "rgs-3", text: "RGS-3 m³, horizontal steel tank above-ground / underground" },
      { img: rgs5, link: "rgs-5", text: "RGS-5 m³, horizontal steel tank above-ground / underground" },
      { img: rgs10, link: "rgs-10", text: "RGS-10 m³, horizontal steel tank above-ground / underground" },
      { img: rgs15, link: "rgs-15", text: "RGS-15 m³, horizontal steel tank above-ground / underground" },
      { img: rgs20, link: "rgs-20", text: "RGS-20 m³, horizontal steel tank above-ground / underground" },
      { img: rgs25, link: "rgs-25", text: "RGS-25 m³, horizontal steel tank above-ground / underground" },
      { img: rgs30, link: "rgs-30", text: "RGS-30 m³, horizontal steel tank above-ground / underground" },
      { img: rgs40, link: "rgs-40", text: "RGS-40 m³, horizontal steel tank above-ground / underground" },
      { img: rgs50, link: "rgs-50", text: "RGS-50 m³, horizontal steel tank above-ground / underground" },
      { img: rgs60, link: "rgs-60", text: "RGS-60 m³, horizontal steel tank above-ground / underground" },
      { img: rgs75, link: "rgs-75", text: "RGS-75 m³, horizontal steel tank above-ground / underground" },
      { img: rgs100, link: "rgs-100", text: "RGS-100 m³, horizontal steel tank above-ground / underground" },
    ],
    uz: [
      { img: rgs3, link: "rgs-3", text: "RGS-3 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs5, link: "rgs-5", text: "RGS-5 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs10, link: "rgs-10", text: "RGS-10 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs15, link: "rgs-15", text: "RGS-15 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs20, link: "rgs-20", text: "RGS-20 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs25, link: "rgs-25", text: "RGS-25 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs30, link: "rgs-30", text: "RGS-30 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs40, link: "rgs-40", text: "RGS-40 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs50, link: "rgs-50", text: "RGS-50 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs60, link: "rgs-60", text: "RGS-60 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs75, link: "rgs-75", text: "RGS-75 m³, gorizontal po‘lat idish yer usti / yer osti" },
      { img: rgs100, link: "rgs-100", text: "RGS-100 m³, gorizontal po‘lat idish yer usti / yer osti" },
    ],
  };

  // Text content for h1 and p tags based on language
  const content = {
    ru: {
      title: "Резервуар вертикальный стальной РВС",
      description1: `
        ЗМК «РЕЗЕРВУАРОСТРОИТЕЛЬ» производит <b>резервуары стальные горизонтальные</b>
        цилиндрические РГС, РГЦ для хранения и приёма-раздачи жидкого сырья
        плотностью не более 1 т/м³ при температуре от –60°С до +90°С.
      `,
      description2: `
        Чаще всего в нашей практике горизонтальные <b>резервуары горизонтальные РГС</b>
        применяют на нефтебазах и АЗС как наиболее экономически и технологически
        эффективный вид топливного хранилища. Эффективность данного вида
        резервуаров обеспечена, в первую очередь, разнообразием их объемов и
        конфигураций, адаптируемых под специфику предприятия.
      `,
    },
    en: {
      title: "Vertical Steel Tank RVS",
      description1: `
        ZMK "RESERVOIR BUILDER" manufactures <b>horizontal steel tanks</b>
        cylindrical RGS, RGTs for storage and intake-dispensing of liquid raw materials
        with a density not exceeding 1 t/m³ at temperatures from –60°C to +90°C.
      `,
      description2: `
        Most often in our practice, horizontal <b>RGS tanks</b> are used at oil depots
        and gas stations as the most economically and technologically efficient type
        of fuel storage. The efficiency of this type of tank is primarily ensured by
        the variety of their volumes and configurations, adaptable to the specifics of
        the enterprise.
      `,
    },
    uz: {
      title: "Vertikal po‘lat idish RVS",
      description1: `
        ZMK "RESERVOIR BUILDER" kompaniyasi zichligi 1 t/m³ dan oshmaydigan
        suyuq xomashyolarni saqlash va qabul qilish-tashish uchun silindrsimon
        <b>gorizontal po‘lat idishlar</b> RGS, RGTs ishlab chiqaradi, bu idishlar
        –60°C dan +90°C gacha bo‘lgan haroratlarda ishlaydi.
      `,
      description2: `
        Bizning amaliyotimizda ko‘pincha gorizontal <b>RGS idishlari</b> neft bazalari
        va yoqilg‘i quyish shoxobchalarida eng iqtisodiy va texnologik jihatdan samarali
        yoqilg‘i saqlash turi sifatida qo‘llaniladi. Ushbu idishlarning samaradorligi,
        birinchi navbatda, ularning turli xil hajmlari va konfiguratsiyalari bilan ta’minlanadi,
        bu esa korxona xususiyatlariga moslashtiriladi.
      `,
    },
  };

  return (
    <div className="horizontal">
      <h1>{content[language].title}</h1>
      <p dangerouslySetInnerHTML={{ __html: content[language].description1 }} />
      <p dangerouslySetInnerHTML={{ __html: content[language].description2 }} />
      <div className="horizontal-cards">
        {data[language].map((item, index) => (
          <Link
            to={`/${language}/details/${item.link}`}
            className="h-cards-item"
            key={index}
          >
            <img src={item.img} alt={item.text} />
            <p>{item.text}</p>
          </Link>
        ))}
      </div>

      <ConstructionStages language={language} />
      <ReservoirInfo language={language} />
      <ReservoirTable language={language} />
      <ReservoirTable2 language={language} />
      <ReservoirInfo2 language={language} />

      <div className="img_part">
        <img
          src="https://r-stroitel.ru/assets/cache_image/upload/images/catalog-avatar/rgs/RGS-root-im_1920x730_cce.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Horizontal;