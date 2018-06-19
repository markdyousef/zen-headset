import React, { Component } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";

const AppBarContainer = styled.nav`
`;

const ContentContainer = styled.div`
  margin-top: 60px;
  overflow: scroll;
`;

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends Component {
  render() {
    console.log(this.props);
    return (
      <Dialog
        fullScreen
        open={this.props.open}
        onClose={() => this.props.handleChange(false)}
        TransitionComponent={Transition}
      >
          <AppBarContainer>
            <AppBar>
              <Toolbar>
                <IconButton
                  onClick={() => this.props.handleChange(false)}
                  aria-label="Close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </AppBarContainer>
          <ContentContainer>
            Hello
          </ContentContainer>
      </Dialog>
    );
  }
}

export default FullScreenDialog;
