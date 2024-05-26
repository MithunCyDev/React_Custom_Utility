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
};
