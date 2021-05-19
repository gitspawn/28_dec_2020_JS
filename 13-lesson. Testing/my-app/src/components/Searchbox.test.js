import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Searchbox from './Searchbox';


test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});


test('renders correct search button', () => {
  let { queryByTestId } = render(<Searchbox />);
  expect(queryByTestId("search-btn"));
});


test('renders correct input', () => {
  let { queryByPlaceholderText } = render(<Searchbox />);
  expect(queryByPlaceholderText('Type to search')).toBeTruthy();
});


describe('input value updade check', () => {
  test('if udates on change', () => {
    let { queryByPlaceholderText } = render(<Searchbox />);
    let searchInput = queryByPlaceholderText('Type to search');
    fireEvent.change(searchInput, { target: { value: 'pizza' } });
    expect(searchInput.value).toBe('pizza');
  });
});


describe("search button empty", () => {
  test("button with empty qury", () => {
    let requestSerch = jest.fn();
    let { queryByTestId } = render(<Searchbox requestSerch={requestSerch} />);

    fireEvent.click(queryByTestId("search-btn"));
    expect(requestSerch).not.toHaveBeenCalled();

  });
});


describe("search button with data", () => {
  test("button with data inside", () => {
    let requestSerch = jest.fn();
    let { queryByTestId, queryByPlaceholderText } = render(<Searchbox requestSerch={requestSerch} />);

    let searchInput = queryByPlaceholderText('Type to search');
    fireEvent.change(searchInput, { target: { value: 'pizza' } });

    fireEvent.click(queryByTestId("search-btn"));
    expect(requestSerch).toHaveBeenCalled();
  });
});