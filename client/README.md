![image](/client/src/assets/logo.png)

# WH-P14-Full

ATENTION ! THIS IS A SCHOOL PROJECT !

Search by keyword, Sort, Filter, Order, Pagination

![image](/client/src/assets/example.png)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install wh-p14-full
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add wh-p14-full
```

You can import one or all following features :

```js
import {
  NextPage,
  PreviousPage,
  Pagination,
  Order,
  Table,
  DropdownLimit,
  SearchByKey,
  PageStats,
} from "wh-p14-full";
```

## Props description :

```js
/** ALL PROPS **

- @param { Function } setMaxPageLimit: set max. pagination numbers
- @param { Function } setMinPageLimit: set min. pagination numbers
- @param { Function } setCurrentPage: set current page
- @param { Function } handleLimit: set page limit
- @param { Function } handleReset: reset pages states
- @param { Function } handleListAll: query database for all datas
- @param { Function } setSortBy: set sort display by title of data fields
- @param { Function } setOrder: set order by ASC or DESC
- @param { Function } TableData: customize Database data
- @param { Number } maxPageLimit: max pagination number
- @param { Number } minPageLimit: min pagination number
- @param { Number } limitPageNumbers: limit number of pages
- @param { Number } currentPage: current page number
- @param { Number } pages: result of how many pages will be listed
- @param { Number } totalResults: total number of data results from database
- @param { Number } resultsPerPage: results per page
- @param { Object } limit: limit number selection array
- @param { Object } settingsData: Database table for set up defaults : sortby, limit, pagination, pages
- @param { Object } dataResult: Database table for users
- @param { Object } sortingTitle: titles array for sorting buttons
- @param { String } order: return value : asc or desc
- @param { String } sortBy: return value from titles sorting array buttons
**/
```

&nbsp;

# { Table }

Configuration Example

&nbsp;

1 - Sorting Buttons Array

2 - Database fields(MYSQL,SQLite...)

&nbsp;

| 1   | USER ID | FIRST NAME | LAST NAME | BIRTHDATE | START DATE | DEPARTMENT | STREET | CITY | STATE | ZIP |
| --- | :------ | ---------- | --------- | --------- | ---------- | ---------- | ------ | ---- | ----- | --: |
| 2   | id      | firstname  | lastname  | createdAt | department | birthdate  | street | city | state | zip |

<p>&nbsp;</p>

example :

create a filename : `TableData.jsx` and paste de following code :

```js
export const TableData = ({ ...props }) => {
  return (
    <div className="data-container">
      <div className="data-title">{props.mainData.id}</div>
      <div className="data-title weight capitalize">
        {props.mainData.firstname}
      </div>
      <div className="data-title weight">{props.mainData.lastname}</div>
      <div className="data-title">{props.mainData.createdAt}</div>
      <div className="data-title">{props.mainData.department}</div>
      <div className="data-title">{props.mainData.birthdate}</div>
      <div className="data-title">{props.mainData.street}</div>
      <div className="data-title">{props.mainData.city}</div>
      <div className="data-title">{props.mainData.state}</div>
      <div className="data-title">{props.mainData.zip}</div>
    </div>
  );
};
```

create a filename : `sortingTable.js` and paste de following code :

```js
const sortingTitle = [
  {
    title: "User ID",
    name: "id",
  },
  {
    title: "First Name",
    name: "firstname",
  },
  {
    title: "Last Name",
    name: "lastname",
  },
  {
    title: "Start Date",
    name: "createdAt",
  },
  {
    title: "Departement",
    name: "department",
  },
  {
    title: "Birthdate",
    name: "birthdate",
  },
  {
    title: "Street",
    name: "street",
  },
  {
    title: "City",
    name: "city",
  },
  {
    title: "State",
    name: "state",
  },
  {
    title: "Zip Code",
    name: "zip",
  },
];
```

Table {...props}

```js
import { TableData } from "TableData.jsx";

<div className="data">
  <Table
    TableData={TableData}
    sortingTitle={sortingTitle}
    dataResult={dataResult}
    order={order}
    sortBy={sortBy}
    setSortBy={setSortBy}
    currentPage={currentPage}
    resultsPerPage={resultsPerPage}
  />
</div>;
```

<p>&nbsp;</p>

# { NextPage, PreviousPage, Pagination, Order, PageStats }

Configuration Example

```js
<div className="pagination">
  <Order
    setOrder="{setOrder}"
    order="{order}"
    handleListAll="{handleListAll}"
    handleLimit="{handleLimit}"
  />
  <PreviousPage
    setMaxPageLimit="{setMaxPageLimit}"
    setMinPageLimit="{setMinPageLimit}"
    maxPageLimit="{maxPageLimit}"
    minPageLimit="{minPageLimit}"
    limitPageNumbers="{limitPageNumbers}"
    currentPage="{currentPage}"
    setCurrentPage="{setCurrentPage}"
  />
  <div className="pages">
    <Pagination
      totalResults="{totalResults}"
      resultsPerPage="{resultsPerPage}"
      maxPageLimit="{maxPageLimit}"
      minPageLimit="{minPageLimit}"
      currentPage="{currentPage}"
      setCurrentPage="{setCurrentPage}"
      pages="{pages}"
    />
  </div>
  <NextPage
    setMaxPageLimit="{setMaxPageLimit}"
    setMinPageLimit="{setMinPageLimit}"
    maxPageLimit="{maxPageLimit}"
    minPageLimit="{minPageLimit}"
    limitPageNumbers="{limitPageNumbers}"
    currentPage="{currentPage}"
    setCurrentPage="{setCurrentPage}"
    pages="{pages}"
  />
</div>
```

<p>&nbsp;</p>

# { DropdownLimit, SearchByKey }

Configuration Example

<i>{handleFindKeyword} - value from input field</i>

```js
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
```

<p>&nbsp;</p>

### Browser Support

Compatible with the latest versions of Chrome and Firefox.

<p>&nbsp;</p>

## Credits

2023 - OCMStefan
