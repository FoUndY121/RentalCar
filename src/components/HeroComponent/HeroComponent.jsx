import React from "react";
import s from "./HeroComponent.module.css";
function HeroComponent() {
  return (
    <div className={s.hero}>
      <div className={s.bg}>
        <div className={s.overlay}>
          <p className={s.title}>Find your perfect rental car</p>
          <p className={s.subTittle}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <div className={s.btn}>
            <button className={s.textBtn}>View Catalog</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
