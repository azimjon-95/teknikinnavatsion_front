import React, { useEffect, useState } from "react";
import "./Vertical.css";
import { Link, useLocation } from "react-router-dom";
// images
import rvs100 from "./assets/rvs-100.jpg";
import rvs200 from "./assets/rvs-200.jpg";
import rvs300 from "./assets/rvs-300.jpg";
import rvs400 from "./assets/rvs-400.jpg";
import rvs500 from "./assets/rvs-500.jpg";
import rvs700 from "./assets/rvs-700.jpg";
import rvs1000 from "./assets/rvs-1000.jpg";
import rvs2000 from "./assets/rvs-2000.jpg";
import rvs3000 from "./assets/rvs-3000.jpg";
import rvs5000 from "./assets/rvs-5000.jpg";
import rvs10000 from "./assets/rvs-10000.jpg";
import rvs20000 from "./assets/rvs-20000.jpg";
import ConstructionStages from "./constructionStages/ConstructionStages";
import ReservoirInfo from "./reservoirInfo/ReservoirInfo";
import ReservoirTable from "./ReservoirTable/ReservoirTable";
import TypesOfReservoirs from "./typesOfReservoirs/TypesOfReservoirs";

function Vertical() {
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
      img: rvs100,
      link: "rvs-100",
      text: "РВС-100 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs200,
      link: "rvs-200",
      text: "РВС-200 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs300,
      link: "rvs-300",
      text: "РВС-300 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs400,
      link: "rvs-400",
      text: "РВС-400 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs500,
      link: "rvs-500",
      text: "РВС-500 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs700,
      link: "rvs-700",
      text: "РВС-700 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs1000,
      link: "rvs-1000",
      text: "РВС-1000 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs2000,
      link: "rvs-2000",
      text: "РВС-2000 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs3000,
      link: "rvs-3000",
      text: "РВС-3000 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs5000,
      link: "rvs-5000",
      text: "РВС-5000 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs10000,
      link: "rvs-10000",
      text: "РВС-10000 м³, резервуар вертикальный стальной цилиндрический",
    },
    {
      img: rvs20000,
      link: "rvs-20000",
      text: "РВС-20000 м³, резервуар вертикальный стальной цилиндрический",
    },
  ];

  return (
    <div className="vertical">
      <h1>Резервуар вертикальный стальной РВС</h1>
      <p>
        ЗМК «РЕЗЕРВУАРОСТРОИТЕЛЬ» производит резервуары стальные вертикального
        исполнения объемом от 100 до 50'000 кубических метров.
      </p>
      <p>
        Производственные мощности завода позволяют выпускать резервуары для
        хранения различных жидкостей с использованием метода рулонирования или
        полистовой технологии.
      </p>

      <div className="vertical-cards">
        {data.map((item, index) => (
          <Link
            to={`/${language}/rvs-details/${item.link}`}
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
      <TypesOfReservoirs />
    </div>
  );
}

export default Vertical;
