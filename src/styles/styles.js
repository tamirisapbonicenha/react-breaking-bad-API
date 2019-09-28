import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
		margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;    
	}

  body {
    background: black;
    color: #113a2d;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1260px;
	padding: 0 15px;
`;

export const Header = styled.header`
  padding: 20px 0;
`;

export const WrapperInputSearch = styled.div`
  border-bottom: 2px solid #11493B;
`;

export const Flex = styled.div`
	align-items: ${props => props.alignItems ? props.alignItems : ""};
	display: flex;
	flex-direction: ${props => props.direction ? props.direction : "row"};
	flex-wrap: wrap;
  justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
  margin: ${props => props.margin};
`;

export const List = styled.ul`
	align-items: ${props => props.alignItems ? props.alignItems : ""};
	display: flex;
	flex-direction: ${props => props.direction ? props.direction : "row"};
	flex-wrap: wrap;
	justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
`;

export const ListItem = styled.li`
  margin: ${props => props.margin};
  width: 100%;

  @media (min-width: 768px) {
    width: 32%;
  }

  @media (min-width: 1024px) {
    width: ${props => `${props.width}%`};
  }
`;

export const Card = styled.div`
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #565656;
  border-radius: 2px;
  position: relative;
  word-wrap: break-word;
  width: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  max-height: 200px;
  min-height: 200px;
  padding: 10px;
`;





