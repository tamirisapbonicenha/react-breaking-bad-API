import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCharacters } from './actions/characterActions';

import api from './services/api';

import _ from "lodash";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from './components/Logo';
import InputText from './components/InputSearch';
import Avatar from './components/Avatar';

import H3 from './components/H3';
import H4 from './components/H4';
import Text from './components/Text';
import Tag from './components/Tag';
import Button from './components/Button';

import Footer from './components/Footer';


import { GlobalStyle, Container, Header, WrapperInputSearch, Flex, List, ListItem, Card, CardBody } from './styles/styles';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      charactersPerPage: 12,
      value: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    api.get(`characters`)
    .then((response) => {
      this.props.fetchCharacters(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleSearch(event) {
    this.setState({
      value: event.target.value,
    }, _.debounce(() => {
      api.get(`characters?name=${this.state.value}`)
      .then((response) => {
        this.props.fetchCharacters(response.data);
        this.setState({
          currentPage: 1,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
    }, 1000));
  }

  handleClick(value) {
    this.setState({
      currentPage: Number(value)
    });
  }

  render() {
    const { currentPage, charactersPerPage } = this.state;
    const { characters, searching } = this.props;

    // Lógica para paginação
    const indexOfLastChar = currentPage * charactersPerPage;
    const indexOfFirstChar = indexOfLastChar - charactersPerPage;
    const currentcharacters = characters.slice(indexOfFirstChar, indexOfLastChar);

    // Lógica para número de páginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(characters.length / charactersPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <GlobalStyle />

        <Container>
          {searching}
          <Header>
            <Flex justifyContent="space-between" alignItems="center">
              <Logo />
              <WrapperInputSearch>
                <InputText width={220} value={this.state.value} placeholder="Buscar personagem" handleChange={this.handleSearch} />
                <FontAwesomeIcon icon="search" style={{ marginLeft: 10 }}/>
              </WrapperInputSearch>
            </Flex>
          </Header>
          {currentcharacters.length > 0 || searching === false ? (
            <List>
              {currentcharacters.map((char, index) => (
                <ListItem key={index} margin={"5px"} width={24}>
                  <Card>
                    <Avatar height={400} src={char.img} name={char.name} />
                    <Flex direction="column">
                      <CardBody>
                        <H3 fontSize={20} margin={"5px 0"} text={`${char.name} (${(char.nickname)})`}>
                          <FontAwesomeIcon icon="user" style={{ marginRight: 10 }}/>
                        </H3>
                        <H4 fontSize={15} margin={"5px 0"} text={char.birthday}>
                          <FontAwesomeIcon icon="birthday-cake" style={{ marginRight: 10 }}/>
                        </H4>
                        <Text fontSize={15} margin={"5px 0"} text={char.occupation.join(', ')}>
                          <FontAwesomeIcon icon="briefcase" style={{ marginRight: 10 }}/>
                        </Text>
                        <Text fontSize={15} margin={"5px 0"} text={char.appearance.join(', ')}>
                          <FontAwesomeIcon icon="tv" style={{ marginRight: 10 }}/>
                        </Text>
                        <Tag tagClass={char.status.toLowerCase()} text={char.status.toLowerCase()} />
                      </CardBody>
                    </Flex>
                  </Card>
                </ListItem>
              ))}
            </List> ) : (
            <Flex justifyContent="center" alignItems="center">
              <Text color={"#fff"} fontSize={22} margin={"5px 0"}>Não foi encontrado nenhum personagem :(</Text>
            </Flex>
          )}
          <Flex justifyContent="center" margin={"40px 0"}>
            {pageNumbers.map((number, index) => (
              <Button 
                background={this.state.currentPage === number ? "#676767" : "#07734e"}
                backgroundHover={this.state.currentPage === number ? "#888888" : "#408d64"}
                borderRadius={"2px"}
                color={"white"}
                fontSize={18}
                margin={"0 5px"}
                padding={"10px 15px"}           
                key={index} 
                text={number} 
                handleClick={() => this.handleClick(number)} 
              />
            ))}
          </Flex>
          <Footer />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  characters: store.charactersReducer.characters,
  searching: store.charactersReducer.searching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCharacters }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
