import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchInputBox from "./SearchInputBox";

const mockHandleSubmit = jest.fn();
describe('SearchInputBox', () => {
  it('should render the search input box with label and input box',() => {
    const {container, getByTestId} = render(<SearchInputBox handleSubmit={mockHandleSubmit}/>);

    expect(container).toMatchSnapshot();
    expect(getByTestId('search-box-label')).toBeDefined();
    expect(getByTestId('search-box-input')).toBeDefined();
  })

  it("should change search box input value on change of search input ", () => {
    const {container, getByTestId} = render(<SearchInputBox handleSubmit={mockHandleSubmit}/>);

    fireEvent.change(getByTestId('search-box-input'),{target: {value: 'sampleText'}});

    expect(getByTestId('search-box-input').value).toBe('sampleText');
  })

  it("should call mockHandleSubmit on submit of search input text", () => {
    const { getByTestId } = render(<SearchInputBox handleSubmit={mockHandleSubmit}/>);

    const searchInput = getByTestId('search-box-input');
    fireEvent.change(searchInput,{target: {value: 'sampleText'}});
    fireEvent.submit(searchInput);

    expect(searchInput.value).toBe('sampleText');
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandleSubmit).toHaveBeenCalledWith('sampleText');

  })
});