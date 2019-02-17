import React, {Component} from 'react';
import ItemComponent from "../components/item.component";
import {Redirect} from "react-router-dom";
import styled from "styled-components";
import FavouriteItemsComponent from "../components/favourite-items.component";
import SpinnerComponent from "../components/spinner.component";
import {addToFav, clearItems, findItems, removeFromFav} from "../actions/search.action";
import {connect} from "react-redux";

class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemName: null
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.clearItems();
    this.props.findItems(this.state.itemName);
  };

  handleInputChange = (e) => {
    this.setState({
      itemName: e.target.value
    });
  };

  handleItemClick = (item) => {
    if (!this.props.favItems.map(e => e.id).includes(item.id)) {
      this.props.addToFav(item);
    } else {
      this.props.removeFromFav(item);
    }
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to='/'/>
    }

    return (
      <Container>
        <FavouriteItemsComponent/>
        <SearchPanelContainer>
          <h1>Find what you want!</h1>
          <form onSubmit={this.onSubmit}>
            <input type='text' placeholder='Type offer name' onChange={this.handleInputChange}/>
            <button type='submit'>Search</button>
          </form>
          {<h4>Found {this.props.totalCount} items.</h4>}
        </SearchPanelContainer>
        <ItemList active={this.props.items.length > 0}>
          {this.props.items.map(e =>
            <ItemComponent key={e.id} item={e} handleItemClick={this.handleItemClick}/>
          )}
        </ItemList>
        <SpinnerComponent inProgress={this.state.inProgress}/>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

const SearchPanelContainer = styled.div`
  text-align: center;
  margin: 40px;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1000px;
  
  transition: opacity 0.4s;
  opacity: ${({active}) => active ? 1 : 0}
`;

const mapStateToProps = state => ({
  items: state.search.items,
  totalCount: state.search.totalCount,
  favItems: state.search.favItems,
  isAuthenticated: state.authenticate.isAuthenticated,
});

const mapDispatchToProps = {
  findItems,
  clearItems,
  addToFav,
  removeFromFav,
};

SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

export default SearchContainer;