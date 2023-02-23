const Dropdown = ({ ...props }) => {
  return (
    <div className="dropdown">
      <div className="dropbtn">{props.titleButton}</div>
      <div className="dropdown-content">
        {props.mapData?.map((returnMap, index) => {
          return (
            <div
              className="drop-element"
              key={index}
              data-name={props.dataName}
              data-state={returnMap.data}
              onClick={(e) => {
                props.handleData(e.target.dataset);
                props.setData(e.target.dataset.state);
              }}
            >
              {returnMap.data}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
