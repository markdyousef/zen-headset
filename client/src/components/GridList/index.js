import React, { Component } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import styled from "styled-components";
import CollectionItem from "../CollectionItem";
import { Route, Link } from "react-router-dom";
import {CircularLoader} from "../common";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: "space-around";
  overflow: hidden;
`;

const TileContainer = styled.div``;

const Tile = ({ excerpt, image }) => (
  <TileContainer>
    {/* <Image src={image&&image.src} /> */}
    <p>{excerpt || "No Excerpt"}</p>
  </TileContainer>
);

export default class extends Component {
  componentWillMount() {
    this.props.getItems();
  }
  renderCards = () => {
    const { items, isLoading } = this.props;

    if (isLoading) return <CircularLoader />

    // TODO: transform; add tile.cols etc.
    const tiles = items;

    return (
      <GridList cellHeight={160} cols={3}>
        {tiles.map(tile => (
          <GridListTile key={tile.item_id}>
            <Tile excerpt={tile.excerpt} image={tile.image} />
            <GridListTileBar
              title={tile.given_title}
              actionIcon={
                <IconButton>
                  <Link to={`/collections/${tile.item_id}`}>
                    <InfoIcon />
                  </Link>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    );
  };
  render() {
    return (
      <Container>
        {this.renderCards()}
        <Route path={"/collections/:item_id"} component={CollectionItem} />
      </Container>
    );
  }
}
