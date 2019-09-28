import React from 'react';

import styled from "styled-components";

const Footer = props => {
  return (
    <footer className={props.className}>
      <p>Feito à base de <span role="img" aria-label="coffee">☕</span> por Tamiris Bonicenha.</p>
    </footer>
  )
}

const StyledFooter = styled(Footer)`
  color: #777;
  font-size: 14px;
	margin: 50px 0 12px;
	text-align: right;
`;

export default StyledFooter;