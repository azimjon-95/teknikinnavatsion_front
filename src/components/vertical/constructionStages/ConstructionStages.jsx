import React from "react";
import "./ConstructionStages.css";

export default function ConstructionStages() {
  return (
    <div className="stages">
      <div className="stages-container">
        <h2 className="stages-title">Этапы строительства объекта</h2>

        <div className="stages-grid">
          {/* Проектирование */}
          <div className="stage-item">
            <h3 className="stage-heading">Проектирование резервуаров</h3>
            <p className="stage-text">
              разработка проекта КМ, чертежей КМД, документации для монтажа,
              антикоррозийной обработки и теплоизоляции
            </p>
          </div>

          {/* Производство */}
          <div className="stage-item">
            <h3 className="stage-heading">
              Производство резервуаров на заводе
            </h3>
            <p className="stage-text">
              полистовым способом или методом рулонирования
            </p>
          </div>

          {/* Окраска */}
          <div className="stage-item">
            <h3 className="stage-heading">Доставка металлоконструкций</h3>
            <p className="stage-text">
              авто или ж/д транспортом на площадку строительства
            </p>
          </div>

          {/* Транспортировка */}
          <div className="stage-item">
            <h3 className="stage-heading">Монтаж резервуаров</h3>
            <p className="stage-text">
              на площадке, антикоррозийная обработка и теплоизоляция
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
