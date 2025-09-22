import React, { useState } from 'react';
import { Link } from "react-router-dom";

import img1 from '../../assets/cards/01.jpg';
import img2 from '../../assets/cards/02.jpg';
import img3 from '../../assets/cards/03.jpg';
import img4 from '../../assets/cards/04.jpg';
import img5 from '../../assets/cards/05.jpg';
import img6 from '../../assets/cards/06.jpg';
import img7 from '../../assets/cards/07.jpg';
import img8 from '../../assets/cards/08.jpg';
import img9 from '../../assets/cards/09.jpg';
import img10 from '../../assets/cards/10.jpg';
import img11 from '../../assets/cards/11.jpg';
import img12 from '../../assets/cards/12.jpg';
import img13 from '../../assets/cards/13.jpg';
import './card.css';

export default function FuelStationCards({ lang = "ru", state }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const products = [
        {
            id: 1,
            image: img1,
            titles: {
                ru: "Простой и быстрый, подразумевает услуги, связанные с газом.",
                en: "Simple and fast, implies gas-related services.",
                uz: "Oddiy va tezkor, gaz bilan bog'liq xizmatlarni anglatadi.",
            },
        },
        {
            id: 2,
            image: img2,
            titles: {
                ru: "Короткое и эффективное название для топлива.",
                en: "Short and effective name for fuel.",
                uz: "Yoqilg'i uchun qisqa va samarali nom.",
            },
        },
        {
            id: 3,
            image: img3,
            titles: {
                ru: "Указывает на автоматический сервис, легко запоминается.",
                en: "Indicates automated service, easily memorable.",
                uz: "Avtomatik xizmatni ko'rsatadi, oson esda qoladi.",
            },
        },
        {
            id: 4,
            image: img4,
            titles: {
                ru: "Подразумевает роботизацию и танки, создает современное ощущение.",
                en: "Implies robotization and tanks, creates a modern feel.",
                uz: "Robotizatsiyani va tanklarni anglatib, zamonaviy his qoldiradi.",
            },
        },
        {
            id: 5,
            image: img5,
            titles: {
                ru: "Короткое, современное и уникальное.",
                en: "Short, modern, and unique.",
                uz: "Qisqa, zamonaviy va o'ziga xos.",
            },
        },
        {
            id: 6,
            image: img6,
            titles: {
                ru: "Означает чистоту и простоту, может быть связано с инвестициями.",
                en: "Denotes cleanliness and simplicity, may be related to investments.",
                uz: "Toza va soddalikni anglatib, investitsiya bilan bog'liq bo'lishi mumkin.",
            },
        },
        {
            id: 7,
            image: img7,
            titles: {
                ru: "Отражает местный колорит, в краткой форме.",
                en: "Reflects local character, in a concise form.",
                uz: "Mahalliy xususiyatni aks ettirib, qisqa shaklda.",
            },
        },
        {
            id: 8,
            image: img8,
            titles: {
                ru: "Название, отражающее современность и элегантность.",
                en: "A name that reflects modernity and elegance.",
                uz: "Zamonaviy va nafislikni ko'rsatuvchi nom.",
            },
        },
        {
            id: 9,
            image: img9,
            titles: {
                ru: "Означает быстрый и современный топливный сервис.",
                en: "Denotes a fast and modern fuel service.",
                uz: "Tez va zamonaviy yoqilg'i xizmatini anglatadi.",
            },
        },
        {
            id: 10,
            image: img10,
            titles: {
                ru: "Указывает на экологичные танки, соответствует современному дизайну.",
                en: "Indicates eco-friendly tanks, aligns with modern design.",
                uz: "Ekologik toza tanklarni ko'rsatib, zamonaviy dizayn bilan mos.",
            },
        },
        {
            id: 11,
            image: img11,
            titles: {
                ru: "Указывает на экологичные танки, соответствует современному дизайну.",
                en: "Indicates eco-friendly tanks, aligns with modern design.",
                uz: "Ekologik toza tanklarni ko'rsatib, zamonaviy dizayn bilan mos.",
            },
        },
        {
            id: 12,
            image: img12,
            titles: {
                ru: "Короткое, современное и уникальное.",
                en: "Short, modern, and unique.",
                uz: "Qisqa, zamonaviy va o'ziga xos.",
            },
        },
        {
            id: 13,
            image: img13,
            titles: {
                ru: "Указывает на автоматический сервис, легко запоминается.",
                en: "Indicates automated service, easily memorable.",
                uz: "Avtomatik xizmatni ko'rsatadi, oson esda qoladi.",
            },
        },
    ];

    const translations = {
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
        <div style={{ borderRadius: state !== "nane" && "20px" }} className="cards-container">
            {
                state !== "none" &&
                <div style={{ marginBottom: "35px" }} className="bez-header-bottom">
                    {translations[lang].navLinks.map((link, index) => (
                        <Link key={index} to={`/${lang}/${link.path}`}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            }
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