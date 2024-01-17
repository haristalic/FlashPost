import React, { ChangeEvent, useState } from 'react';
import './Pagination.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
type Props = {
  totalPhotos: number;
  photosPerPage: number;
  paginate: (arg: number) => void;
  changeNumberOfPhotosPerPage: (arg: number) => void;
};
export const Pagination = ({
  totalPhotos,
  photosPerPage,
  paginate,
  changeNumberOfPhotosPerPage,
}: Props) => {
  const [activePage, setActivePage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  const pageNumbers = [];
  const options = [40, 60, 80, 100, 200];

  for (let i = 1; i < Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }

  const validateIndex = (index: number) => {
    return index >= 0 && index <= pageNumbers.length;
  };

  const handlePageClick = (number: number) => {
    setActivePage(number);
    paginate(number);
  };
  const prevPage = () => {
    if (validateIndex(startIndex - 5) && validateIndex(endIndex - 5)) {
      setStartIndex((prevState) => prevState - 5);
      setEndIndex((prevState) => prevState - 5);
    }
  };

  const nextPage = () => {
    if (validateIndex(startIndex + 5) && validateIndex(endIndex + 5)) {
      setStartIndex((prevState) => prevState + 5);
      setEndIndex((prevState) => prevState + 5);
    }
  };
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    changeNumberOfPhotosPerPage(Number(event.target.value));
    setStartIndex(0);
    setEndIndex(5);
  };
  return (
    <div className="pagination-container">
      <IoIosArrowBack className="pagBtn" onClick={() => prevPage()} />

      {pageNumbers.slice(startIndex, endIndex).map((number) => (
        <div
          onClick={() => {
            handlePageClick(number);
            paginate(number);
          }}
          key={number}
          className={`pageNum ${activePage === number ? 'activePage' : ''}`}
        >
          {number}
        </div>
      ))}
      <IoIosArrowForward className="pagBtn" onClick={() => nextPage()} />

      <select className="selectInp" onChange={onChange}>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
