import React, { Component } from "react";
import { fetchData } from "../data/collect-actions";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: "space-around";
  overflow: hidden;
`;

const TileContainer = styled.div``;

const Image = styled.img`
  height: 100%;
`;

const Tile = ({ excerpt, image }) => (
  <TileContainer>
    {/* <Image src={image&&image.src} /> */}
    <p>{excerpt || "No Excerpt"}</p>
  </TileContainer>
);

export default class extends Component {
  state = {
    items: null
  };
  componentDidMount() {
    fetchData()
      .then(data => {
        const keys = Object.keys(data.list);
        const items = keys.map(key => data.list[key]);
        this.setState({ items });
      })
      .catch(err => console.log(err));
  }
  renderCards = () => {
    const { items } = this.state;
    if (!items) return null;

    // TODO: transform; add tile.cols etc.
    const tiles = items;
    console.log(tiles);

    return (
      <GridList cellHeight={160} cols={3}>
        {tiles.map(tile => (
          <GridListTile key={tile.item_id}>
            <Tile excerpt={tile.excerpt} image={tile.image}/>
            <GridListTileBar
              title={tile.given_title}
              actionIcon={
                <IconButton>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    );
  };
  render() {
    return <Container>{this.renderCards()}</Container>;
  }
}
