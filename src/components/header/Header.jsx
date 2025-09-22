import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search, Phone, Mail } from "lucide-react";
import { Select } from "antd";
import { toggleSearchPanel, setSearchQuery } from "../../context/actions/authSearch";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../../assets/logoHeader.png";
import TEKNIK from "../../assets/TEKNIK.jpg";
import "./style.css";

const { Option } = Select;

const translations = {
  ru: {
    contactEmail: "teknikinnovatsion.info@gmail.com",
    navLinks: [
      { label: "Резервуар горизонтальный стальной РГС", path: "rgs" },
      { label: "Резервуар вертикальный стальной РВС", path: "rvs" },

    ],
  },
  en: {
    contactEmail: "teknikinnovatsion.info@gmail.com",
    navLinks: [
      { label: "Horizontal Steel Tank RGS", path: "rgs" },
      { label: "Vertical Steel Tank RVS", path: "rvs" },
    ],
  },
  uz: {
    contactEmail: "teknikinnovatsion.info@gmail.com",
    navLinks: [
      { label: "Gorizontal po'lat rezervuar RGS", path: "rgs" },
      { label: "Vertikal po'lat rezervuar RVS", path: "rvs" },
    ],
  },
};
const translations2 = {
  ru: {
    navLinks: [
      { label: "Коммерческое предложение на (АЗС)", path: "azs" },
      { label: "Коммерческое предложение на (МАЗС)", path: "mazs" },
      { label: "Коммерческое предложение (KAЗС)", path: "kazs" },
      { label: "Блочная автозаправочная станция (БАЗС)", path: "bazs" },
    ],
    imageAlt: "Карточка автозаправочной станции {id}",
    modalImageAlt: "Увеличенное изображение карточки",
    closeButtonAria: "Закрыть модальное окно",
  },
  en: {
    navLinks: [
      { label: "Commercial Offer for (AZS)", path: "azs" },
      { label: "Commercial Offer (MAZS)", path: "mazs" },
      { label: "Commercial Offer (KAZS)", path: "kazs" },
      { label: "Block Fuel Station (BAZS)", path: "bazs" },
    ],
    imageAlt: "Fuel station card {id}",
    modalImageAlt: "Enlarged view of the card",
    closeButtonAria: "Close modal window",
  },
  uz: {
    navLinks: [
      { label: "Tijorat taklifi (AZS)", path: "azs" },
      { label: "Tijorat taklifi (MAZS)", path: "mazs" },
      { label: "Tijorat taklifi (KAZS)", path: "kazs" },
      { label: "Blokli avtoyog' quyish shaxobchasi (BAZS)", path: "bazs" },
    ],
    imageAlt: "Avtoyog' quyish shaxobchasi kartasi {id}",
    modalImageAlt: "Kartaning kattalashtirilgan ko'rinishi",
    closeButtonAria: "Modal oynani yopish",
  },
};

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isSearchOpen, searchQuery } = useSelector((state) => state.search);
  const [language, setLanguage] = useState("ru");
  const searchPanelRef = useRef(null);

  useEffect(() => {
    const pathLang = location.pathname.split("/")[1];
    const validLangs = ["ru", "en", "uz"];
    if (validLangs.includes(pathLang)) {
      setLanguage(pathLang);
      localStorage.setItem("lang", pathLang);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && searchPanelRef.current && !searchPanelRef.current.contains(event.target)) {
        dispatch(toggleSearchPanel());
      }
    };
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen, dispatch]);

  const handleLanguageChange = (value) => {
    setLanguage(value);
    localStorage.setItem("lang", value);

    // Joriy yo'lni olish (masalan, /ru/rgs yoki /en/contact)
    const currentPath = location.pathname;

    // Yo'lni til qismiga bo'lib, faqat tilni almashtirish
    const pathParts = currentPath.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      // Birinchi qism til (ru, en, uz), qolgan qism esa sahifa yo'li
      const newPath = `/${value}/${pathParts.slice(1).join("/")}`;
      navigate(newPath);
    } else {
      // Agar yo'l bo'sh bo'lsa, faqat tilni o'zgartirish
      navigate(`/${value}`);
    }
  };



  return (
    <div className="bez-header">
      <div className="bez-header-top-content">
        <div className="bez-contact-imgBox">
          <Link to="/" className="bez-contact-img">
            <img src={logo} alt="Company logo" />
          </Link>
          <img src={TEKNIK} alt="Company logo" />
          <a href={`mailto:${translations[language].contactEmail}`} className="bez-contact-info">
            <Mail size={16} />
            <span>{translations[language].contactEmail}</span>
          </a>
        </div>
        <div className="bez-header-actions">
          <Link to={`/${language}/contact`} className="bez-btn-icon">
            <Phone size={24} />
          </Link>
          <div className="bez-language-selector">
            <Select value={language} onChange={handleLanguageChange}>
              <Option value="ru">Русский</Option>
              <Option value="en">English</Option>
              <Option value="uz">O'zbekcha</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="bez-header-bottom">
        {
          translations[language].navLinks.map((link, index) => {
            return (
              <Link
                key={index}
                to={`/${language}/${link.path}`}
              >
                {link.label}
              </Link>

            )
          })
        }
      </div>
      <div className="bez-header-bottom">
        {translations2[language].navLinks.map((link, index) => (
          <Link key={index} to={`/${language}/${link.path}`}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;


