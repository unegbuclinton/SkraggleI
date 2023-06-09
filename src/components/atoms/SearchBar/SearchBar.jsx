import { DPIconSearch } from 'icons';
import React, { useRef, useState } from 'react';
import { IconWrapper, Input, SearchbarWrapper } from './styles';

function SearchBar({ className, onChange }) {
  // const [input, setInput] = useState('');
  const [barOpened, setBarOpened] = useState(false);

  const inputFocus = useRef();

  return (
    <div>
      <SearchbarWrapper
        barOpened={barOpened}
        onClick={() => {
          // When form clicked, set state of baropened to true and focus the input
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on focus open search bar
        onFocus={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on blur close search bar
        onBlur={() => {
          setBarOpened(false);
        }}
        // On submit, call the onFormSubmit function
      >
        <Input
          onChange={onChange}
          ref={inputFocus}
          // value={input}
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
