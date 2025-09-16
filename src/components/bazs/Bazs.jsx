import React from 'react';
import { useGetBazsStationsQuery } from '../../context/productionApi';
import './style.css';

const AzsStationPage = ({ lang = "ru" }) => {
  const { data: stations, isLoading, refetch } = useGetBazsStationsQuery();

  // Map the station data to include language-specific content and _id
  const data = stations?.innerData?.map((station) => ({
    ...station[lang], // Spread the language-specific data (e.g., en, ru, uz)
    _id: station._id, // Add the _id from the station
  }));

  // Get the last created data object
  const content = data && data.length > 0 ? data[data.length - 1] : null;

  // Loading state
  if (isLoading) {
    return (
      <div className="azs-container">
        <p>Loading...</p>
      </div>
    );
  }

  // No-data state
  if (!content) {
    return (
      <div className="azs-container">
        <p>No data available for the selected language.</p>
      </div>
    );
  }

  return (
    <div className="azs-container">
      {/* Station Images */}
      <section className="azs-images">
        <div className="azs-station-overview">
          <p className="azs-image-caption">{content?.title}</p>
          <img
            src={content?.img}
            alt="No image available"
            className="azs-main-image"
          />
        </div>

        <div className="azs-component-labels">
          <div className="azs-label azs-label-canopy">{content?.labels?.canopy}</div>
          <div className="azs-label azs-label-ceiling">{content?.labels?.ceiling}</div>
          <div className="azs-label azs-label-logo">{content?.labels?.logo}</div>
          <div className="azs-label azs-label-neon">{content?.labels?.neon}</div>
          <div className="azs-label azs-label-panel">{content?.labels?.panel}</div>
          <div className="azs-label azs-label-pump">{content?.labels?.pump}</div>
          <div className="azs-label azs-label-safety">{content?.labels?.safety}</div>
          <div className="azs-label azs-label-security">{content?.labels?.security}</div>
          <div className="azs-label azs-label-portal">{content?.labels?.portal}</div>
          <div className="azs-label azs-label-tanks">{content?.labels?.tanks}</div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="azs-specifications">
        <h3>
          {lang === "ru" && "Технические характеристики"}
          {lang === "en" && "Technical Specifications"}
          {lang === "uz" && "Texnik Xususiyatlar"}
        </h3>
        <p className="azs-intro">{content?.intro}</p>
        <p className="azs-usage"><strong>{content?.usage}</strong></p>

        <div className="azs-fuel-types">
          <div className="azs-fuel-item">
            <h4>
              {lang === "ru" && "Объём МАЗС, м³:"}
              {lang === "en" && "MAZS Volume, m³:"}
              {lang === "uz" && "MAZS Hajmi, m³:"}
            </h4>
            <p>{content?.volumeDesc}</p>
          </div>

          <div className="azs-fuel-variants">
            <div className="azs-variant">
              <h4>
                {lang === "ru" && "Вариант топлива:"}
                {lang === "en" && "Fuel Variants:"}
                {lang === "uz" && "Yoqilg‘i Turlari:"}
              </h4>
              <ul>
                {content?.fuelVariants?.map((variant, index) => (
                  <li key={index}>{variant}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="azs-features">
          <h4>
            {lang === "ru" && "Дополнительные возможности:"}
            {lang === "en" && "Additional Features:"}
            {lang === "uz" && "Qo'shimcha Imkoniyatlar:"}
          </h4>
          <ul>
            {content?.additionalList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="azs-safety">
          <h4>
            {lang === "ru" && "Системы безопасности:"}
            {lang === "en" && "Safety Systems:"}
            {lang === "uz" && "Xavfsizlik Tizimlari:"}
          </h4>
          <p>{content?.safetyDesc}</p>
          <p><strong>{content?.lowLevel}</strong></p>
          <p className="azs-automation-note">
            <em>{content?.automationNote}</em>
          </p>
        </div>

        <div className="azs-services">
          <h4>
            {lang === "ru" && "Дополнительные услуги:"}
            {lang === "en" && "Additional Services:"}
            {lang === "uz" && "Qo'shimcha Xizmatlar:"}
          </h4>
          <p>{content?.servicesDesc}</p>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="azs-description">
        <h3>
          {lang === "ru" && "БЛОЧНАЯ АВТОЗАПРАВОЧНАЯ СТАНЦИЯ (Блочная АЗС, БАЗС)"}
          {lang === "en" && "BLOCK-TYPE FUEL STATION (Block AZS, BAZS)"}
          {lang === "uz" && "BLOK TURI YOQILG‘I ZAPRAVKASI (Blok AZS, BAZS)"}
        </h3>
        <p>{content?.desc}</p>

        <div className="azs-advantages">
          <h4>
            {lang === "ru" && "Преимущества"}
            {lang === "en" && "Advantages"}
            {lang === "uz" && "Afzalliklar"}
          </h4>
          <ol>
            {content?.advantagesList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Documents */}
      <section className="azs-documents">
        <h3>
          {lang === "ru" && "Документы:"}
          {lang === "en" && "Documents:"}
          {lang === "uz" && "Hujjatlar:"}
        </h3>
        <ul>
          {content?.documentsList?.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AzsStationPage;