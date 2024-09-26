// CustomInput.js
import React from "react";
import { Form, Col } from "react-bootstrap";
import "./CustomUtility.css";

//Custom Input
const CustomInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  alertMessage,
  alert,
  readOnly,
  className,
  md,
}) => (
  <Col md={md}>
    {label && <Form.Label className="CustomFormLabel">{label}</Form.Label>}
    <Form.Control
      className={className || "customInput"}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
    />
    {alert ? <p className="text-danger mt-2">{alertMessage}</p> : ""}
  </Col>
);

// Custom Default Input
const DefaultInput = ({
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
  readOnly,
}) => (
  <Col className="defaultInputBody">
    {label && <label className="defaultInputLabel">{label}</label>}
    <input
      className="defaultInput"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </Col>
);

// Custom Select Input
const customSelectInput = ({ name, onChange, options }) => (
  <Col className="mb-3">
    <Form.Select className="minWidth" name={name} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Form.Select>
  </Col>
);

/*Custom Buttons**************************************************/

const CustomButton = ({ onClick, children, type = "button" }) => (
  <button className="customButton" type={type} onClick={onClick}>
    {children}
  </button>
);
//Custom Normal Button
const CustomNormalButton = ({ onClick, children, type = "button" }) => (
  <button className="customNormalButton" type={type} onClick={onClick}>
    {children}
  </button>
);

//Submit Button
const SubmitButton = ({ onClick, children, type = "button" }) => (
  <button className={"submitButton"} type={type} onClick={onClick}>
    {children}
  </button>
);

//Cancel Button
const CancelButton = ({ onClick, children, type = "button" }) => (
  <button className="cancelButton" type={type} onClick={onClick}>
    {children}
  </button>
);

//Cancel Button
const DraftButton = ({ onClick, children, type = "button" }) => (
  <button className="draftButton" type={type} onClick={onClick}>
    {children}
  </button>
);

//Reset Button
const ResetButton = ({ onClick, children, type = "button" }) => (
  <button className="resetButton" type={type} onClick={onClick}>
    {children}
  </button>
);

//Tab Button
const TabButton = ({
  children,
  activeTab,
  filteredData,
  setActiveTab,
  setShow,
  state,
}) => (
  <button
    className={`Tab-button ${activeTab === state ? "active" : ""} ${
      filteredData.length > 0 ? "disabled" : ""
    }`}
    onClick={() => (setActiveTab(state) || setShow ? setShow(false) : "")}
    disabled={filteredData.length > 0}
  >
    {children}
  </button>
);



const FormModel = ({
  isOpen,
  onClose,
  children,
  modelTitle,
  submitButtonType,
  submitOnClick,
  submitButtonText = "Submit",
  submitCondition,
  closeButton = false,
  closeButtonType,
  closeButtonOnclick,
  closeButtonText = "Close",
  modelStyle,
  modelContentStyle,
  modelTitleStyle,
}) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    style={modelStyle}
    className="form_model"
  >
    <div style={modelContentStyle} className="model_content">
      <p style={modelTitleStyle} className="modal_title">
        {modelTitle}
      </p>
      <IoClose className="close-button" onClick={onClose} />
      <div>{children}</div>
      <div className="buttonModelGroup">
        {closeButton && (
          <button
            className="cancelButton"
            type={closeButtonType}
            onClick={closeButtonOnclick}
          >
            {closeButtonText}
          </button>
        )}
        <button
          disabled={submitCondition}
          className={!submitCondition ? "submitButton" : "disable_button"}
          type={submitButtonType}
          onClick={submitOnClick}
        >
          {submitButtonText}
        </button>
      </div>
    </div>
  </Modal>
);

import React from "react";

const FilteredInput = ({
  label,
  name,
  placeholder,
  value,
  filteredOptions,
  onChange,
  onSelect,
  showDropdown,
  setShowDropdown,
  activeField,
  width,
  dropDownWidth,
  handleError,
  errorMessage,
}) => {
  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    width: dropDownWidth,
    border: "1px solid #ccc",
    backgroundColor: "white",
    listStyle: "none",
    margin: 0,
    padding: 0,
    maxHeight: "150px",
    overflowY: "auto",
    zIndex: 1,
    borderRadius: "5px",
  };

  return (
    <div style={{ position: "relative" }}>
      <label style={{ color: "#888" }}>
        {label}
        <input
          style={{ width: width, fontSize: "14px" }}
          placeholder={placeholder}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
      </label>

      {handleError && (
        <p
          style={{
            position: "absolute",
            fontSize: "12px",
            color: "red",
            top: "40px",
          }}
        >
          {errorMessage}
        </p>
      )}

      {filteredOptions.length > 0 && showDropdown && activeField === name && (
        <ul
          style={dropdownStyle}
          onToggle={(isOpen) => setShowDropdown(isOpen)}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => onSelect(name, option)}
              style={{
                padding: "5px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};




export {
  CustomInput,
  customSelectInput,
  CustomButton,
  CustomNormalButton,
  DefaultInput,
  ResetButton,
  SubmitButton,
  CancelButton,
  DraftButton,
  TabButton,
  FormModel,
  FilteredInput
};
