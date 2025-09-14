import React from 'react';
import img from '../../assets/cards/07.jpg';
import './style.css';
import FuelStationCards from './FuelStationCards';

const GasStationsPage = ({ lang = "ru" }) => {
    const ru = {
        title: "Автоматизированные Заправочные Станции (Контейнерные МАЗС)",
        description: "Контейнерные МАЗС с контейнерами, обшитыми композитными алюминиевыми панелями, предназначенные преимущественно для коммерческого использования.",
        name: "DOKAN / КОРАБЛЬ / ADEM",
        volume: "Двустенный и одностенный резервуар с общим объёмом от 14м³ до 40м³ (DOKAN: от 14м³; КОРАБЛЬ: от 20 до 30м³; ADEM: от 20 до 40м³).",
        fuelTypes: [
            "DOKAN: 2 вида, 2 рукава, 14м³",
            "КОРАБЛЬ: 3 вида, 20м³, двустенный",
            "ADEM: 3 вида, 6 рукавов 20/30м³",
            "ADEM: 2 вида топлива, 8 рукавов 30м³, одностенный",
            "ADEM: 3 вида топлива, 4 рукава 40м³, одностенный"
        ],
        features: [
            "Самообслуживание Программа «СО» или «АДНС»",
            "Автоматический по ключам/картам",
            "Через оператора (пульт оператора ПК)",
            "Через терминал оплаты наличными/картой"
        ],
        safety: "В соответствии с НБП 111-98.",
        control: "Уровнемер/Датчик верхнего уровня.",
        automation: "Возможна установка автоматики и GSM модема для передачи на ПК уровень, объём, масса, температура, плотность топлива, установление лимитов для водителей, расход топлива",
        services: "Доставка, пульт управления, мерник, метрошток, рекламный баннер, касса и мебель, гарантия 3 года, контрольные работы проводятся каждые 6 месяцев, все услуги бесплатны.",
        image: img,
        documents: [
            "Паспорт на автозаправочную станцию",
            "Сертификат качества на автозаправочную станцию и резервуар",
            "Акт об испытании резервуара",
            "Инструкция по эксплуатации",
            "Сертификат ISO 9001-2015 Euro standard (Система менеджмента качества)"
        ],
        // New translations for static JSX strings
        sectionDescription: "Описание",
        sectionTechnicalSpecs: "Технические характеристики",
        sectionFeatures: "Особенности",
        sectionSafetyControl: "Безопасность и контроль",
        sectionAdditionalServices: "Дополнительные услуги",
        sectionDocuments: "Документы",
        labelVolume: "Объём МАЗС:",
        labelFuelTypes: "Виды топлива:",
        labelSafetySystem: "Система безопасности:",
        labelLevelControl: "Контроль уровня налива:",
        labelAutomation: "Автоматизация:"
    };

    const en = {
        title: "Automated Fuel Stations (Containerized MAZS)",
        description: "Containerized MAZS with containers clad in composite aluminum panels, primarily intended for commercial use.",
        name: "DOKAN / KORABL / ADEM",
        volume: "Double-walled and single-walled tanks with a total volume from 14m³ to 40m³ (DOKAN: from 14m³; KORABL: from 20 to 30m³; ADEM: from 20 to 40m³).",
        fuelTypes: [
            "DOKAN: 2 fuel types, 2 hoses, 14m³",
            "KORABL: 3 fuel types, 20m³, double-walled",
            "ADEM: 3 fuel types, 6 hoses, 20/30m³",
            "ADEM: 2 fuel types, 8 hoses, 30m³, single-walled",
            "ADEM: 3 fuel types, 4 hoses, 40m³, single-walled"
        ],
        features: [
            "Self-service program 'SO' or 'ADNS'",
            "Automatic operation via keys/cards",
            "Via operator (operator control panel)",
            "Via payment terminal with cash/card"
        ],
        safety: "In compliance with NBP 111-98.",
        control: "Level gauge/Upper level sensor.",
        automation: "Option to install automation and GSM modem for transmitting level, volume, weight, fuel temperature, density, setting driver limits, and fuel consumption to a PC.",
        services: "Delivery, control panel, measuring stick, metro rod, advertising banner, cash register and furniture, 3-year warranty, maintenance work performed every 6 months, all services are free.",
        image: img,
        documents: [
            "Passport for the fuel station",
            "Quality certificate for the fuel station and tank",
            "Tank test certificate",
            "Operating instructions",
            "ISO 9001-2015 Euro standard certificate (Quality Management System)"
        ],
        // New translations for static JSX strings
        sectionDescription: "Description",
        sectionTechnicalSpecs: "Technical Specifications",
        sectionFeatures: "Features",
        sectionSafetyControl: "Safety and Control",
        sectionAdditionalServices: "Additional Services",
        sectionDocuments: "Documents",
        labelVolume: "MAZS Volume:",
        labelFuelTypes: "Fuel Types:",
        labelSafetySystem: "Safety System:",
        labelLevelControl: "Level Control:",
        labelAutomation: "Automation:"
    };

    const uz = {
        title: "Avtomatlashtirilgan Yoqilg‘i Shoxobchalari (Konteynerli MAZS)",
        description: "Asosan tijorat maqsadlarida foydalanish uchun mo‘ljallangan, kompozit alyuminiy panellar bilan qoplangan konteynerli MAZS.",
        name: "DOKAN / KORABL / ADEM",
        volume: "Ikki devorli va bir devorli rezervuarlar, umumiy hajmi 14m³ dan 40m³ gacha (DOKAN: 14m³ dan; KORABL: 20 dan 30m³ gacha; ADEM: 20 dan 40m³ gacha).",
        fuelTypes: [
            "DOKAN: 2 turdagi yoqilg‘i, 2 shlang, 14m³",
            "KORABL: 3 turdagi yoqilg‘i, 20m³, ikki devorli",
            "ADEM: 3 turdagi yoqilg‘i, 6 shlang, 20/30m³",
            "ADEM: 2 turdagi yoqilg‘i, 8 shlang, 30m³, bir devorli",
            "ADEM: 3 turdagi yoqilg‘i, 4 shlang, 40m³, bir devorli"
        ],
        features: [
            "O‘z-o‘ziga xizmat ko‘rsatish dasturi 'SO' yoki 'ADNS'",
            "Kalitlar/kartalar orqali avtomatik ishlash",
            "Operator orqali (operator boshqaruv paneli)",
            "Naqd pul/karta bilan to‘lov terminali orqali"
        ],
        safety: "NBP 111-98 ga muvofiq.",
        control: "Sath o‘lchagich/Yuqori sath sensori.",
        automation: "Avtomatlashtirish va GSM modem o‘rnatish imkoniyati, kompyuterga sath, hajm, og‘irlik, yoqilg‘i harorati, zichligi, haydovchilar uchun limitlar belgilash va yoqilg‘i sarfini uzatish.",
        services: "Yetkazib berish, boshqaruv paneli, o‘lchov chizig‘i, metro shtok, reklama banneri, kassa va mebel, 3 yil kafolat, har 6 oyda nazorat ishlari, barcha xizmatlar bepul.",
        image: img,
        documents: [
            "Yoqilg‘i shoxobchasi uchun pasport",
            "Yoqilg‘i shoxobchasi va rezervuar sifat sertifikati",
            "Rezervuar sinov akti",
            "Foydalanish bo‘yicha yo‘riqnoma",
            "ISO 9001-2015 Euro standarti sertifikati (Sifat boshqaruv tizimi)"
        ],
        // New translations for static JSX strings
        sectionDescription: "Tavsif",
        sectionTechnicalSpecs: "Texnik Xususiyatlar",
        sectionFeatures: "Xususiyatlar",
        sectionSafetyControl: "Xavfsizlik va Nazorat",
        sectionAdditionalServices: "Qo'shimcha Xizmatlar",
        sectionDocuments: "Hujjatlar",
        labelVolume: "MAZS Hajmi:",
        labelFuelTypes: "Yoqilg‘i Turlari:",
        labelSafetySystem: "Xavfsizlik Tizimi:",
        labelLevelControl: "Sath Nazorati:",
        labelAutomation: "Avtomatlashtirish:"
    };

    const combinedStationsData = lang === "en" ? en : lang === "uz" ? uz : ru;
    const state = "none";

    return (
        <div className="azs-container">
            <div className="azs-station-card">
                <div className="azs-card-content">
                    <div className="azs-image-section">
                        <img
                            src={combinedStationsData.image}
                            alt={combinedStationsData.name}
                            className="azs-station-image"
                        />
                    </div>

                    <div className="azs-info-section">
                        <div className="azs-info-group">
                            <h3 className="azs-info-title">{combinedStationsData.sectionDescription}</h3>
                            <p className="azs-description">{combinedStationsData.description}</p>
                        </div>

                        <div className="azs-info-group">
                            <h3 className="azs-info-title">{combinedStationsData.sectionTechnicalSpecs}</h3>
                            <p><strong>{combinedStationsData.labelVolume}</strong> {combinedStationsData.volume}</p>
                            <p><strong>{combinedStationsData.labelFuelTypes}</strong></p>
                            <ul>
                                {combinedStationsData.fuelTypes.map((type, idx) => (
                                    <li key={idx}>{type}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="azs-info-group">
                            <h3 className="azs-info-title">{combinedStationsData.sectionFeatures}</h3>
                            <ul className="azs-features-list">
                                {combinedStationsData.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="azs-info-group">
                            <h3 className="azs-info-title">{combinedStationsData.sectionSafetyControl}</h3>
                            <p><strong>{combinedStationsData.labelSafetySystem}</strong> {combinedStationsData.safety}</p>
                            <p><strong>{combinedStationsData.labelLevelControl}</strong> {combinedStationsData.control}</p>
                            <p><strong>{combinedStationsData.labelAutomation}</strong> {combinedStationsData.automation}</p>
                        </div>

                        <div className="azs-info-group">
                            <h3 className="azs-info-title">{combinedStationsData.sectionAdditionalServices}</h3>
                            <p>{combinedStationsData.services}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="azs-documents-section">
                <h2 className="azs-documents-title">{combinedStationsData.sectionDocuments}</h2>
                <ul className="azs-documents-list">
                    {combinedStationsData.documents.map((doc, index) => (
                        <li key={index} className="azs-document-item">{doc}</li>
                    ))}
                </ul>
            </div>
            <FuelStationCards state={state} />
        </div>
    );
};

export default GasStationsPage;

