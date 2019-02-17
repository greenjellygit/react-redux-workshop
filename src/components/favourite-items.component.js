import React from "react";
import styled from 'styled-components'
import ItemComponent from "./item.component";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import {removeFromFav} from "../actions/search.action";
import {connect} from "react-redux";

let FavouriteItemsComponent = ({favItems, removeFromFav}) => {
  const sumItems = () => {
    return favItems.map(e => e.sellingMode.price.amount).reduce((total, e) => total + Number.parseFloat(e), 0).toFixed(2);
  };
  return (
    <Container>
      <Title>Fav items ({sumItems()} zł)</Title>
      <ItemList>
        {favItems.map(e =>
          <CSSTransition key={e.id} timeout={300} classNames="fade">
            <ItemComponent item={e} handleItemClick={removeFromFav}/>
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
  favItems: state.search.favItems
});

const mapDispatchToProps = {
  removeFromFav
};

FavouriteItemsComponent = connect(mapStateToProps, mapDispatchToProps)(FavouriteItemsComponent);

export default FavouriteItemsComponent;