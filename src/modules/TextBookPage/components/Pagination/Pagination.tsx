import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { StyledPaginationContainer } from './styled';
import { setPage } from '../../actions';

type PaginationProps = {
  numberOfPages: number;
  initialPage: number;
};

export const Pagination: FC<PaginationProps> = ({
  numberOfPages,
  initialPage,
}) => {
  const dispatch = useDispatch();

  const handlePageClick = (data: { selected: number }) => {
    const { selected } = data;
    dispatch(setPage(selected));
  };

  return (
    <StyledPaginationContainer>
      <ReactPaginate
        previousLabel={<ArrowLeftIcon fontSize="large" />}
        nextLabel={<ArrowRightIcon fontSize="large" />}
        breakLabel=""
        pageCount={numberOfPages}
        initialPage={initialPage}
        marginPagesDisplayed={0}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        containerClassName="root"
        pageClassName="page-item"
        previousClassName="previous-page-item"
        nextClassName="next-page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="previous-page-link"
        nextLinkClassName="next-page-link"
        activeClassName="page-item-active"
        disabledClassName="page-item-disabled"
      />
    </StyledPaginationContainer>
  );
};
