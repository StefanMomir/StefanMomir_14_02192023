import PropTypes from "prop-types";
import sortingTitle from "../data/sortingTable.js";
import limit from "../data/limit.js";
import { AuthUser } from "../context/Auth.jsx";
import { useState, useEffect } from "react";
import NextPage from "wh-p14-library";
import PreviousPage from "wh-p14-library";
import { Pagination } from "wh-p14-library2";
import Order from "../components/order/Order.jsx";
import Table from "../components/table/Table.jsx";
import DropdownLimit from "../components/dropdowns/DropdownLimit.jsx";
import SearchByKey from "../components/search/SearchByKey.jsx";
import PageStats from "wh-p14-library";

const Dashboard = () => {
  const {
    dataResult,
    totalResults,
    settingsData,
    resultsPerPage,
    limitPageNumbers,
    handleFindKeyword,
    handleLimit,
    handleListAll,
  } = AuthUser();
  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  /* GET USER -> QUERY API */
  useEffect(() => {
    handleListAll();
    //   handleLimit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* SET NUMBER OF PAGES ARRAY */
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pages.push(i);
  }

  /* RESET MAX/MIN PAGE NUMBER */
  const handleReset = () => {
    handleListAll();
    setMinPageLimit(0);
    setMaxPageLimit(5);
    setCurrentPage(1);
  };

  /** ALL PROPS *********************************************************************************
   * @param { Function } setMaxPageLimit: set max. pagination numbers
   * @param { Function } setMinPageLimit: set min. pagination numbers
   * @param { Function } setCurrentPage: set current page
   * @param { Function } handleLimit: set page limit
   * @param { Function } handleReset: reset pages states
   * @param { Function } handleListAll: query database for all datas
   * @param { Function } setSortBy: set sort display by title of data fields
   * @param { Function } setOrder: set order by ASC or DESC
   * @param { Number } maxPageLimit: max pagination number
   * @param { Number } minPageLimit: min pagination number
   * @param { Number } limitPageNumbers: limit number of pages
   * @param { Number } currentPage: current page number
   * @param { Number } pages: result of how many pages will be listed
   * @param { Number } totalResults: total number of data results from database
   * @param { Number } resultsPerPage: results per page
   * @param { Object } limit: limit number selection array
   * @param { Object } settingsData: insert/update database table for defaults: sortby, limit, pagination, pages
   * @param { Object } sortingTitle: titles array for sorting buttons
   * @param { Object } dataResult: all data results from database
   * @param { String } order: return value : asc or desc
   * @param { String } sortBy: return value from titles sorting array buttons
   ********************************************************************************************/

  /* RETURN EMPLOYEE TEMPLATE */
  return (
    <div className="dashboard">
      <div className="title">
        <picture>
          <source type="image/webp" srcSet="logoc.webp" />
          <img src="logoc.jpg" alt="logoc" />
        </picture>
        <p>Registered Employees List</p>
      </div>
      <div className="filter-container">
        <DropdownLimit
          limitData={limit}
          handleLimit={handleLimit}
          handleReset={handleReset}
          totalResults={totalResults}
          resultsPerPage={resultsPerPage}
          settingsData={settingsData}
        />
        <SearchByKey handleFindKeyword={handleFindKeyword} />
      </div>
      <div className="pagination">
        <Order
          setOrder={setOrder}
          order={order}
          handleListAll={handleListAll}
          handleLimit={handleLimit}
        />
        {/*
        <PreviousPage
          setMaxPageLimit={setMaxPageLimit}
          setMinPageLimit={setMinPageLimit}
          maxPageLimit={maxPageLimit}
          minPageLimit={minPageLimit}
          limitPageNumbers={limitPageNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="pages">
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            maxPageLimit={maxPageLimit}
            minPageLimit={minPageLimit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        </div>
        <NextPage
          setMaxPageLimit={setMaxPageLimit}
          setMinPageLimit={setMinPageLimit}
          maxPageLimit={maxPageLimit}
          minPageLimit={minPageLimit}
          limitPageNumbers={limitPageNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pages={pages}
  />*/}
      </div>
      <div className="data">
        <Table
          sortingTitle={sortingTitle}
          dataResult={dataResult}
          order={order}
          sortBy={sortBy}
          setSortBy={setSortBy}
          currentPage={currentPage}
          resultsPerPage={resultsPerPage}
        />
      </div>
      <div className="pagination">
        <PageStats
          totalResults={totalResults}
          currentPage={currentPage}
          resultsPerPage={resultsPerPage}
        />
        <div className="pages">
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            maxPageLimit={maxPageLimit}
            minPageLimit={minPageLimit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  setMaxPageLimit: PropTypes.func,
  setMinPageLimit: PropTypes.func,
  setCurrentPage: PropTypes.func,
  handleLimit: PropTypes.func,
  handleReset: PropTypes.func,
  handleListAll: PropTypes.func,
  setSortBy: PropTypes.func,
  setOrder: PropTypes.func,
  maxPageLimit: PropTypes.number,
  minPageLimit: PropTypes.number,
  limitPageNumbers: PropTypes.number,
  currentPage: PropTypes.number,
  pages: PropTypes.number,
  totalResults: PropTypes.number,
  resultsPerPage: PropTypes.number,
  limit: PropTypes.object,
  settingsData: PropTypes.object,
  sortingTitle: PropTypes.object,
  dataResult: PropTypes.object,
  order: PropTypes.string,
  sortBy: PropTypes.string,
};

export default Dashboard;
