const PreviousPage = ({ ...props }) => {
  const setPreviousPage = () => {
    if ((props.currentPage - 1) % props.limitPageNumbers <= 0) {
      props.setMaxPageLimit(props.maxPageLimit - props.limitPageNumbers);
      props.setMinPageLimit(props.minPageLimit - props.limitPageNumbers);
    }
    props.setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className={props.currentPage !== 1 ? "left" : "hide"}>
      <span
        className="material-symbols-outlined arrows"
        onClick={setPreviousPage}
      >
        navigate_before
      </span>
    </div>
  );
};

export default PreviousPage;
