import React from 'react';
import styled from "styled-components";

import LogoImage from '../images/logo.jpg';

const Logo = props => {
  return (
    <img className={props.className} src={LogoImage} alt="Breaking Bad logo"  />
  )
}

const StyledLogo = styled(Logo)`
  display: block;
  max-width: 100%;
`;

export default StyledLogo;