type PaginationProps = {
  pageOffset: number;
  updatePage: (newPageValue: number) => void;
};

const Pagination = ({ pageOffset, updatePage }: PaginationProps) => {
  return (
    <div className="pagination">
      <button
        className={`pagination__button is-prev ${
          pageOffset === 0 ? "" : "is-active"
        }`}
        onClick={() => updatePage(pageOffset - 1)}
      >
        &lt;
      </button>
      <button
        className="pagination__button is-next is-active"
        onClick={() => updatePage(pageOffset + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
