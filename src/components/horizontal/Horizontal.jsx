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

  const data = [
    {
      img: rgs3,
      link: "rgs-3",
      text: "РГС-3 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs5,
      link: "rgs-5",
      text: "РГС-5 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs10,
      link: "rgs-10",
      text: "РГС-10 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs15,
      link: "rgs-15",
      text: "РГС-15 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs20,
      link: "rgs-20",
      text: "РГС-20 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs25,
      link: "rgs-25",
      text: "РГС-25 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs30,
      link: "rgs-30",
      text: "РГС-30 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs40,
      link: "rgs-40",
      text: "РГС-40 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs50,
      link: "rgs-50",
      text: "РГС-50 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs60,
      link: "rgs-60",
      text: "РГС-60 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs75,
      link: "rgs-75",
      text: "РГС-75 м3, резервуар горизонтальный стальной наземный / подземный",
    },
    {
      img: rgs100,
      link: "rgs-100",
      text: "РГС-100 м3, резервуар горизонтальный стальной наземный / подземный",
    },
  ];
  return (
    <div className="horizontal">
      <h1>Резервуар вертикальный стальной РВС</h1>
      <p>
        ЗМК «РЕЗЕРВУАРОСТРОИТЕЛЬ» производит{" "}
        <b> резервуары стальные горизонтальные</b>
        цилиндрические РГС, РГЦ для хранения и приёма-раздачи жидкого сырья
        плотностью не более 1 т/м³ при температуре от –60°С до +90°С.
      </p>
      <p>
        Чаще всего в нашей практике горизонтальные{" "}
        <b>резервуары горизонтальные РГС</b>
        применяют на нефтебазах и АЗС как наиболее экономически и технологически
        эффективный вид топливного хранилища. Эффективность данного вида
        резервуаров обеспечена, в первую очередь, разнообразием их объемов и
        конфигураций, адаптируемых под специфику предприятия.
      </p>
      <div className="horizontal-cards">
        {data.map((item, index) => (
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

      <ConstructionStages />
      <ReservoirInfo />
      <ReservoirTable />
      <ReservoirTable2 />
      <ReservoirInfo2 />

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
