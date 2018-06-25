import React, { Component } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  LinearProgress
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InfoCard from "./InfoCard";

const AppBarContainer = styled.nav``;

const ContentContainer = styled.div`
  margin-top: 60px;
  overflow: scroll;
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 800px;
`;

const LoaderContainer = styled.div`
  margin-top: 63px;
  flex-grow: 1;
`;

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends Component {
  componentDidMount() {
    this.loadItem();
    this.props.getAnalysis();
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
        <InfoCard item={activeItem} />
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
