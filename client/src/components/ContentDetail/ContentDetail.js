import React, { Component } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Chip,
  LinearProgress
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AppBarContainer = styled.nav``;

const ContentContainer = styled.div`
  margin-top: 60px;
  overflow: scroll;
`;

const LoaderContainer = styled.div`
  margin-top: 63px;
  flex-grow: 1;
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
      {/* {Object.keys(item.tags).map(tag => <Chip label={tag} key={tag} />)} */}
    </div>
  );
};

class FullScreenDialog extends Component {
  componentDidMount() {
    this.loadItem();
  }
  componentWillReceiveProps(nextProps) {
    const { isLoading, items } = nextProps;

    if (!isLoading && items.length > 0) this.loadItem();
  }
  loadItem = id => {
    const {
      match: { params },
      activeItem,
      setActive
    } = this.props;
    // if item is already active
    if (activeItem.item_id == params.item_id) return;

    setActive(params.item_id);
  };
  renderContent = () => {
    const { isLoading, activeItem } = this.props;

    if (isLoading) {
      return (
        <LoaderContainer>
          <LinearProgress color="secondary" />
        </LoaderContainer>
      );
    }
    return (
      <ContentContainer>
        <Info item={activeItem} />
      </ContentContainer>
    );
  };
  render() {
    return (
      <Dialog fullScreen open={true} TransitionComponent={Transition}>
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
        {this.renderContent()}
      </Dialog>
    );
  }
}

export default FullScreenDialog;
