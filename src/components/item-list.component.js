import React from "react";
import styled from 'styled-components'
import ItemComponent from "./item.component";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import {removeFromList} from "../actions/search.action";
import {connect} from "react-redux";

let ItemListComponent = ({selectedItems, removeFromList}) => {
  const sumItems = () => {
    return selectedItems.map(e => e.sellingMode.price.amount).reduce((total, e) => total + Number.parseFloat(e), 0).toFixed(2);
  };
  return (
    <Container>
      <Title>Shopping list ({sumItems()} zł)</Title>
      <ItemList>
        {selectedItems.map(e =>
          <CSSTransition key={e.id} timeout={300} classNames="fade">
            <ItemComponent item={e} handleItemClick={removeFromList}/>
          </CSSTransition>
        )}
      </ItemList>
    </Container>
  )
};

const ItemList = styled(TransitionGroup)`
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
    margin-left: 10px;
  `;

const Container = styled.div`
    position: fixed;
    left: 0;
    width: 258px;
    overflow-y: scroll;
    height: 100%;
    background-color: #101010;
    z-index: 1;
    overflow-x: hidden;
  `;

const mapStateToProps = (state) => ({
  selectedItems: state.search.selectedItems
});

const mapDispatchToProps = {
  removeFromList
};

ItemListComponent = connect(mapStateToProps, mapDispatchToProps)(ItemListComponent);

export default ItemListComponent;