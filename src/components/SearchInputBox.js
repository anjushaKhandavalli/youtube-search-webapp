import React, {useState} from 'react';
import { SearchBarContainer, SearchBar, Label, Input, Button, InputContainer  } from "./SearchInputBox.style";
import { SEARCH_CONSTANTS } from "../constants";

const SearchInputBox = ({handleSubmit}) => {
  const [searchText, setSearchText] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(searchText);
  }
  return(
    <SearchBarContainer>
      <SearchBar onSubmit={onSubmit}>
        <div>
          <Label 
            htmlFor="search-box" 
            data-testid="search-box-label"
            >
              {SEARCH_CONSTANTS.LABEL}
          </Label>
          <br/>
          <InputContainer>
            <Input
              data-testid="search-box-input"
              name="search-box"
              type="text"
              placeholder={SEARCH_CONSTANTS.PLACEHOLDER}
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
            <Button>{SEARCH_CONSTANTS.SEARCH}</Button>
          </InputContainer>
        </div>
      </SearchBar>
    </SearchBarContainer>
  )
}

export default SearchInputBox;