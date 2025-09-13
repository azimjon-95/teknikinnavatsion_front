import React from 'react';
import img from '../../assets/kazs/kazs1.png';
import KazsSlide from './KazsSlide';
import './style.css';

const GasStationsPage = ({ lang = "ru" }) => {
    const ru = {
        title: "Автоматизированные Заправочные Станции (Контейнерные МАЗС)",
        description: "Контейнерные автозаправочные станции нового поколения (МАЗС) – это современные, высокоэффективные решения для организации заправки транспортных средств. Они разработаны с учетом передовых технологий, обеспечивая надежность, безопасность и удобство эксплуатации. Компактные и модульные конструкции позволяют быстро устанавливать станции в любых условиях, минимизируя затраты на строительство и обслуживание. Эти МАЗС оснащены автоматизированными системами управления, что делает их идеальным выбором для коммерческого использования в условиях высокой нагрузки.",
        name: "Коммерческие предложения КАЗС",
        volume: "Двустенный резервуар от 5м³ до 30м³",
        fuelTypes: [
            "1 вид, 1 рукава 1м³",
            "1 вид, 1 рукава 5м³",
            "1 вид, 1 рукава 10м³",
            "1 вид, 1 рукава 20м³",
            "1 вид, 1 рукава 30м³"
        ],
        features: [
            "Контейнерная МАЗС с автоматикой",
            "Композитные алюминиевые панели",
            "От 60м³ двустенный",
            "По ключ-картам, через оператора ПК"
        ],
        safety: "Через терминал оплаты наличные/карточкой",
        control: "GSM модем для дистанционного управления",
        automation: "Автоматическая система контроля топлива",
        services: "Уровнемер/Датчик контроля верхнего уровня с возможностью дистанционного мониторинга и управления через современные системы телеметрии.",
        image: img,
        documents: [
            "Паспорт на автозаправочную станцию",
            "Сертификат качества на автозаправочную станцию и резервуар",
            "Акт об испытании резервуара",
            "Инструкция по эксплуатации",
            "Сертификат ISO 9001-2015 Euro standard (Система менеджмента качества)"
        ],
        subDap: "Дополнительные услуги:",
        dap: "Доставка, пуско-наладочные работы, мерник, метрология, рекламный баннер, касса и мебель, гарантия 3 года, контрольные работы каждые 6 месяцев, все услуги бесплатны.",
        tex: "Технические характеристики:",
        isp: "Использование:",
        ob: "Преимущественно коммерческое",
        sis: "Системы безопасности:",
        coost: "В соответствии с НБП 111-98",
        sectionDescription: "Описание",
        sectionTechnicalSpecs: "Технические характеристики",
        sectionFeatures: "Улучшенные характеристики:",
        sectionSafetyControl: "Премиум возможности:",
        sectionAdditionalServices: "Контроль уровня топлива:",
        sectionDocuments: "Документы",
        labelVolume: "Объём МАЗС:",
        labelFuelTypes: "Виды топлива:",
    };

    const en = {
        title: "Automated Fuel Stations (Containerized MAZS)",
        description: "Next-generation containerized fuel stations (MAZS) are state-of-the-art, highly efficient solutions for vehicle refueling. Designed with cutting-edge technology, they ensure reliability, safety, and ease of operation. Their compact and modular design enables rapid installation in diverse environments, minimizing construction and maintenance costs. Equipped with automated control systems, these stations are the perfect choice for commercial applications under high-demand conditions.",
        name: "Commercial Fuel Station Offers",
        volume: "Double-walled tank from 5m³ to 30m³",
        fuelTypes: [
            "1 type, 1 hose 1m³",
            "1 type, 1 hose 5m³",
            "1 type, 1 hose 10m³",
            "1 type, 1 hose 20m³",
            "1 type, 1 hose 30m³"
        ],
        features: [
            "Containerized MAZS with automation",
            "Composite aluminum panels",
            "From 60m³ double-walled",
            "By key cards or via PC operator"
        ],
        safety: "Payment via cash/card terminal",
        control: "GSM modem for remote control",
        automation: "Automated fuel control system",
        services: "Level gauge/Upper level control sensor with remote monitoring and control via modern telemetry systems.",
        image: img,
        documents: [
            "Fuel station passport",
            "Quality certificate for fuel station and tank",
            "Tank test certificate",
            "Operating manual",
            "ISO 9001-2015 Euro standard certificate (Quality Management System)"
        ],
        subDap: "Additional services:",
        dap: "Delivery, commissioning, calibration, metrology, advertising banner, cash register and furniture, 3-year warranty, maintenance every 6 months, all services free of charge.",
        tex: "Technical Specifications:",
        isp: "Usage:",
        ob: "Primarily commercial",
        sis: "Safety Systems:",
        coost: "Compliant with NBP 111-98",
        sectionDescription: "Description",
        sectionTechnicalSpecs: "Technical Specifications",
        sectionFeatures: "Enhanced Features:",
        sectionSafetyControl: "Premium Features:",
        sectionAdditionalServices: "Fuel Level Monitoring:",
        sectionDocuments: "Documents",
        labelVolume: "MAZS Volume:",
        labelFuelTypes: "Fuel Types:",
    };

    const uz = {
        title: "Avtomatlashtirilgan Yoqilg‘i Stansiyalari (Konteynerli MAZS)",
        description: "Yangi avlod konteynerli yoqilg‘i stansiyalari (MAZS) – bu transport vositalarini yoqilg‘i bilan ta’minlash uchun zamonaviy va yuqori samarali yechimlar. Ular eng so‘nggi texnologiyalar asosida ishlab chiqilgan bo‘lib, ishonchlilik, xavfsizlik va foydalanish qulayligini ta’minlaydi. Ixcham va modulli konstruktsiyalar har qanday sharoitda tez o‘rnatish imkonini beradi, qurilish va xizmat ko‘rsatish xarajatlarini minimallashtiradi. Avtomatlashtirilgan boshqaruv tizimlari bilan jihozlangan bu stansiyalar yuqori talab sharoitlarida tijoriy foydalanish uchun ideal tanlovdir.",
        name: "Yoqilg‘i Stansiyalari Tijoriy Takliflari",
        volume: "Ikki devorli rezervuar 5m³ dan 30m³ gacha",
        fuelTypes: [
            "1 tur, 1 shlang 1m³",
            "1 tur, 1 shlang 5m³",
            "1 tur, 1 shlang 10m³",
            "1 tur, 1 shlang 20m³",
            "1 tur, 1 shlang 30m³"
        ],
        features: [
            "Avtomatlashtirilgan konteynerli MAZS",
            "Kompozit alyuminiy panellar",
            "60m³ dan ikki devorli",
            "Kalit kartalar yoki kompyuter operatori orqali"
        ],
        safety: "Naqd/pul kartasi orqali to‘lov terminali",
        control: "Masofadan boshqarish uchun GSM modem",
        automation: "Yoqilg‘ini avtomatik nazorat qilish tizimi",
        services: "Sath o‘lchagich/Yuqori sathni nazorat qilish sensori, zamonaviy telemetriya tizimlari orqali masofadan monitoring va boshqaruv imkoniyati.",
        image: img,
        documents: [
            "Yoqilg‘i stansiyasi pasporti",
            "Yoqilg‘i stansiyasi va rezervuar uchun sifat sertifikati",
            "Rezervuar sinov hujjati",
            "Foydalanish bo‘yicha qo‘llanma",
            "ISO 9001-2015 Yevro standarti sertifikati (Sifat boshqaruvi tizimi)"
        ],
        subDap: "Qo‘shimcha xizmatlar:",
        dap: "Yetkazib berish, ishga tushirish-ishlarni sozlash, o‘lchov, metrologiya, reklama banneri, kassa va mebel, 3 yil kafolat, har 6 oyda nazorat ishlari, barcha xizmatlar bepul.",
        tex: "Texnik xususiyatlar:",
        isp: "Foydalanish:",
        ob: "Asosan tijoriy",
        sis: "Xavfsizlik tizimlari:",
        coost: "NBP 111-98 ga muvofiq",
        sectionDescription: "Tavsif",
        sectionTechnicalSpecs: "Texnik xususiyatlar",
        sectionFeatures: "Yaxshilangan xususiyatlar:",
        sectionSafetyControl: "Premium imkoniyatlar:",
        sectionAdditionalServices: "Yoqilg‘i sathini nazorat qilish:",
        sectionDocuments: "Hujjatlar",
        labelVolume: "MAZS hajmi:",
        labelFuelTypes: "Yoqilg‘i turlari:",
    };

    const combinedStationsData = lang === "en" ? en : lang === "uz" ? uz : ru;

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
                            <h2 className="azs-info-name">{combinedStationsData.name}</h2>
                            <h3 className="azs-info-title">{combinedStationsData.sectionDescription}</h3>
                            <p className="azs-description">{combinedStationsData.description}</p>
                        </div>

                        <div className="azs-info-group">
                            <h3 className="azs-info-title">{combinedStationsData.sectionTechnicalSpecs}</h3>
                            <p><strong>{combinedStationsData.labelVolume}</strong> {combinedStationsData.volume}</p>
                            <p><strong>{combinedStationsData.isp}</strong> {combinedStationsData.ob}</p>
                            <p><strong>{combinedStationsData.sis}</strong> {combinedStationsData.coost}</p>
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
                            <p>{combinedStationsData.safety}</p>
                            <p>{combinedStationsData.control}</p>
                            <p>{combinedStationsData.automation}</p>
                        </div>

                        <div className="azs-info-group">
                            <h3 className="azs-info-title">{combinedStationsData.sectionAdditionalServices}</h3>
                            <p>{combinedStationsData.services}</p>
                        </div>

                        <div className="azs-info-group">
                            <h3 className="azs-info-title">{combinedStationsData.subDap}</h3>
                            <p>{combinedStationsData.dap}</p>
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
            <KazsSlide />
        </div>
    );
};

export default GasStationsPage;