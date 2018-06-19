import React, { Component } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Chip
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AppBarContainer = styled.nav``;

const ContentContainer = styled.div`
  margin-top: 60px;
  overflow: scroll;
`;

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const Info = ({ item }) => {
  return (
    <div>
      <p>{item.excerpt}</p>
      <h1>{item.given_title}</h1>
      <a href={item.given_url}>{item.given_url}</a>
      <img src={item.image && item.image.src} />
      {Object.keys(item.tags).map(tag => <Chip label={tag} key={tag} />)}
    </div>
  );
};

class FullScreenDialog extends Component {
  render() {
    console.log(this.props);
    return (
      <Dialog
        fullScreen
        open={true}
        // onClose={() => this.props.handleChange(false)}
        TransitionComponent={Transition}
      >
        <AppBarContainer>
          <AppBar>
            <Toolbar>
              <Link to="/collections">
                <IconButton aria-label="Close">
                  <CloseIcon />
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>
        </AppBarContainer>
        <ContentContainer>
          {/* <Info item={this.props.item}/> */}
        </ContentContainer>
      </Dialog>
    );
  }
}

export default FullScreenDialog;
