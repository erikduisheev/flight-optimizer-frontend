import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";
import AsyncSelect from "react-select/async";
import MakeAnimated from "react-select/animated";
import api from "../../api";
import { toast } from "react-toastify";

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
  noOptionsMessage = "",
}) => {
  const [foundOptions, setFoundOptions] = useState(true);
  const fetchOptions = (inputValue, callback) => {
    api
      .get(`${loadAsyncConfig.endpoint}?city=${inputValue}`)
      .then((response) => {
        const { possible_cities: possibleCities } = response.data;
        setFoundOptions(!!possibleCities.length);
        callback(
          possibleCities.map((city) => ({
            label: `${city.city}, ${city.country}`,
            value: city.city,
          }))
        );
      })
      .catch((error) => {
        toast.error(`Something went wrong ${error.message}`);
      });
  };
  const loadAsyncOptions = (inputValue, callback) => {
    if (inputValue.length >= loadAsyncConfig.minInputCharLengthToStart) {
      fetchOptions(inputValue, callback);
      return;
    }
    setFoundOptions(true);
  };
  const noInputMessage = () => {
    if (foundOptions) {
      return <span>No options</span>;
    }
    return <span style={{ color: "red" }}>{noOptionsMessage}</span>;
  };
  return (
    <div className={`input-field-container ${containerClassName}`}>
      {label && (
        <label htmlFor={name} className="input-field-item-label">
          {label}
        </label>
      )}
      <AsyncSelect
        components={MakeAnimated()}
        value={value}
        placeholder={placeholder}
        noOptionsMessage={noInputMessage}
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
