import React, { useEffect, useState } from "react";
import {
  User,
  Phone,
  MessageCircle,
  Send,
  Star,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { FiX } from "react-icons/fi";

// Tillarga mos matnlar
const translations = {
  en: {
    title: "Contact Us",
    subtitle: "Your feedback is important to us. Leave a message!",
    nameLabel: "Full Name *",
    namePlaceholder: "Enter your full name",
    phoneLabel: "Phone Number *",
    phonePlaceholder: "+998 90 123 45 67",
    telegramLabel: "Telegram Username",
    telegramPlaceholder: "username (without @)",
    ratingLabel: "Rate Us",
    descriptionLabel: "Message *",
    descriptionPlaceholder: "Write your message or question...",
    submitButton: "Send Message",
    submitting: "Sending...",
    backButton: "Back",
    successTitle: "Message Sent!",
    successText: "Your message has been successfully sent. We will contact you soon.",
    newMessageButton: "Send New Message",
    errorToast: "Please fill in all required fields!",
    successToast: "Message sent successfully!",
    errorApiToast: "An error occurred while sending the message!",
  },
  ru: {
    title: "Свяжитесь с нами",
    subtitle: "Ваше мнение важно для нас. Оставьте сообщение!",
    nameLabel: "Имя и фамилия *",
    namePlaceholder: "Введите ваше полное имя",
    phoneLabel: "Номер телефона *",
    phonePlaceholder: "+998 90 123 45 67",
    telegramLabel: "Имя пользователя в Telegram",
    telegramPlaceholder: "имя пользователя (без @)",
    ratingLabel: "Оцените нас",
    descriptionLabel: "Сообщение *",
    descriptionPlaceholder: "Напишите ваше сообщение или вопрос...",
    submitButton: "Отправить сообщение",
    submitting: "Отправка...",
    backButton: "Назад",
    successTitle: "Сообщение отправлено!",
    successText: "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
    newMessageButton: "Отправить новое сообщение",
    errorToast: "Пожалуйста, заполните все обязательные поля!",
    successToast: "Сообщение успешно отправлено!",
    errorApiToast: "Произошла ошибка при отправке сообщения!",
  },
  uz: {
    title: "Biz bilan bog'laning",
    subtitle: "Sizning fikr-mulohazalaringiz biz uchun muhim. Xabar qoldiring!",
    nameLabel: "Ism-familiya *",
    namePlaceholder: "To'liq ismingizni kiriting",
    phoneLabel: "Telefon raqami *",
    phonePlaceholder: "+998 90 123 45 67",
    telegramLabel: "Telegram username",
    telegramPlaceholder: "username (@ belgisisiz)",
    ratingLabel: "Baholang",
    descriptionLabel: "Xabar matni *",
    descriptionPlaceholder: "Sizning xabaringiz yoki savolingizni yozing...",
    submitButton: "Xabar yuborish",
    submitting: "Yuborilmoqda...",
    backButton: "Orqaga",
    successTitle: "Xabar yuborildi!",
    successText: "Sizning xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.",
    newMessageButton: "Yangi xabar yuborish",
    errorToast: "Iltimos, barcha majburiy maydonlarni to'ldiring!",
    successToast: "Xabar muvaffaqiyatli yuborildi!",
    errorApiToast: "Xabar yuborishda xatolik yuz berdi!",
  },
};

const ContactForm = ({ lang = "uz" }) => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    name: "",
    phone: "",
    telegram: "",
    description: "",
    rating: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // Tanlangan tilga mos matnlarni olish
  const t = translations[lang] || translations.uz;

  // To top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!feedback.name || !feedback.phone || !feedback.description) {
      showToast(t.errorToast, "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const botToken = "8158047965:AAFDYM1-dKX6_CeZJAsH8AimlQisbFQ1DYI";
      const chatId = "-4905893482";
      const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      const messageText = `
                🆕 *${lang === "en" ? "New Customer Message!" : lang === "ru" ? "Новое сообщение от клиента!" : "Yangi mijoz xabari!"}*
                
                👤 *${t.nameLabel.replace(" *", "")}:* ${feedback.name}
                📞 *${t.phoneLabel.replace(" *", "")}:* ${feedback.phone}
                ${feedback.telegram ? `📱 *${t.telegramLabel}:* @${feedback.telegram}` : ""}
                ⭐ *${t.ratingLabel}:* ${feedback.rating}/5
                
                📝 *${t.descriptionLabel.replace(" *", "")}:*
                ${feedback.description}
                
                ⏰ *${lang === "en" ? "Date" : lang === "ru" ? "Дата" : "Sana"}:* ${new Date().toLocaleString(
        lang === "en" ? "en-US" : lang === "ru" ? "ru-RU" : "uz-UZ"
      )}
            `.trim();

      const response = await fetch(telegramApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        showToast(t.successToast, "success");
        setIsSubmitted(true);
        setFeedback({
          name: "",
          phone: "",
          telegram: "",
          description: "",
          rating: 5,
        });
      } else {
        throw new Error("Telegram API error");
      }
    } catch (error) {
      showToast(t.errorApiToast, "error");
      console.error("Error sending message to Telegram:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setFeedback((prev) => ({
      ...prev,
      rating,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="sms-container">
        <div className="sms-success-page">
          <div className="sms-success-icon">
            <CheckCircle size={80} />
          </div>
          <h2 className="sms-success-title">{t.successTitle}</h2>
          <p className="sms-success-text">{t.successText}</p>
          <button
            className="sms-btn sms-btn-secondary"
            onClick={() => setIsSubmitted(false)}
          >
            {t.newMessageButton}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sms-container">
      {toast.show && (
        <div className={`sms-toast sms-toast-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <div className="sms-form-wrapper">
        <button className="sms-close" onClick={() => navigate("/")}>
          <FiX size={24} />
        </button>

        <div className="sms-header">
          <h1 className="sms-title">{t.title}</h1>
          <p className="sms-subtitle">{t.subtitle}</p>
        </div>

        <div className="sms-form">
          <div className="sms-form-group">
            <label className="sms-label">
              <User size={20} />
              {t.nameLabel}
            </label>
            <input
              type="text"
              name="name"
              value={feedback.name}
              onChange={handleInputChange}
              className="sms-input"
              placeholder={t.namePlaceholder}
              required
            />
          </div>

          <div className="sms-form-group">
            <label className="sms-label">
              <Phone size={20} />
              {t.phoneLabel}
            </label>
            <input
              type="tel"
              name="phone"
              value={feedback.phone}
              onChange={handleInputChange}
              className="sms-input"
              placeholder={t.phonePlaceholder}
              required
            />
          </div>

          <div className="sms-form-group">
            <label className="sms-label">
              <MessageCircle size={20} />
              {t.telegramLabel}
            </label>
            <input
              type="text"
              name="telegram"
              value={feedback.telegram}
              onChange={handleInputChange}
              className="sms-input"
              placeholder={t.telegramPlaceholder}
            />
          </div>

          <div className="sms-form-group">
            <label className="sms-label">
              <Star size={20} />
              {t.ratingLabel}
            </label>
            <div className="sms-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`sms-star ${star <= feedback.rating ? "sms-star-active" : ""
                    }`}
                  onClick={() => handleRatingChange(star)}
                >
                  <Star size={24} />
                </button>
              ))}
            </div>
          </div>

          <div className="sms-form-group">
            <label className="sms-label">
              <MessageCircle size={20} />
              {t.descriptionLabel}
            </label>
            <textarea
              name="description"
              value={feedback.description}
              onChange={handleInputChange}
              className="sms-textarea"
              placeholder={t.descriptionPlaceholder}
              rows="5"
              required
            />
          </div>
          <div className="description_btn">
            <button onClick={() => navigate(-1)} className="description_button">
              {t.backButton}
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className={`sms-btn sms-btn-primary ${isSubmitting ? "sms-btn-loading" : ""
                }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="sms-spinner"></div>
                  {t.submitting}
                </>
              ) : (
                <>
                  <Send size={20} />
                  {t.submitButton}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;