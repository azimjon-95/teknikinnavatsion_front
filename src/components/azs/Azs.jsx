import React from 'react';
import img from '../../assets/cards/11.jpg';
import './style.css';
import FuelStationCards from './FuelStationCards';

const GasStationsPage = ({ lang = "ru" }) => {
    const ru = {
        title: "Строительство и монтаж оборудования АЗС",
        description: "Современная автозаправочная станция представляет собой комплекс оборудования, с применением высокотехнологичных средств автоматизации и передовых информационных технологий. Проектирование, строительство и поставка оборудования для функционирования АЗС – задачи, которые рекомендуется доверять специализированным компаниям, с большим опытом работы в данной сфере. Наиболее рентабельными АЗС, согласно статистике, считаются станции, расположенные в пределах города, где наблюдается максимальное скопление потребителей. Но при этом заправочные объекты также рекомендуется располагать на крупных автотрассах и туристических маршрутах, с большой проходимостью автотранспорта. Строительство АЗС можно реализовывать недалеко от перекрестков или на выезде из города. По статистике, 10 % продаж топливных ресурсов приходятся именно на АЗС, работающих на трассах.",
        name: "Vengo / OOO.TEKNIK INNAVATSION",
        volume: "Основные этапы строительства АЗС: оформление исходно-разрешительной документации (градостроительный план участка, инженерно-геологические изыскания, инженерно-геодезические изыскания, согласование технического задания с заказчиком); проектирование автозаправочной станции; согласование проекта АЗС с Заказчиком и получение разрешения на возведение; заказ стройматериалов и сопутствующего оборудования технологической части; изготовление отдельных конструкций строений на специализированных предприятиях; монтаж металлоконструкций, оборудования АЗС и сооружений; благоустройство территории заправочного объекта; исполнение пуско-наладочных работ и сдача объекта Заказчику.",
        fuelTypes: [
            "Общестроительные работы",
            "Создание бетонных и ж/б конструкций",
            "Прокладка инженерных сетей и коммуникаций",
            "Установка резервуаров на фундамент",
            "Монтаж крепежных элементов в резервуарных конструкциях",
            "Покрытие внутренней и наружной поверхности резервуаров специальным антикоррозийным составом (по требованию Заказчика)",
            "Производство и монтаж технологических колодцев",
            "Прокладка контуров заземления заправочной станции"
        ],
        features: [
            "Строительство площадки автоцистерны",
            "Поставка и монтаж устройств заземления АЦ (УЗА)",
            "Поставка и монтаж опор освещения для площадки автоцистерны",
            "Производство и монтаж металлоконструкций для заправочных островков",
            "Поставка и возведение бетонных лотков для трубопроводов, проходящих под проезжей частью заправочного объекта",
            "Монтаж технологических трубопроводов, выполненных из металла и пластика отечественного и импортного производства: деаэрации, сливного, подачи топлива к ТРК, очистных сооружений, аварийного пролива",
            "Поставка и монтаж технологического оборудования для резервуаров",
            "Поставка и монтаж очистных сооружений"
        ],
        safety: "Прокладка труб для электрокабелей ТРК, наружного освещения, очистных сооружений и т.д.; Производство и монтаж электрических шкафов в операторской заправочной станции; Подключение кабелей управления к оборудованию АЗС; Поставка, монтаж и пуско-наладка ТРК; Поставка, монтаж и пуско-наладка очистных сооружений; Поставка, монтаж и пуско-наладка систем управления заправочного объекта; Подготовка исполнительной технической документации. В соответствии с требованиями безопасности и норм.",
        control: "При обращении в нашу компанию по вопросу монтажа оборудования АЗС, наши специалисты, в первую очередь, запрашивают проект (при его отсутствии происходит схематичное согласование технических решений с заказчиком), после проверки которого выдается рекомендация по комплектации и методике монтажа, позволяющей эффективно выполнить поставленные задачи, при этом максимально сэкономить финансовые средства. Затем в проект вносятся соответствующие изменения, выполняется поставка и монтаж оборудования АЗС.",
        automation: "В компании «Vengo» работы по монтажу оборудования АЗС выполняет квалифицированный персонал, имеющий все необходимые допуски на проведение такого рода работ. Оборудование, представленное нашей компанией в широчайшем ассортименте, позволит подобрать оптимальную комплектацию для любой заправочной станции, независимо от ее функционального назначения и технической сложности.",
        services: "OOO.TEKNIK INNAVATSION – специализированная компания с большим опытом в проектировании, строительстве и поставке оборудования для АЗС.",
        image: img,
        documents: [
            "Градостроительный план участка",
            "Инженерно-геологические изыскания",
            "Инженерно-геодезические изыскания",
            "Согласование технического задания с заказчиком",
            "Проект АЗС и разрешение на возведение",
            "Исполнительная техническая документация"
        ],
        // New translations for static JSX strings
        sectionDescription: "Описание",
        sectionTechnicalSpecs: "Основные этапы строительства",
        sectionFeatures: "Основные работы",
        sectionSafetyControl: "Безопасность и монтаж",
        sectionAdditionalServices: "Дополнительные услуги",
        sectionDocuments: "Документы",
        labelVolume: "Этапы строительства:",
        labelFuelTypes: "Строительные работы (часть 1):",
        labelSafetySystem: "Система безопасности:",
        labelLevelControl: "Контроль и монтаж:",
        labelAutomation: "Автоматизация и компания:"
    };

    const en = {
        title: "Construction and Installation of AZS Equipment",
        description: "A modern gas station is a complex of equipment using high-tech automation tools and advanced information technologies. Design, construction, and supply of equipment for AZS operation are tasks that should be entrusted to specialized companies with extensive experience in this field. According to statistics, the most profitable AZS are stations located within the city, where there is a maximum concentration of consumers. However, refueling facilities are also recommended to be placed on major highways and tourist routes with high traffic of vehicles. AZS construction can be carried out near intersections or at the city exit. According to statistics, 10% of fuel resource sales come from AZS operating on highways.",
        name: "Vengo / OOO.TEKNIK INNAVATSION",
        volume: "Main stages of AZS construction: preparation of initial permitting documentation (urban planning site plan, engineering-geological surveys, engineering-geodetic surveys, agreement of technical specifications with the customer); design of the gas station; agreement of the AZS project with the Customer and obtaining permission for construction; ordering building materials and related technological equipment; manufacturing of individual building structures at specialized enterprises; installation of metal structures, AZS equipment, and facilities; landscaping of the refueling facility area; performance of commissioning works and handover of the facility to the Customer.",
        fuelTypes: [
            "General construction works",
            "Creation of concrete and reinforced concrete structures",
            "Laying of engineering networks and communications",
            "Installation of tanks on the foundation",
            "Installation of fastening elements in tank structures",
            "Coating of the inner and outer surface of tanks with a special anti-corrosion compound (at the Customer's request)",
            "Production and installation of technological wells",
            "Laying of grounding circuits for the gas station"
        ],
        features: [
            "Construction of the tanker platform",
            "Supply and installation of grounding devices for TC (UZA)",
            "Supply and installation of lighting supports for the tanker platform",
            "Production and installation of metal structures for fueling islands",
            "Supply and construction of concrete trays for pipelines passing under the roadway of the refueling facility",
            "Installation of technological pipelines made of domestic and imported metal and plastic: deaeration, drain, fuel supply to TRK, treatment facilities, emergency spill",
            "Supply and installation of technological equipment for tanks",
            "Supply and installation of treatment facilities"
        ],
        safety: "Laying of pipes for TRK electrical cables, outdoor lighting, treatment facilities, etc.; Production and installation of electrical cabinets in the gas station operator's room; Connection of control cables to AZS equipment; Supply, installation, and commissioning of TRK; Supply, installation, and commissioning of treatment facilities; Supply, installation, and commissioning of refueling facility control systems; Preparation of executive technical documentation. In accordance with safety requirements and standards.",
        control: "When contacting our company regarding the installation of AZS equipment, our specialists first request the project (if absent, a schematic agreement of technical solutions with the customer occurs), after checking which a recommendation is issued on the configuration and installation method, allowing effective execution of the tasks while maximizing financial savings. Then, appropriate changes are made to the project, supply and installation of AZS equipment is performed.",
        automation: "In the 'Vengo' company, installation works for AZS equipment are performed by qualified personnel with all necessary permits for such works. The equipment presented by our company in the widest assortment will allow selecting the optimal configuration for any refueling station, regardless of its functional purpose and technical complexity.",
        services: "OOO.TEKNIK INNAVATSION – a specialized company with extensive experience in designing, constructing, and supplying equipment for AZS.",
        image: img,
        documents: [
            "Urban planning site plan",
            "Engineering-geological surveys",
            "Engineering-geodetic surveys",
            "Agreement of technical specifications with the customer",
            "AZS project and construction permit",
            "Executive technical documentation"
        ],
        // New translations for static JSX strings
        sectionDescription: "Description",
        sectionTechnicalSpecs: "Main Construction Stages",
        sectionFeatures: "Main Works",
        sectionSafetyControl: "Safety and Installation",
        sectionAdditionalServices: "Additional Services",
        sectionDocuments: "Documents",
        labelVolume: "Construction Stages:",
        labelFuelTypes: "Construction Works (Part 1):",
        labelSafetySystem: "Safety System:",
        labelLevelControl: "Control and Installation:",
        labelAutomation: "Automation and Company:"
    };

    const uz = {
        title: "AZS Uskunalarini Qurish va O'rnatish",
        description: "Zamonaviy avtozapravka stansiyasi yuqori texnologiyali avtomatlashtirish vositalari va ilg'or axborot texnologiyalaridan foydalangan holda jihozlar majmuasini tashkil etadi. AZS faoliyati uchun loyihalash, qurish va jihozlarni yetkazib berish – bu masalalar maxsus kompaniyalarga, ushbu sohada katta tajribaga ega bo'lganlarga topshirish tavsiya etiladi. Statistikaga ko'ra, eng foydali AZS shahar ichida, iste'molchilarning maksimal to'planishi bo'lgan joylarda joylashgan stansiyalardir. Biroq, zapravka ob'ektlarini shuningdek, avtomobillar harakati yuqori bo'lgan yirik avtotrafik yo'llar va turistik marshrutlarda joylashtirish tavsiya etiladi. AZS qurilishini chorrahalarga yaqin yoki shahar chiqishida amalga oshirish mumkin. Statistikaga ko'ra, yoqilg'i resurslarining 10% sotuvlari aynan trafiklarga ishlaydigan AZS larda bo'ladi.",
        name: "Vengo / OOO.TEKNIK INNAVATSION",
        volume: "AZS qurilishining asosiy bosqichlari: boshlang'ich ruxsatnomaviy hujjatlarni rasmiylashtirish (yer uchastkasining shaharsozlik rejasi, muhandislik-geologik izlanishlar, muhandislik-geodeziya izlanishlari, mijoz bilan texnik topshiriqni kelishish); avtozapravka stansiyasini loyihalash; AZS loyihasini Mijoz bilan kelishish va qurishga ruxsat olish; qurilish materiallari va texnologik qism bilan bog'liq jihozlarni buyurtma qilish; alohida inshoot konstruksiyalarini maxsus korxonalarda ishlab chiqarish; metallkonstruksiyalar, AZS jihozlari va inshootlarni o'rnatish; zapravka ob'ekti hududini abadlashtirish; ishga tushirish-nastroyka ishlari va ob'ektni Mijozga topshirish.",
        fuelTypes: [
            "Umumiy qurilish ishlari",
            "Beton va armali beton konstruksiyalarini yaratish",
            "Muhandislik tarmoqlari va aloqa vositalarini yotqizish",
            "Rezervuarlarni poydevorga o'rnatish",
            "Rezervuar konstruksiyalarida mahkamlash elementlarini o'rnatish",
            "Rezervuarlarning ichki va tashqi yuzasini maxsus korroziyaga qarshi qoplama bilan qoplash (Mijoz talabiga ko'ra)",
            "Texnologik quduqlarni ishlab chiqarish va o'rnatish",
            "Zapravka stansiyasi uchun yerlash konturlarini yotqizish"
        ],
        features: [
            "Avtotsisterana platformasini qurish",
            "ATS uchun yerlash qurilmalari (UZA) ni yetkazib berish va o'rnatish",
            "Avtotsisterana platformasi uchun yoritish ustunlarini yetkazib berish va o'rnatish",
            "Zapravka orollar uchun metallkonstruksiyalarni ishlab chiqarish va o'rnatish",
            "Zapravka ob'ekti yo'l qismidan o'tadigan quvurlar uchun beton o'rovlarni yetkazib berish va qurish",
            "O'zbekiston va xorijiy ishlab chiqarish metall va plastmassa quvurlardan tayyorlangan texnologik quvurlarni o'rnatish: deaeratsiya, tushirish, TRK ga yoqilg'i yetkazib berish, tozalash inshootlari, favqulodda quyilish",
            "Rezervuarlar uchun texnologik jihozlarni yetkazib berish va o'rnatish",
            "Tozalash inshootlarini yetkazib berish va o'rnatish"
        ],
        safety: "TRK elektr kabellari, tashqi yoritish, tozalash inshootlari va boshqalar uchun quvurlarni yotqizish; zapravka stansiyasi operator xonasida elektr shkaflarini ishlab chiqarish va o'rnatish; AZS jihozlariga boshqaruv kabellarini ulash; TRK ni yetkazib berish, o'rnatish va ishga tushirish-nastroyka; tozalash inshootlarini yetkazib berish, o'rnatish va ishga tushirish-nastroyka; zapravka ob'ekti boshqaruv tizimlarini yetkazib berish, o'rnatish va ishga tushirish-nastroyka; ijro etuvchi texnik hujjatlarni tayyorlash. Xavfsizlik talablari va normalarga muvofiq.",
        control: "AZS jihozlarini o'rnatish masalasi bo'yicha kompaniyamizga murojaat qilganda, mutaxassislarimiz birinchi navbatda loyihani so'raydilar (agar yo'q bo'lsa, mijoz bilan texnik yechimlarni sxematik kelishish sodir bo'ladi), tekshiruvdan so'ng konfiguratsiya va o'rnatish usuli bo'yicha tavsiya beriladi, bu vazifalarni samarali bajarishga imkon beradi va moliyaviy mablag'larni maksimal tejashga yordam beradi. Keyin loyihaga tegishli o'zgarishlar kiritiladi, AZS jihozlarini yetkazib berish va o'rnatish amalga oshiriladi.",
        automation: "«Vengo» kompaniyasida AZS jihozlarini o'rnatish ishlari barcha zarur ruxsatnomalarga ega malakali xodimlar tomonidan bajariladi. Kompaniyamiz tomonidan taqdim etilgan eng keng assortimentdagi jihozlar har qanday zapravka stansiyasi uchun, uning funktsional maqsadi va texnik murakkabligidan qat'i nazar, optimal konfiguratsiyani tanlashga imkon beradi.",
        services: "OOO.TEKNIK INNAVATSION – AZS loyihalash, qurish va jihozlarni yetkazib berishda katta tajribaga ega maxsus kompaniya.",
        image: img,
        documents: [
            "Yer uchastkasining shaharsozlik rejasi",
            "Muhandislik-geologik izlanishlar",
            "Muhandislik-geodeziya izlanishlari",
            "Mijoz bilan texnik topshiriqni kelishish",
            "AZS loyihasi va qurish ruxsati",
            "Ijro etuvchi texnik hujjatlar"
        ],
        // New translations for static JSX strings
        sectionDescription: "Tavsif",
        sectionTechnicalSpecs: "Qurilishning Asosiy Bosqichlari",
        sectionFeatures: "Asosiy Ishlar",
        sectionSafetyControl: "Xavfsizlik va O'rnatish",
        sectionAdditionalServices: "Qo'shimcha Xizmatlar",
        sectionDocuments: "Hujjatlar",
        labelVolume: "Qurilish Bosqichlari:",
        labelFuelTypes: "Qurilish Ishlari (1-qism):",
        labelSafetySystem: "Xavfsizlik Tizimi:",
        labelLevelControl: "Nazorat va O'rnatish:",
        labelAutomation: "Avtomatlashtirish va Kompaniya:"
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