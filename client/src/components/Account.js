import React, { Component } from "react";
import {
  Typography
} from "@material-ui/core";
import styled from "styled-components";
import IntegrationCard from "./IntegrationCard";

const IntegrationsContainer = styled.section`
  height: 400px;
  padding: 20px;
`;

export default class extends Component {
  render() {
    return (
      <div>
        <IntegrationsContainer>
            <Typography>Integrations</Typography>
          <IntegrationCard />
        </IntegrationsContainer>
      </div>
    );
  }
}
