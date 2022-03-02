import { useState } from "react";

import Button from "../button/Button";

import { capitalize } from "../../utils/functions";

import "./filters-styles.scss";

export const FilterInput = (props) => {
  const { placeholder } = props;

  return (
    <input
      className="filter-range-input"
      type="number"
      placeholder={placeholder}
    />
  );
};

const FilterRange = (props) => {
  const { heading } = props;
  const [isActive, setIsActive] = useState(false);

  const removeActiveClass = () => setIsActive(false);
  const toggleActiveClass = () => setIsActive(!isActive);

  return (
    <div className="select-box">
      <div className={`options-container ${isActive && "active"}`}>
        <div className="range-input-container">
          <FilterInput placeholder="From" />
          <span className="filter-bar" />
          <FilterInput placeholder="To" />
          <Button
            btnLabel="Apply"
            className="filter-range-btn"
            onClick={removeActiveClass}
          />
        </div>
      </div>
      <div onClick={toggleActiveClass} className="selected">
        {capitalize(heading)}
      </div>
    </div>
  );
};

export default FilterRange;
