import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const Tag = props => {
  return (
    <p 
      className={props.className}>
      {props.text} 
    </p>
  )
}

const getStyle = tagClass => {
  if (tagClass === 'presumed dead') {
    return `
      background: #da8e2b;
    `;
  } 
  if (tagClass === 'alive') {
    return `
      background: #0A7A42;
    `;    
  } 
  if (tagClass === 'deceased') {
    return `
      background: #F66421;
    `;     
  } 
  if (tagClass === 'unknow')  {
    return `
      background: #000;
    `;      
  }
  return `
    background: #000;
  `; 
}

const StyledTag = styled(Tag)`
  ${({ tagClass }) => getStyle(tagClass)};
  color: #fff;
  padding: 3px 8px;
  position: absolute;
  right: 0;
  top: 10px;
`;

Tag.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default StyledTag;