import React, {Component} from "react";
import {getItemImageUrl, getItemPice} from "../allegro-api.utils";
import Spinner from "./spinner";
import {clearItems, findItems} from "../actions/search.action";
import connect from "react-redux/es/connect/connect";
import Item from "./item";

class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      itemName: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      itemName: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.clearItems();
    this.props.findItems(this.state.itemName);
  };

  render() {
    return (
      <div className='search-form-container'>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Type offer name' onChange={this.handleInputChange}/>
          <button type='submit'>Search</button>
        </form>
        <div className='search-form-item-list'>
          {this.props.itemList.map((item) => (
            <Item key={item.id} name={item.name} price={getItemPice(item)} imageUrl={getItemImageUrl(item)}
                           item={item} handleItemClick={this.props.handleItemClick}/>
          ))}
        </div>
        <Spinner inProgress={this.props.inProgress}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  itemList: state.search.itemList,
  inProgress: state.ui.isRequestInProgress
});

const mapDispatchToProps = {
  clearItems,
  findItems
};

SearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default SearchForm;
