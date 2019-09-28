import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const Text = props => {
  return (
    <p
      className={props.className}>
      {props.children}
      {props.text}
    </p>
  )
}

const StyledText = styled(Text)`
	color: ${props => props.color};
	font-size: ${props => `${props.fontSize}px`};
	margin: ${props => props.margin};
`;

Text.propTypes = {
  children: PropTypes.any,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default StyledText;