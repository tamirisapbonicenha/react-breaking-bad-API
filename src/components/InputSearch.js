import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const InputSearch = props => {
  return (
    <input
      type="search"
      className={props.className}
      value={props.value}
      onChange={(event) => props.handleChange(event)}
      placeholder={props.placeholder}
    />
  )
}

const StyledInputSearch = styled(InputSearch)`
  background: #000;
  border: ${props => props.border ? `${props.border}px` : "none"};;
  color: #fff;
  font-size: 16px;
  height: 35px;
  outline: none;
  padding: 3px 10px;
  width: ${props => `${props.width}px`};
`;

InputSearch.propTypes = {
  children: PropTypes.element,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  handleChange: () => {},
};

export default StyledInputSearch;