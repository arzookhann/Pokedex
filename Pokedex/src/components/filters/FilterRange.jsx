import { useState } from "react";

import Button from "../button/Button";

import { capitalize } from "../../utils/functions";

import "./filters-styles.scss";

const FilterRange = (props) => {

  const { heading } = props;
  const [isActive, setIsActive] = useState(false);

  const removeActiveClass = () => setIsActive(false);
  const toggleActiveClass = () => setIsActive(!isActive);

  return (
    <div className="select-box">
      <div className={`options-container ${isActive && "active"}`}>
        <div className="range-input-container">
          <input
            className="filter-range-input"
            type="number"
            placeholder="From"
          />
          <span className="filter-bar" />
          <input
            className="filter-range-input"
            type="number"
            placeholder="To"
          />
          <Button
            className="btn-style"
            onClick={removeActiveClass}
          >
            Apply
          </Button>
        </div>
      </div>
      <div onClick={toggleActiveClass} className="selected">
        {capitalize(heading)}
      </div>
    </div>
  );
};

export default FilterRange;
