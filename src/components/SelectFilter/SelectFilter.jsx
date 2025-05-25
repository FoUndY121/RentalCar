import { useState } from "react";
import css from "../Filter/Filter.module.css";

const SelectFilter = ({ label, name, value, options, onChange, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.labelWrap}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>

      <div className={`${css.selectWrapper} ${isOpen ? css.open : ""}`}>
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className={name === "brand" ? css.checkBrand : css.checkPrice}
          id={id}
        >
          <option value="">
            Choose {name === "brand" ? "a brand" : "a price"}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectFilter;
