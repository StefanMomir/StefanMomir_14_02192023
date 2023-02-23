import { createContext, useContext } from "react";
import React, { useState } from "react";
import axios from "axios";

/* CREATE AUTHORITY CONTEXT */
export const AuthUserContext = createContext();
export const AuthUser = () => {
  return useContext(AuthUserContext);
};

export const AuthContextProvider = ({ children }) => {
  /* SET API SEND ROUTES */
  const url = "http://localhost:3001/user";
  const [dataResult, setDataResult] = useState();
  const [settingsData, setSettingsData] = useState();
  /* Pagination */
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState();
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [limitPageNumbers] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    createAt: "",
    department: "",
  });
  const [showState, setShowState] = useState(true);
  const [error, setError] = useState(null);

  /* GET USER -> QUERY API */
  const handleListAll = async () => {
    try {
      await axios.get(`${url}/seq`).then((response) => {
        response?.data && setDataResult(response?.data.udata);
        response?.data && setSettingsData(response?.data.set);
        response?.data && setTotalResults(response?.data.udata.length);
        response?.data &&
          response?.data.set.map((l) => setResultsPerPage(l.limit));
        setTotalPages(
          Math.ceil(response?.data.udata.length / limitPageNumbers)
        );
      });
    } catch (error) {
      console.error(error.response);
    }
  };

  /* SET CONFIGURATION DATA */
  const handleLimit = async (e) => {
    try {
      await axios.put(`${url}/seqSet`, e).then((response) => {
        handleListAll();
        setCurrentPage(1);
      });
    } catch (error) {
      console.error(error.response);
    }
  };

  /* FILTER USER BY INPUT KEYWORD */
  const handleFindKeyword = async (e) => {
    try {
      await axios.put(`${url}/seqfind`, { keyword: e }).then((response) => {
        response?.data && setDataResult(response?.data.udata);
      });
    } catch (error) {
      console.error(error.response);
    }
  };

  /* HANDLE SUBMIT FORM - POST SENT TO API */
  const handleForm = async (e) => {
    e.preventDefault();
    if (formData.department && formData.state) {
      setError(error);
      try {
        await axios
          .post(`${url}/seqAdd`, formData && formData)
          .then((response) => {
            if (response) {
              setShowState(false);
            }
          });
      } catch (error) {}
    } else {
      setError("please complete all required fields !");
    }
  };

  /* GET FORM DATA FROM ONCHANGE FIELDS */
  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* GET FORM DATA FROM DROPDOWNS ONCLICK */
  const handleSecondData = (e) => {
    setFormData({ ...formData, [e.name]: e.state });
  };

  /* SET CONTEXT VARIABLES */
  const authValues = {
    url,
    dataResult,
    totalResults,
    totalPages,
    settingsData,
    resultsPerPage,
    limitPageNumbers,
    currentPage,
    formData,
    error,
    showState,
    setFormData,
    setShowState,
    handleFindKeyword,
    handleLimit,
    handleListAll,
    handleForm,
    handleSecondData,
    handleData,
  };

  return (
    <AuthUserContext.Provider value={authValues}>
      {children}
    </AuthUserContext.Provider>
  );
};
