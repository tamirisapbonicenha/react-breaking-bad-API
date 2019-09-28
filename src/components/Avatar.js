import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const Avatar = props => {
  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.name}
    />
  )
}

const StyledAvatar = styled(Avatar)` 
  display: block; 
  width: 100%;

  @media (min-width: 768px) {
    height: ${props => `${props.height}px`};
    object-fit: cover;  
  }
`;

Avatar.propTypes = {
  name: PropTypes.string, 
  src: PropTypes.string,
};

export default StyledAvatar;