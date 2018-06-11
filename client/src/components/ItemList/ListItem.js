import React from "react";
import {ExpansionPanel, ExpansionPanelActions,ExpansionPanelDetails, ExpansionPanelSummary} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";
import styled from "styled-components";

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

const Score = styled.span`
  color: #ddd;
  margin-right: 10px;
`;

const Title = styled.span`
  width: 100%;
`;

const Time = styled.span`
  min-width: 100px;
`;

const Bottom = styled.section``;

const Links = styled.section``;

/**
 * ListItem Component
 *
 * @param {item} param0
 * @param {handleChange} param1
 * @param {expanded} param2
 * @param {openDetail} param3
 */
export const ListItem = ({ item, handleChange, expanded,  openDetail}) => {
  const time = moment.unix(item.time).fromNow();
  return (
    <ExpansionPanel expanded={expanded} onChange={handleChange}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Header>
          <Score>{item.score}</Score>
          <Title>
            <h3>{item.title}</h3>
            <h5>@{item.by}</h5>
          </Title>
          {/* {categories} */}
          <Time>{time}</Time>
        </Header>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Bottom>
          Summary...
          <Button size="small" onClick={openDetail}>Read</Button>
          {/* <Links>
            <a href={item.url}>Read</a>
          </Links> */}
        </Bottom>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small">Close</Button>
        <Button size="small" color="primary">
          Later
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};

export default ListItem;
