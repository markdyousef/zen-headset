import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  width: 100%;
  max-height: 200px;
  background: #fff;
  border: 1px solid #000;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  align-items: baseline;
  background: #fafafa;
  h3 {
    font-size: 14px;
    margin: 5px;
    font-weight: normal;
  }
  h5 {
    font-size: 12px;
    margin: 5px;
    font-weight: bold;
  }
`;

const Score = styled.span`
  position: absolute;
  right: 0;
  top: 0;
`;

const Categories = styled.section``;

const Links = styled.section``;

export const ListItem = ({ item }) => {
  return (
    <ItemContainer>
      <Header>
        <h3>{item.title}</h3>
        <h5>{item.by}</h5>
        <p>{item.time}</p>
      </Header>
      <Score>
        <b>{item.score}</b>
      </Score>
      <Categories>
        <p>{item.type}</p>
      </Categories>
      <Links>
        <a href={item.url}>{item.url}</a>
      </Links>
    </ItemContainer>
  );
};

class ItemList extends React.Component {
  renderList = () => {
    const { items } = this.props;
    return items.map(item => <ListItem item={item} key={item.id} />);
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default ItemList;
