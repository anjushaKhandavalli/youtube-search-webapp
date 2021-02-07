import React, {useState} from 'react';
import { SearchBarContainer, SearchBar, Field, Label, Input  } from "./SearchInputBox.style";
import { SEARCH_CONSTANTS } from "../constants";

const SearchInputBox = ( {handleSubmit}) => {
  const [searchText, setSearchText] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(searchText);
  }
  return(
    <SearchBarContainer>
      <SearchBar onSubmit={onSubmit}>
        <Field>
          <Label 
            htmlFor="search-box" 
            data-testid="search-box-label"
            >
              {SEARCH_CONSTANTS.LABEL}
          </Label>
          <br/>
          <Input
            data-testid="search-box-input"
            name="search-box"
            type="text"
            placeholder={SEARCH_CONSTANTS.PLACEHOLDER}
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </Field>
      </SearchBar>
    </SearchBarContainer>
  )
}

export default SearchInputBox;