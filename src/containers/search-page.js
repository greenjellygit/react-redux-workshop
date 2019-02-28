import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import ShoppingList from "../components/shopping-list";
import {addToList, clearItems, findItems, removeFromList} from "../actions/search.action";
import {connect} from "react-redux";
import SearchForm from "../components/search-form";

class SearchPage extends Component {

  handleItemClick = (item) => {
    if (!this.props.selectedItems.map(e => e.id).includes(item.id)) {
      this.props.addToList(item);
    } else {
      this.props.removeFromList(item);
    }
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to='/'/>
    }

    return (
      <div>
        <ShoppingList/>
        <div className='search-container-header'>
          <h1>Find what you want!</h1>
          {<h4>Found {this.props.totalCount} items.</h4>}
        </div>
        <SearchForm handleItemClick={this.handleItemClick}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemList: state.search.itemList,
  totalCount: state.search.totalCount,
  selectedItems: state.search.selectedItems,
  isAuthenticated: state.authenticate.isAuthenticated,
});

const mapDispatchToProps = {
  findItems,
  clearItems,
  addToList,
  removeFromList,
};

SearchPage = connect(mapStateToProps, mapDispatchToProps)(SearchPage);

export default SearchPage;