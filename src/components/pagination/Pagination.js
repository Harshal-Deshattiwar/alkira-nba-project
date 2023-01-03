import "./styles.css";
const Pagination = ({ totalPage, currentPage, pageIncrease, pageDecrease }) => {
  return (
    <>
      <div className="pagination">
        <button onClick={pageDecrease} style={{ cursor: "pointer" }}>
          <span>{"<"}</span>
        </button>
        <button>
          <span>{currentPage}</span>
        </button>
        <button>
          <span>{totalPage}</span>
        </button>
        <button onClick={pageIncrease} style={{ cursor: "pointer" }}>
          <span>{">"}</span>
        </button>
      </div>
    </>
  );
};

export default Pagination;
