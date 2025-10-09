import React from 'react';
import img from '../../assets/cards/12.jpg';
import './style.css';
import FuelStationCards from './FuelStationCards';

const Mazs = ({ lang = "ru" }) => {
    const ru = {
        title: "Модульная Автозаправочная Станция (МАЗС)",
        description: "Современная автозаправочная станция представляет собой комплекс оборудования, с применением высокотехнологичных средств автоматизации и передовых информационных технологий. Проектирование, производство, поставка и установка оборудования для функционирования МАЗС – задачи, которые рекомендуется доверять специализированным компаниям, с большим опытом работы в данной сфере. Наиболее рентабельными МАЗС, согласно статистике, считаются станции, расположенные в пределах города, где наблюдается максимальное скопление потребителей. Но при этом заправочные объекты также рекомендуется располагать на крупных автотрассах и туристических маршрутах, с большой проходимостью автотранспорта.",
        name: "МАЗС",
        volume: "Двустенный или одностенный резервуар с общим объёмом от 5м³ до 60м³.",
        fuelTypes: [
            "2 вида топлива: 2 рукава, 12м³ до 40 м³",
            "2 вида топлива: 4 рукава, 12м³ до 40 м³",
            "3 вида топлива: 6 рукавов, 20м³ до 40 м³",
            "4 вида топлива: 8 рукавов, 20м³ до 40 м³"
        ],
        features: [
            "Оформление исходно-разрешительной документации (согласование территории по местоположению с МЧС, Кадастр, Промбезопасность, Нефтеинспекция, согласование технического задания с заказчиком)",
            "Проектирование автозаправочной станции",
            "Согласование проекта МАЗС с Заказчиком и получение разрешения на возведение",
            "Изготовление отдельных конструкций строений на специализированных предприятиях",
            "Монтаж металлоконструкций, оборудования МАЗС и сооружений",
            "Благоустройство территории заправочного объекта",
            "Исполнение пуско-наладочных работ и сдача объекта Заказчику"
        ],
        safety: "В соответствии с требованиями МЧС, Кадастр, Промбезопасность, Нефтеинспекция.",
        control: "Мерник 10 л, метршток 3 м.",
        automation: "При обращении в компанию по вопросу монтажа оборудования МАЗС, специалисты запрашивают проект, выдают рекомендацию по комплектации и методике монтажа, вносят изменения, выполняют поставку и монтаж. Работы выполняются квалифицированным персоналом с необходимыми допусками.",
        services: "Пожарный щит, мерник 10 л, метршток 3 м, реклама бренд, доставка, установка. В компании ООО «Teknik Innavatsion» представлено оборудование в широчайшем ассортименте для оптимальной комплектации.",
        image: img,
        documents: [
            "Калибровочная таблица",
            "Паспорт на автозаправочную станцию",
            "Акт об испытании резервуара",
            "Инструкция по эксплуатации",
            "Сертификат качества на автозаправочную станцию и резервуар",
            "Сертификат ISO 9001-2015 Euro standard (Система менеджмента качества)",
            "ШНК"
        ],
        // Static JSX strings
        sectionDescription: "Описание",
        sectionTechnicalSpecs: "Технические характеристики",
        sectionFeatures: "Основные этапы установки",
        sectionSafetyControl: "Безопасность и контроль",
        sectionAdditionalServices: "Дополнительные услуги",
        sectionDocuments: "Документы",
        labelVolume: "Объём МАЗС:",
        labelFuelTypes: "Виды топлива:",
        labelSafetySystem: "Система безопасности:",
        labelLevelControl: "Контроль уровня:",
        labelAutomation: "Автоматизация:"
    };

    const en = {
        title: "Modular Fuel Station (MAZS)",
        description: "A modern fuel station is a complex of equipment using high-tech automation tools and advanced information technologies. Design, production, supply, and installation of equipment for MAZS operation should be entrusted to specialized companies with extensive experience in this field. According to statistics, the most profitable MAZS are stations located within the city, where there is a maximum concentration of consumers. However, fuel facilities are also recommended to be placed on major highways and tourist routes with high traffic flow.",
        name: "MAZS",
        volume: "Double-walled or single-walled tank with a total volume from 5m³ to 60m³.",
        fuelTypes: [
            "2 fuel types: 2 hoses, 12m³ to 40m³",
            "2 fuel types: 4 hoses, 12m³ to 40m³",
            "3 fuel types: 6 hoses, 20m³ to 40m³",
            "4 fuel types: 8 hoses, 20m³ to 40m³"
        ],
        features: [
            "Preparation of initial permitting documentation (approval of the territory location with EMERCOM, Cadastre, Industrial Safety, Oil Inspectorate, agreement of technical specifications with the customer)",
            "Design of the fuel station",
            "Approval of the MAZS project with the Customer and obtaining permission for construction",
            "Manufacturing of individual building structures at specialized enterprises",
            "Installation of metal structures, MAZS equipment, and facilities",
            "Landscaping of the fuel facility area",
            "Commissioning works and handover of the facility to the Customer"
        ],
        safety: "In accordance with the requirements of EMERCOM, Cadastre, Industrial Safety, Oil Inspectorate.",
        control: "10 l measuring can, 3 m dipstick.",
        automation: "When contacting the company regarding MAZS equipment installation, specialists request the project, issue recommendations on configuration and installation method, make changes, perform supply and installation. Works are carried out by qualified personnel with necessary permits.",
        services: "Fire shield, 10 l measuring can, 3 m dipstick, brand advertising, delivery, installation. LLC 'Teknik Innavatsion' offers a wide range of equipment for optimal configuration.",
        image: img,
        documents: [
            "Calibration table",
            "Passport for the fuel station",
            "Tank test certificate",
            "Operating instructions",
            "Quality certificate for the fuel station and tank",
            "ISO 9001-2015 Euro standard certificate (Quality Management System)",
            "QR code"
        ],
        // Static JSX strings
        sectionDescription: "Description",
        sectionTechnicalSpecs: "Technical Specifications",
        sectionFeatures: "Main Installation Stages",
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
        title: "Modulli Avtozapravka Stansiyasi (MAZS)",
        description: "Zamonaviy avtozapravka stansiyasi yuqori texnologiyali avtomatlashtirish vositalari va ilg'or axborot texnologiyalaridan foydalangan holda jihozlar majmuasini tashkil etadi. MAZS ishlashi uchun jihozlarni loyihalash, ishlab chiqarish, yetkazib berish va o'rnatish – bu sohada katta tajribaga ega ixtisoslashgan kompaniyalarga topshirish tavsiya etiladigan vazifalar. Statistikaga ko'ra, eng foydali MAZS shahar ichida, iste'molchilarning maksimal to'planishi bo'lgan joylarda joylashgan stansiyalar hisoblanadi. Biroq, yoqilg'i ob'ektlarini katta avtomagistrallar va sayyohlik marshrutlarda, avtotransport oqimi yuqori bo'lgan joylarda joylashtirish ham tavsiya etiladi.",
        name: "MAZS",
        volume: "Ikki devorli yoki bir devorli rezervuar, umumiy hajmi 5m³ dan 60m³ gacha.",
        fuelTypes: [
            "2 turdagi yoqilg'i: 2 shlang, 12m³ dan 40 m³ gacha",
            "2 turdagi yoqilg'i: 4 shlang, 12m³ dan 40 m³ gacha",
            "3 turdagi yoqilg'i: 6 shlang, 20m³ dan 40 m³ gacha",
            "4 turdagi yoqilg'i: 8 shlang, 20m³ dan 40 m³ gacha"
        ],
        features: [
            "Boshlang'ich ruxsatnomaviy hujjatlarni rasmiylashtirish (joylashuv bo'yicha hududni FChS, Kadastr, Sanoat xavfsizligi, Neft inspeksiyasi bilan kelishish, mijoz bilan texnik topshiriqni kelishish)",
            "Avtozapravka stansiyasini loyihalash",
            "MAZS loyihasini Mijoz bilan kelishish va qurilishga ruxsat olish",
            "Maxsus korxonalarda alohida qurilish konstruktsiyalarini ishlab chiqarish",
            "Metall konstruktsiyalar, MAZS jihozlari va inshootlarni montajlash",
            "Zapravka ob'ekti hududini abadlashtirish",
            "Ishga tushirish va sozlash ishlari va ob'ektni Mijozga topshirish"
        ],
        safety: "FChS, Kadastr, Sanoat xavfsizligi, Neft inspeksiyasi talablariga muvofiq.",
        control: "10 l o'lchov idishi, 3 m metr shtox.",
        automation: "MAZS jihozlarini montajlash masalasida kompaniyaga murojaat qilganda, mutaxassislar loyihani so'raydilar, konfiguratsiya va montaj usuli bo'yicha tavsiyalar beradilar, o'zgarishlarni kiritadilar, yetkazib berish va montajni amalga oshiradilar. Ishlar kerakli ruxsatlarga ega malakali xodimlar tomonidan bajariladi.",
        services: "Yong'in qalqoni, 10 l o'lchov idishi, 3 m metr shtox, brend reklama, yetkazib berish, o'rnatish. «Teknik Innavatsion» MChJ har qanday funksional maqsad va texnik murakkablikdagi zapravka stansiyasi uchun optimal konfiguratsiyani tanlashga imkon beruvchi keng assortimentdagi jihozlarni taklif etadi.",
        image: img,
        documents: [
            "Kalirovka jadvali",
            "Avtozapravka stansiyasi uchun pasport",
            "Rezervuar sinov akti",
            "Ishlatish bo'yicha ko'rsatma",
            "Avtozapravka stansiyasi va rezervuar uchun sifat sertifikati",
            "ISO 9001-2015 Euro standarti sertifikati (Sifat menejmenti tizimi)",
            "QR kod"
        ],
        // Static JSX strings
        sectionDescription: "Tavsif",
        sectionTechnicalSpecs: "Texnik xususiyatlar",
        sectionFeatures: "O'rnatishning asosiy bosqichlari",
        sectionSafetyControl: "Xavfsizlik va nazorat",
        sectionAdditionalServices: "Qo'shimcha xizmatlar",
        sectionDocuments: "Hujjatlar",
        labelVolume: "MAZS hajmi:",
        labelFuelTypes: "Yoqilg'i turlari:",
        labelSafetySystem: "Xavfsizlik tizimi:",
        labelLevelControl: "Sath nazorati:",
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

export default Mazs;