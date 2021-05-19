import React from 'react';

export default function SearchButton({ onCLickProp }) {
  return (
    <button data-testid="search-btn" type="button" onClick={() => onCLickProp()}>Search</button>
  );
}
