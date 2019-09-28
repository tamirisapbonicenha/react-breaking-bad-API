import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const Button = props => {
  return (
    <button 
      className={props.className} 
      onClick={(event) => props.handleClick(event)}> 
      {props.text}
    </button>
  )
}

const StyledButton = styled(Button)`
  background: ${props => props.background};
  border: ${props => props.border ? props.border : "none"};
  border-radius: ${props => props.borderRadius ? props.borderRadius : "none"};
  color: ${props => props.color};
  cursor: pointer;
  font-size: ${props => `${props.fontSize}px`};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  outline: none;
  
  &:hover {
    background-color: ${props => props.backgroundHover};
  }  
`;

Button.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  handleClick: () => {},
};


export default StyledButton;