const DropdownLimit = ({ ...props }) => {
  return (
    <div className="entries-number">
      <p>Show </p>
      <div className="results">
        <div className="dropdown">
          <div className="dropbtn">
            <p className="limit"> {props.settingsData?.map((l) => l.limit)}</p>
          </div>
          <div className="dropdown-content">
            {props.limitData.map((returnMap, index) => {
              return (
                <div
                  className="drop-element"
                  key={index}
                  data-limit={returnMap.data}
                  data-page={Math.ceil(
                    props.totalResults / props.resultsPerPage
                  )}
                  onClick={(e) => {
                    props.handleLimit(e.target.dataset);
                    props.handleReset(returnMap.data);
                  }}
                >
                  {returnMap.data}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p>&nbsp; Results</p>
    </div>
  );
};

export default DropdownLimit;
