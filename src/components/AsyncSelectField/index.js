import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import AsyncSelect from "react-select/async";
import api from "../../api";

const AsyncSelectField = ({
  name,
  label = "",
  placeholder,
  onChange = null,
  containerClassName = "",
  disabled = false,
  isClearable = true,
  isMulti = false,
  loadAsyncConfig,
  value = null,
}) => {
  const fetchOptions = (inputValue, callback) => {
    api
      .get(`${loadAsyncConfig.endpoint}?city=${inputValue}`)
      .then((response) => {
        const { possible_cities: possibleCities } = response.data;
        callback(
          possibleCities.map((city) => ({
            label: `${city.city}, ${city.country}`,
            value: city.city,
          }))
        );
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const loadAsyncOptions = (inputValue, callback) => {
    if (inputValue.length >= loadAsyncConfig.minInputCharLengthToStart) {
      fetchOptions(inputValue, callback);
    }
  };
  return (
    <div className={`input-field-container ${containerClassName}`}>
      {label && (
        <label htmlFor={name} className="input-field-item-label">
          {label}
        </label>
      )}
      <AsyncSelect
        value={value}
        placeholder={placeholder}
        isClearable={isClearable}
        isDisabled={disabled}
        onChange={onChange}
        loadOptions={loadAsyncOptions}
        isMulti={isMulti}
      />
    </div>
  );
};

AsyncSelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default AsyncSelectField;
