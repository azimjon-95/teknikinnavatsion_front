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
      "Резервуар горизонтальный стальной РГС",
      "Резервуар вертикальный стальной РВС",
      "Блочная автозаправочная станция (БАЗС)",
    ],
  },
  en: {
    contactEmail: "teknikinnovatsion.info@gmail.com",
    navLinks: [
      "Horizontal Steel Tank RGS",
      "Vertical Steel Tank RVS",
      "Block Fuel Station (BAZS)",
    ],
  },
  uz: {
    contactEmail: "teknikinnovatsion.info@gmail.com",
    navLinks: [
      "Gorizontal po'lat rezervuar RGS",
      "Vertikal po'lat rezervuar RVS",
      "Blokli avtoyog' quyish shaxobchasi (BAZS)",
    ],
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
    navigate(`/${value}`);
  };

  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
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
        {translations[language].navLinks.map((link, index) => (
          <Link key={index} to={`/${language}/${link.toLowerCase().replace(/\s+/g, "-")}`}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;