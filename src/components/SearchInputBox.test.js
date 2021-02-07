import React from "react";
import { render } from "@testing-library/react";
import SearchInputBox from "./SearchInputBox";

describe('SearchInputBox', () => {
  it('should render the search input box with label and input box',() => {
    const {container, findByTestId} = render(<SearchInputBox/>);

    expect(container).toMatchSnapshot();
    expect(findByTestId('search-box-label')).toBeDefined();
    expect(findByTestId('search-box-input')).toBeDefined();
  })
});