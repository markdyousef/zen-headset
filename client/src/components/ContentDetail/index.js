import React, { Component } from "react";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { getStoryHTML } from "../../data/discover-actions";

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
  state = {
    html: null
  };
  componentDidMount() {
    const {
      item: { id }
    } = this.props;
    getStoryHTML(id)
      .then(html => this.setState({ html }))
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state.html);
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
            <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
          </ContentContainer>
      </Dialog>
    );
  }
}

export default FullScreenDialog;
