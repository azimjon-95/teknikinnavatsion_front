import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Guvohnoma from "../../assets/cert/сертификатлар_page-0001.jpg"; // Existing, assuming this is the product conformity Guvohnoma
// import Passport from "../../assets/cert/Паспорт.jpg"; // Existing, assuming this is the product passport for sodium nitrate
import Sertifikat from "../../assets/cert/сертификатлар_page-0002.jpg"; // Existing, assuming this is one of the ISO certificates (Russian version)
import Ruxsatnoma1 from "../../assets/cert/сертификатлар_page-0003.jpg"; // New: Ruxsatnoma №186191
import Ruxsatnoma2 from "../../assets/cert/сертификатлар_page-0004.jpg"; // New: Ruxsatnoma №255535
import IsoEnglish from "../../assets/cert/сертификатлар_page-0005.jpg"; // New: English ISO 9001:2015
import ConformityCert from "../../assets/cert/сертификатлар_page-0006.jpg"; // New: Muvo fiqlik Sertifikati (Conformity Certificate)
import "./style.css";

const CertificatesGallery = ({ lang }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const translations = {
    en: {
      subtitle: "Official Documentation & Quality Certifications",
      viewCertificate: "View Certificate",
      certificateDetails: "Certificate Details",
      company: "Company",
      location: "Location",
      status: "Status",
      type: "Type",
      active: "Active",
      companyName: "TEKNIK INNOVATSION LLC",
      locationValue: "Ferghana region, Tashlak district",
      certificates: [
        {
          id: 1,
          title: "Permit Certificate №186191",
          type: "Government Permit",
          description: "Permit for operations in the free economic zone of Kokand, issued on 13.12.2023, valid until 13.12.2053. Covers technical innovation activities in ports, customs warehouses, and related services.",
          image: Ruxsatnoma1,
        },
        {
          id: 2,
          title: "Permit Certificate №255535",
          type: "Government Permit",
          description: "Permit for special economic zone activities in Navoi, issued on 13.04.2024, valid until 13.04.2054. Focuses on technical innovation projects and infrastructure.",
          image: Ruxsatnoma2,
        },
        {
          id: 3,
          title: "ISO 9001:2015 Certificate (Russian)",
          type: "Quality Management",
          description: "Certification for quality management system according to ISO 9001:2015, issued by Astraia on 30.10.2023, valid until 29.10.2026. Applies to construction and production of engineering structures, gas stations, and communications.",
          image: Sertifikat,
        },
        {
          id: 4,
          title: "ISO 9001:2015 Certificate (English)",
          type: "Quality Management",
          description: "English version of the ISO 9001:2015 certification for quality management system, issued by Astraia on 30.10.2023, valid until 29.10.2026. Covers the same scope as the Russian version.",
          image: IsoEnglish,
        },
        {
          id: 5,
          title: "Product Conformity Certificate (Guvohnoma)",
          type: "Product Certification",
          description: "Certificate of conformity for technical sodium nitrate under GOST 828-77, issued by Uzbekistan Metrology Institute on 16.10.2023. Confirms product meets standards for import and local use.",
          image: Guvohnoma,
        },
        {
          id: 6,
          title: "Conformity Certificate",
          type: "Product Conformity",
          description: "Certificate of conformity for sodium nitrate technical GOST 828-77, issued by National Certification System on 07.11.2023, valid until 06.11.2026. Verifies compliance with O'z DSt ISO 9001:2015 standards.",
          image: ConformityCert,
        },
      ],
    },
    ru: {
      subtitle: "Официальная документация и сертификаты качества",
      viewCertificate: "Посмотреть сертификат",
      certificateDetails: "Детали сертификата",
      company: "Компания",
      location: "Местоположение",
      status: "Статус",
      type: "Тип",
      active: "Активен",
      companyName: "ООО TEKNIK INNOVATSION",
      locationValue: "Ферганская область, Ташлакский район",
      certificates: [
        {
          id: 1,
          title: "Разрешительное свидетельство №186191",
          type: "Государственное разрешение",
          description: "Разрешение на деятельность в свободной экономической зоне Коканд, выдано 13.12.2023, действительно до 13.12.2053. Охватывает деятельность по техническим инновациям в портах, таможенных складах и связанных услугах.",
          image: Ruxsatnoma1,
        },
        {
          id: 2,
          title: "Разрешительное свидетельство №255535",
          type: "Государственное разрешение",
          description: "Разрешение на деятельность в специальной экономической зоне Навои, выдано 13.04.2024, действительно до 13.04.2054. Фокус на проектах технических инноваций и инфраструктуре.",
          image: Ruxsatnoma2,
        },
        {
          id: 3,
          title: "Сертификат ISO 9001:2015 (Русский)",
          type: "Управление качеством",
          description: "Сертификация системы менеджмента качества по ISO 9001:2015, выдана Astraia 30.10.2023, действительно до 29.10.2026. Применяется к строительству и производству инженерных сооружений, АЗС и коммуникаций.",
          image: Sertifikat,
        },
        {
          id: 4,
          title: "Сертификат ISO 9001:2015 (Английский)",
          type: "Управление качеством",
          description: "Английская версия сертификации ISO 9001:2015 для системы менеджмента качества, выдана Astraia 30.10.2023, действительно до 29.10.2026. Охватывает тот же объем, что и русская версия.",
          image: IsoEnglish,
        },
        {
          id: 5,
          title: "Сертификат соответствия продукции (Guvohnoma)",
          type: "Сертификация продукции",
          description: "Сертификат соответствия техническому нитрату натрия по ГОСТ 828-77, выдан Институтом метрологии Узбекистана 16.10.2023. Подтверждает соответствие стандартам для импорта и местного использования.",
          image: Guvohnoma,
        },
        {
          id: 6,
          title: "Сертификат соответствия",
          type: "Соответствие продукции",
          description: "Сертификат соответствия нитрату натрия техническому ГОСТ 828-77, выдан Национальной системой сертификации 07.11.2023, действительно до 06.11.2026. Подтверждает соответствие O'z DSt ISO 9001:2015.",
          image: ConformityCert,
        },
      ],
    },
    uz: {
      subtitle: "Rasmiy hujjatlar va sifat sertifikatlari",
      viewCertificate: "Sertifikatni ko'rish",
      certificateDetails: "Sertifikat tafsilotlari",
      company: "Kompaniya",
      location: "Joylashuv",
      status: "Holati",
      type: "Turi",
      active: "Faol",
      companyName: "TEKNIK INNOVATSION MChJ",
      locationValue: "Farg'ona viloyati, Toshloq tumani",
      certificates: [
        {
          id: 1,
          title: "Ruxsatnoma №186191",
          type: "Davlat ruxsatnomasi",
          description: "Qo'qon erkin iqtisodiy zonasi faoliyati uchun ruxsatnoma, 13.12.2023 da berilgan, 13.12.2053 gacha amal qiladi. Portlar, bojxona omborlari va tegishli xizmatlarda texnik innovatsiyalar faoliyatini qamrab oladi.",
          image: Ruxsatnoma1,
        },
        {
          id: 2,
          title: "Ruxsatnoma №255535",
          type: "Davlat ruxsatnomasi",
          description: "Navoiy maxsus iqtisodiy zonasi faoliyati uchun ruxsatnoma, 13.04.2024 da berilgan, 13.04.2054 gacha amal qiladi. Texnik innovatsiya loyihalari va infratuzilmasiga e'tibor qaratilgan.",
          image: Ruxsatnoma2,
        },
        {
          id: 3,
          title: "ISO 9001:2015 sertifikati (Ruscha)",
          type: "Sifat boshqaruvi",
          description: "ISO 9001:2015 bo'yicha sifat menejmenti tizimi sertifikati, Astraia tomonidan 30.10.2023 da berilgan, 29.10.2026 gacha amal qiladi. Qurilish va muhandislik inshootlari, gaz quyish shoxobchalari va aloqa ishlab chiqarishini qamrab oladi.",
          image: Sertifikat,
        },
        {
          id: 4,
          title: "ISO 9001:2015 sertifikati (Inglizcha)",
          type: "Sifat boshqaruvi",
          description: "ISO 9001:2015 sifat menejmenti tizimi sertifikatining inglizcha versiyasi, Astraia tomonidan 30.10.2023 da berilgan, 29.10.2026 gacha amal qiladi. Ruscha versiya bilan bir xil qamrovga ega.",
          image: IsoEnglish,
        },
        {
          id: 5,
          title: "Mahsulot muvofiqlik guvohnomasi (Guvohnoma)",
          type: "Mahsulot sertifikatsiyasi",
          description: "Texnik natriy nitrati GOST 828-77 bo'yicha muvofiqlik guvohnomasi, O'zbekiston metrologiya instituti tomonidan 16.10.2023 da berilgan. Import va mahalliy foydalanish uchun standartlarga muvofiqligini tasdiqlaydi.",
          image: Guvohnoma,
        },
        {
          id: 6,
          title: "Muvofiqlik sertifikati",
          type: "Mahsulot muvofiqligi",
          description: "Natriy nitrati texnik GOST 828-77 muvofiqlik sertifikati, Milliy sertifikatlash tizimi tomonidan 07.11.2023 da berilgan, 06.11.2026 gacha amal qiladi. O'z DSt ISO 9001:2015 standartlariga muvofiqligini tasdiqlaydi.",
          image: ConformityCert,
        },
      ],
    },
  };

  const t = translations[lang] || translations.en;

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsZoomed(false);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="set-container">
      <div className="set-header">
        <p className="set-subtitle">{t.subtitle}</p>
      </div>

      <div className="set-gallery">
        {t.certificates.map((certificate, index) => (
          <div
            key={certificate.id}
            className={`set-certificate-card ${isLoaded ? "set-animate-in" : ""}`}
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={() => openCertificate(certificate)}
          >
            <div className="set-certificate-image">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="set-real-certificate-image"
              />
            </div>
            <div className="set-certificate-info">
              <h3 className="set-certificate-title">{certificate.title}</h3>
              <p className="set-certificate-description">{certificate.description}</p>
              <div className="set-view-button">
                <span>{t.viewCertificate}</span>
                <span className="set-arrow">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="set-modal-overlay" onClick={closeCertificate}>
          <div className="set-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="set-close-button" onClick={closeCertificate}>
              <X size={24} />
            </button>
            <div className="set-modal-header">
              <h2>{selectedCertificate.title}</h2>
              <span className="set-modal-type">{selectedCertificate.type}</span>
            </div>
            <div className="set-modal-body">
              <div className="set-modal-image">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className={`set-modal-certificate-image ${isZoomed ? "zoomed" : ""}`}
                  onClick={toggleZoom}
                  style={{ cursor: isZoomed ? "zoom-out" : "zoom-in" }}
                />
              </div>
              <div className="set-certificate-details">
                <h3>{t.certificateDetails}</h3>
                <div className="set-details-grid">
                  <div className="set-detail-item">
                    <span className="set-label">{t.company}</span>
                    <span className="set-value">{t.companyName}</span>
                  </div>
                  <div className="set-detail-item">
                    <span className="set-label">{t.location}</span>
                    <span className="set-value">{t.locationValue}</span>
                  </div>
                  <div className="set-detail-item">
                    <span className="set-label">{t.status}</span>
                    <span className="set-value set-active">{t.active}</span>
                  </div>
                  <div className="set-detail-item">
                    <span className="set-label">{t.type}</span>
                    <span className="set-value">{selectedCertificate.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesGallery;