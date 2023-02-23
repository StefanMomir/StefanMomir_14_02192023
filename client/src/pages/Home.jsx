import PropTypes from "prop-types";
import React, { useState } from "react";
import departmentData from "../data/department.js";
import { AuthUser } from "../context/Auth.jsx";
import regionData from "../data/regions.js";
import Dropdown from "../components/dropdowns/Dropdown.jsx";
import Modal from "../components/modal/Modal.jsx";

const Home = () => {
  const {
    handleForm,
    formData,
    error,
    handleData,
    handleSecondData,
    showState,
  } = AuthUser();
  const [department, setDepartment] = useState("SELECT...");
  const [state, setState] = useState("SELECT...");

  /** ALL PROPS *********************************************************************************
   * @param { Function } handleData: get form data from input fields
   * @param { Function } handleSecondData: get form data from dropdowns
   * @param { Function } showState: set modal state show/hide
   * @param { Function } setDepartment: set SELECT... text as non selected for dropdown
   * @param { Function } setSate: set SELECT... text as non selected for dropdown
   * @param { Object }  formData: all form data for submit form
   * @param { Object } departmentData: departements data array
   * @param { Object } regionData: regions data array
   ********************************************************************************************/

  /* RETURN FORM TEMPLATE */
  return (
    <div className="home">
      <Modal />
      <form onSubmit={handleForm}>
        <div className={showState === true ? "show" : "hide"}>
          <div className="title">
            <picture>
              <source type="image/webp" srcSet="logoc.webp" />
              <img src="logoc.jpg" alt="logoc" />
            </picture>
            <p>Create Employee</p>
          </div>
          <div className="main-form-set">
            <label htmlFor="">
              Department
              <p className={!formData.department ? "req on" : "req"}>&nbsp;*</p>
            </label>
            <Dropdown
              mapData={departmentData}
              dataName={"department"}
              handleData={handleSecondData}
              setData={setDepartment}
              titleButton={department}
            />
          </div>
          <div className="main-form-set">
            <label htmlFor="first">
              First Name
              <p className={!formData.firstname ? "req on" : "req"}>&nbsp;*</p>
            </label>
            <input
              type="text"
              name="firstname"
              id="first"
              onChange={handleData}
              required
            />
            <label htmlFor="last">
              Last Name
              <p className={!formData.lastname ? "req on" : "req"}>&nbsp;*</p>
            </label>
            <input
              type="text"
              name="lastname"
              id="last"
              onChange={handleData}
              required
            />
            <label htmlFor="birth">
              Birthdate
              <p className={!formData.birthdate ? "req on" : "req"}>&nbsp;*</p>
            </label>
            <input
              min="1923-01-01"
              max="2005-01-01"
              className="date"
              type="date"
              name="birthdate"
              id="birth"
              onChange={handleData}
              required
            />
            <label htmlFor="date">
              Start Date
              <p className={!formData.createAt ? "req on" : "req"}>&nbsp;*</p>
            </label>
            <input
              min="2005-01-01"
              max="2060-01-01"
              className="date"
              type="date"
              name="createAt"
              id="date"
              onChange={handleData}
              required
            />
          </div>
          <div className="address-form-set">
            <label htmlFor="street">
              Street
              <p className={!formData.street ? "req on" : "req"}>&nbsp;*</p>
            </label>
            <input
              type="text"
              name="street"
              id="street"
              onChange={handleData}
              required
            />
            <label htmlFor="city">
              City
              <p className={!formData.city ? "req on" : "req"}>&nbsp;*</p>
            </label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleData}
              required
            />
            <label>
              State <p className={!formData?.state ? "req on" : "req"}>*</p>
            </label>
            <Dropdown
              mapData={regionData}
              dataName={"state"}
              handleData={handleSecondData}
              setData={setState}
              titleButton={state}
            />
            <label htmlFor="zip">
              Zip
              <p className={!formData.zip ? "req on" : "req"}>&nbsp;*</p>
            </label>
            <input
              type="number"
              name="zip"
              id="zip"
              onChange={handleData}
              required
            />
            <div className="error red">{error}</div>
            <button className="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

Home.propTypes = {
  handleData: PropTypes.func,
  handleSecondData: PropTypes.func,
  showState: PropTypes.func,
  setDepartment: PropTypes.func,
  setSate: PropTypes.func,
  formData: PropTypes.object,
  departmentData: PropTypes.object,
  regionData: PropTypes.object,
};

export default Home;
