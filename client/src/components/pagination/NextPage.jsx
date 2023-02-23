//import pages from "../../components/pagination/Pagination.jsx";

const NextPage = ({ ...props }) => {
  const setNextPage = () => {
    if (props.currentPage + 1 > props.maxPageLimit) {
      props.setMaxPageLimit(props.maxPageLimit + props.limitPageNumbers);
      props.setMinPageLimit(props.minPageLimit + props.limitPageNumbers);
    }
    props.setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className={props.currentPage >= props.pages.length ? "hide" : "right"}>
      <span className="material-symbols-outlined arrows" onClick={setNextPage}>
        navigate_next
      </span>
    </div>
  );
};

export default NextPage;
