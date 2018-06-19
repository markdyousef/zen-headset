import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
`;

export const CircularLoader = () => (
  <LoadingContainer>
    <CircularProgress size={100} />
  </LoadingContainer>
);
