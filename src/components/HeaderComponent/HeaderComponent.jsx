import React from "react";
import logo from "../../img/Logo.png";
import s from "./HeaderComponent.module.css";
function HeaderComponent() {
  return (
    <div>
      <div className={s.header}>
        <img src={logo} alt="Logo" className={s.nav} />
        <ul className={s.list}>
          <li className={s.item}>Home</li>
          <li className={s.item}>Catalog</li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
