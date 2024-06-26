import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  totalPagesCount,
  onClick,
  currentPageNumber,
}: {
  totalPagesCount: number;
  onClick: (nextPage: number) => void;
  currentPageNumber?: number;
}) => {
  return (
    <ReactPaginate
      forcePage={currentPageNumber}
      selectedPageRel={null}
      pageCount={totalPagesCount}
      breakLabel="..."
      pageRangeDisplayed={10}
      nextLabel="بعدی"
      previousLabel="قبلی"
      nextLinkClassName="text-primary border rounded-[5px] border-primary bg-white px-3 py-1 ml-1"
      previousLinkClassName="text-primary border rounded-[5px] border-primary bg-white px-3 py-1 mr-1"
      className="flex flex-row-reverse flex-wrap gap-1 items-center"
      activeClassName="text-white bg-primary rounded-md"
      nextClassName="text-primary"
      disabledLinkClassName="border-primaryLight text-primaryLight"
      pageLabelBuilder={(page) => (
        <p className="px-3 py-1 border border-primary rounded-[5px] mx-1">
          {page}
        </p>
      )}
      onClick={(e) => {
        // @ts-ignore
        onClick(e.nextSelectedPage + 1);
          console.log(e)
      }}
    />
  );
};

export default Pagination;
