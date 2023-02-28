const TableData = ({ ...props }) => {
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

export default TableData;
