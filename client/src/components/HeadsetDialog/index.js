import React, { Component } from "react";
import { Dialog, DialogTitle, DialogActions } from "@material-ui/core";
import { Typography, CircularProgress, Button } from "@material-ui/core";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 120px;
`;

const SettingsContainer = styled.div`
  width: 400px;
`

class HeadsetDialog extends Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }
  renderSettings = () => {
    const { isLoading } = this.state;

    // Load when connecting headset
    if (isLoading) {
      return (
        <LoadingContainer>
          <CircularProgress />
          <Typography>Connecting Headset...</Typography>
        </LoadingContainer>
      );
    }
    return (
      <SettingsContainer>
        <DialogTitle>{"Headset Settings"}</DialogTitle>
        <DialogActions>
          <Button onClick={this.props.onClose}>Close</Button>
          <Button onClick={this.props.onStart} color="primary">
            Start
          </Button>
        </DialogActions>
      </SettingsContainer>
    );
  };
  render() {
    return <Dialog open={this.props.open}>{this.renderSettings()}</Dialog>;
  }
}

export default HeadsetDialog;
