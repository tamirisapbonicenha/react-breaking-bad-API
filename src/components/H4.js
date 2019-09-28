import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const H4 = props => {
  return (
    <h4 
      className={props.className}>
      {props.children}
      {props.text}
    </h4>
  )
}

const StyledH4 = styled(H4)`
  color: ${props => props.color};
  font-size: ${props => `${props.fontSize}px`};
  margin: ${props => props.margin};
`;

H4.propTypes = {
  children: PropTypes.element,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default StyledH4;