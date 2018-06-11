import React, { Component } from "react";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { getStoryHTML } from "../../data/discover-actions";

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
        <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
      </Dialog>
    );
  }
}

export default FullScreenDialog;
