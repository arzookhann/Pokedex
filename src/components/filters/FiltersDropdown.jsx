import { useEffect, useState } from "react";

import Button from "../button/Button";
import Overlay from "../overlay/Overlay";
import { FilterInput } from "./FilterRange";

import { capitalize } from "../../utils/functions";

import "./filters-styles.scss";
import { RANGE_FILTER_HEADINGS } from "../../utils/constants";

const FiltersDropdown = (props) => {
  const { heading = "Filter", options = [] } = props;
  const [isActive, setIsActive] = useState(false);

  const removeActiveClass = () => setIsActive(false);
  const toggleActiveClass = () => setIsActive(!isActive);

  const renderCheckboxOption = (option) => {
    option = option.toLowerCase();
    return (
      <div key={option} onClick={removeActiveClass} className="option">
        <input type="checkbox" className="checkbox" id={option} name={option} />
        <label htmlFor={option} className="checkbox-option-label">
          {capitalize(option)}
        </label>
      </div>
    );
  };

  const renderRangeFilter = (heading) => (
    <div key={heading} className="dropdown-range-filter-container">
      <h2 className="filter-box-heading">{heading}</h2>
      <div className="range-input-container">
        <div className="drop-down-input-filter-container">
          <FilterInput placeholder="From" />
          <span className="filter-bar" />
          <FilterInput placeholder="From" />
        </div>
        <Button
          btnLabel="Apply"
          className="filter-range-btn dropdown-filter-btn"
          onClick={removeActiveClass}
        />
      </div>
    </div>
  );

  useEffect(() => {
    isActive && (document.body.style.overflow = "hidden");
    !isActive && (document.body.style.overflow = "unset");
  }, [isActive]);

  return (
    <>
      <div className={`dropdown-filter-box ${isActive ? "active" : ""}`}>
        <label onClick={removeActiveClass} id="close-icon">
          <i className="fa fa-close fa-2x" />
        </label>

        <div className="type-filter-container">
          <h2 className="filter-box-heading">Type</h2>
          <div className="checkbox-item-container">
            {options.map(renderCheckboxOption)}
          </div>
        </div>

        {RANGE_FILTER_HEADINGS.map(renderRangeFilter)}
      </div>

      <div onClick={toggleActiveClass} className="selected">
        {capitalize(heading)}
      </div>

      <Overlay
        onClick={removeActiveClass}
        className={isActive ? "active" : ""}
      />
    </>
  );
};

export default FiltersDropdown;
