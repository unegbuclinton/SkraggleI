import React, { useState } from 'react';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import filterData from 'utilities/filterData.json';
import CustomDropdown from 'components/atoms/CustomDropdown/CustomDropdown';
import styled from 'styled-components';

function SearchFilter() {
  const [click, setClick] = useState(true);
  return (
    <Wrapper>
      {click ? <CustomDropdown data={filterData} /> : ''}
      <SearchBar className="search" setClick={setClick} />
    </Wrapper>
  );
}

export default SearchFilter;

const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`;
