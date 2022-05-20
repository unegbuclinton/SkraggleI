import { contactSearch } from 'api/contacts/search';
import { DPIconSearch } from 'icons';
import debounce from 'lodash.debounce';
import React, { useCallback, useRef, useState } from 'react';
import { IconWrapper, Input, SearchbarWrapper } from './styles';

function SearchBar({ setClick, className }) {
  const [input, setInput] = useState('');
  const [barOpened, setBarOpened] = useState(false);

  const inputFocus = useRef();

  const getSearchDebounce = useCallback(
    debounce(() => {
      contactSearch;
    }, 500),
    [input]
  );
  getSearchDebounce();
  return (
    <div>
      <SearchbarWrapper
        barOpened={barOpened}
        onClick={() => {
          // When form clicked, set state of baropened to true and focus the input
          setBarOpened(true);
          inputFocus.current.focus();
          setClick(false);
        }}
        // on focus open search bar
        onFocus={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on blur close search bar
        onBlur={() => {
          setBarOpened(false);
          setTimeout(() => {
            setClick(true);
          }, 200);
        }}
        // On submit, call the onFormSubmit function
      >
        <Input
          onChange={(e) => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="Search..."
          className={className}
        />

        <IconWrapper type="submit" barOpened={barOpened}>
          <div>
            <DPIconSearch className="search-icon" />
          </div>
        </IconWrapper>
      </SearchbarWrapper>
    </div>
  );
}

export default SearchBar;
