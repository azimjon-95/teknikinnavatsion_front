import React, { useState } from 'react';
import { Link } from "react-router-dom";

import img1 from '../../assets/kazs/kazs1.png';
import img2 from '../../assets/kazs/kazs2.png';
import img3 from '../../assets/kazs/kazs3.png';
import img4 from '../../assets/kazs/kazs4.png';
import img5 from '../../assets/kazs/kazs5.png';
import img6 from '../../assets/kazs/kazs6.png';
import img7 from '../../assets/kazs/kazs7.png';
import img8 from '../../assets/kazs/kazs8.png';
import img9 from '../../assets/kazs/kazs9.png';
// import './card.css';

export default function KazsSlide({ lang = "ru" }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const products = [
        {
            id: 1,
            image: img1,
            titles: {
                ru: "Маленький Портативный Топливный Дозатор",
                en: "Small Portable Fuel Dispenser",
                uz: "Kichik Portativ Yoqilg'i Dispenseri",
            },
        },
        {
            id: 2,
            image: img2,
            titles: {
                ru: "Модульная Топливная Станция",
                en: "Modular Fuel Station",
                uz: "Modulyar Yoqilg'i Stansiyasi",
            },
        },
        {
            id: 3,
            image: img3,
            titles: {
                ru: "Контейнерный Топливный Бак",
                en: "Container-Type Fuel Tank",
                uz: "Konteyner Tipidagi Yoqilg'i Tanki",
            },
        },
        {
            id: 4,
            image: img4,
            titles: {
                ru: "Промышленный Топливный Дозатор",
                en: "Industrial Fuel Dispenser",
                uz: "Industrial Yoqilg'i Dispenseri",
            },
        },
        {
            id: 5,
            image: img5,
            titles: {
                ru: "Мобильный Топливный Модуль",
                en: "Mobile Fuel Module",
                uz: "Ko'chma Yoqilg'i Moduli",
            },
        },
        {
            id: 6,
            image: img6,
            titles: {
                ru: "Электрический Топливный Бак",
                en: "Electric Fuel Tank",
                uz: "Elektr Yoqilg'i Tanki",
            },
        },
        {
            id: 7,
            image: img7,
            titles: {
                ru: "Зимняя Топливная Станция",
                en: "Winter Fuel Station",
                uz: "Qishki Yoqilg'i Stansiyasi",
            },
        },
        {
            id: 8,
            image: img8,
            titles: {
                ru: "Компактный Топливный Насос",
                en: "Compact Fuel Pump",
                uz: "Kompakt Yoqilg'i Nasosi",
            },
        },
        {
            id: 9,
            image: img9,
            titles: {
                ru: "Автоматизированный Топливный Модуль",
                en: "Automated Fuel Module",
                uz: "Avtomatlashtirilgan Yoqilg'i Moduli",
            },
        }
    ];

    const translations = {
        ru: {
            navLinks: [
                { label: "Коммерческое предложение на (АЗС)", path: "azs" },
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
                { label: "Tijorat taklifi (KAZS)", path: "kazs" },
                { label: "Blokli avtoyog' quyish shaxobchasi (BAZS)", path: "bazs" },
            ],
            imageAlt: "Avtoyog' quyish shaxobchasi kartasi {id}",
            modalImageAlt: "Kartaning kattalashtirilgan ko'rinishi",
            closeButtonAria: "Modal oynani yopish",
        },
    };

    const duplicatedProducts = [...products, ...products];

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div style={{ borderRadius: "20px" }} className="cards-container">

            <div className="cards-wrapper">
                <div className="cards-grid">
                    {duplicatedProducts.map((product, index) => (
                        <div key={`${product.id}-${index}`} className="cards-item">
                            <div className="cards-image-container" onClick={() => openModal(product.image)}>
                                <img
                                    src={product.image}
                                    alt={translations[lang].imageAlt.replace("{id}", product.id)}
                                    className="cards-image"
                                />
                            </div>
                            <div className="cards-content">
                                <h3 className="cards-title">{product.titles[lang]}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button
                            onClick={closeModal}
                            className="modal-close-button"
                            aria-label={translations[lang].closeButtonAria}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt={translations[lang].modalImageAlt}
                            className="modal-image"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}