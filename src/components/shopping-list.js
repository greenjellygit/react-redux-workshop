import React from "react";
import Item from "./item";
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import {removeFromList} from "../actions/search.action";
import {connect} from "react-redux";
import {getItemImageUrl, getItemPice, sumItems} from "../allegro-api.utils";

let ShoppingList = ({selectedItems, removeFromList}) => {
  return (
    <div className='shopping-list-container'>
      <h4 className='shopping-list-title'>Shopping list ({sumItems(selectedItems)} zł)</h4>
      <TransitionGroup className='shopping-list'>
        {selectedItems.map(item =>
          <CSSTransition key={item.id} timeout={300} classNames="fade">
            <Item key={item.id} name={item.name} price={getItemPice(item)} imageUrl={getItemImageUrl(item)} item={item} handleItemClick={removeFromList}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
};

const mapStateToProps = (state) => ({
  selectedItems: state.search.selectedItems
});

const mapDispatchToProps = {
  removeFromList
};

ShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

export default ShoppingList;