import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const H3 = props => {
  return (
    <h3 
      className={props.className}>
      {props.children}
      {props.text}
    </h3>
  )
}

const StyledH3 = styled(H3)`
  color: ${props => props.color};
  font-size: ${props => `${props.fontSize}px`};
  margin: ${props => props.margin};
`;

H3.propTypes = {
  children: PropTypes.element,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};


export default StyledH3;