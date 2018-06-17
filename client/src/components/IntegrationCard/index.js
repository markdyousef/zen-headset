import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button
} from "@material-ui/core";
import styled from "styled-components";
import pocketImage from "../../assets/pocket.png";
import { requestToken, convertToken } from "../../data/collect-actions";

const CardContainer = styled.div`
  width: 280px;
  height: 200px;
`;

const IntImage = styled.img`
  width: 100%;
`

/**
 * Pocket Integration Card
 */
export default class extends Component {
  state = {
    isConnected: false
  };
  componentWillMount() {
    const accessToken = localStorage.getItem("access_token");
    console.log(accessToken);
    if (typeof accessToken == "string") {
      this.setState({ isConnected: true });
    }
  }
  handleConnect = async () => {
    // get request_token
    const token = await requestToken();
    // redirect to pocket auth page
    const redirectUri = "http://localhost:3000/";
    const url = `https://getpocket.com/auth/authorize?request_token=${token}&redirect_uri=${redirectUri}`;
    window.open(url);
    // transform request_token to access_token
    const accessToken = await convertToken(token);
    // save to localstorage and server
    localStorage.setItem("access_token", accessToken);
  };
  render() {
    const { isConnected } = this.state;
    return (
      <CardContainer>
        <Card>
          <CardContent>
            <IntImage src={pocketImage} />
          </CardContent>
          <CardActions>
            {isConnected ? (
              <Button>
                Disconnect
              </Button>
            ) : (
              <Button color="primary" onClick={this.handleConnect}>
                Connect
              </Button>
            )}
            <Button>Learn more</Button>
          </CardActions>
        </Card>
      </CardContainer>
    );
  }
}
