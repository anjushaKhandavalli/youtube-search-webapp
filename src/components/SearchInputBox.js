import React from 'react';
import { SearchBarContainer, SearchBar, Field, Label, Input  } from "./SearchInputBox.style";
import { SEARCH_CONSTANTS } from "../constants";

const SearchInputBox = () => {
  return(
    <SearchBarContainer>
      <SearchBar onSubmit={() => {}}>
        <Field>
          <Label htmlFor="search-box" data-test-id="search-box-label">{SEARCH_CONSTANTS.LABEL}</Label><br/>
          <Input
            data-test-id="search-box-input"
            name="search-box"
            type="text"
            placeholder={SEARCH_CONSTANTS.PLACEHOLDER}
          />
        </Field>
      </SearchBar>
    </SearchBarContainer>
  )
}

export default SearchInputBox;