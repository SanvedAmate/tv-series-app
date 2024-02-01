/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

const MyPagination = ({ setPage, numOfPages }) => {
  const [page, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
    setPage(value);
  };

  return (
    <Pagination
      count={numOfPages}
      page={page}
      onChange={handleChange}
      color="primary"
      shape="rounded"
    />
  );
};

export default MyPagination;
