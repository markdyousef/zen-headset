import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelActions,
  ExpansionPanelSummary,
  Chip,
  CircularProgress
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";
import styled from "styled-components";

const LoaderContainer = styled.section`
  z-index: 999;
  height: 150px;
  width: 100%;
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = () => <LoaderContainer>
  <CircularProgress />
</LoaderContainer>;
/**
 * Expansion Panel Styles
 */
const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: baseline;
  position: relative;
  justify-content: space-between;
  h3 {
    font-size: 14px;
    margin: 5px;
    font-weight: normal;
  }
  h5 {
    font-size: 12px;
    margin: 5px;
    font-weight: bold;
  }
`;

const ScoreContainer = styled.span`
  color: #ddd;
  margin-right: 10px;
  max-width: 50px;
`;

const Score = ({ score }) => (
  <ScoreContainer>
    <Chip label={score} />
  </ScoreContainer>
);

const Title = styled.div`
  width: 100%;
`;

const Time = styled.span`
  min-width: 100px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Panel = styled(ExpansionPanel)`
  position: relative;
`;

export const ListItem = ({
  item,
  handleChange,
  expanded,
  handleSave,
  isLoading
}) => {
  const time = moment.unix(item.time).fromNow();
  return (
    <Panel expanded={expanded} onChange={handleChange}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Header>
          <Score score={item.score} />
          <Title>
            <h3>
              <Link href={item.url} target="_blank">
                {item.title}
              </Link>
            </h3>
            <h5>@{item.by}</h5>
          </Title>
          <Time>{time}</Time>
        </Header>
      </ExpansionPanelSummary>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small" color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button size="small">Close</Button>
      </ExpansionPanelActions>
      {isLoading && <Loader />}
    </Panel>
  );
};

export default ListItem;
