import React from "react";
import "./ConstructionStages.css";

export default function ConstructionStages() {
  return (
    <div className="stages">
      <div className="stages-container">
        <h2 className="stages-title">ЭТАПЫ СТРОИТЕЛЬСТВА ОБЪЕКТА</h2>

        <div className="stages-grid">
          {/* Проектирование */}
          <div className="stage-item">
            <h3 className="stage-heading">ПРОЕКТИРОВАНИЕ</h3>
            <p className="stage-text">
              На все горизонтальные резервуары в нашем КБ есть готовые чертежи
              КМД, которые всегда дорабатываются с учетом требований Заказчика.
            </p>
          </div>

          {/* Производство */}
          <div className="stage-item">
            <h3 className="stage-heading">ПРОИЗВОДСТВО</h3>
            <p className="stage-text">
              Сборка резервуара РГС осуществляется из вальцованных обечаек на
              сварочном манипуляторе в автоматическом режиме. Все сварные
              соединения выполняются встык, согласно требованиям ГОСТ
              17032-2010.
            </p>
          </div>

          {/* Окраска */}
          <div className="stage-item">
            <h3 className="stage-heading">ОКРАСКА</h3>
            <p className="stage-text">
              Выполняется с предварительной пескоструйной обработкой,
              обезжириванием и обеспыливанием поверхности в специальной малярной
              камере с контролем температуры и влажности воздуха.
            </p>
          </div>

          {/* Транспортировка */}
          <div className="stage-item">
            <h3 className="stage-heading">ТРАНСПОРТИРОВКА</h3>
            <p className="stage-text">
              Автотранспортом или ж/д транспортом с собственных подъездных
              путей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
