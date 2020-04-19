import React from "react";
import { Pagination } from "react-bootstrap";

interface Props {
  pagination: {
    page: number;
    limit: number;
  };
  changePage: (page: number) => void;
}

const CusomPagination = ({ pagination, changePage }: Props) => {
  return (
    <Pagination>
      {Array(5)
        .fill("")
        .map((_, index) => {
          const page = index + 1;
          return (
            <Pagination.Item
              active={page === pagination.page}
              key={page}
              onClick={() => changePage(page)}
            >
              {page}
            </Pagination.Item>
          );
        })}
    </Pagination>
  );
};

export default CusomPagination;
