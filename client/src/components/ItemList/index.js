import React from "react";
import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExtensionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExtensionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";

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
const Categories = styled.section``;

const Links = styled.section``;

export const ListItem = ({ item, handleChange, expanded }) => {
  const time = moment.unix(item.time).fromNow();
  return (
    <ExpansionPanel expanded={expanded} onChange={handleChange}>
      <ExtensionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Header>
          <Score>{item.score}</Score>
          <Title>
            <h3>{item.title}</h3>
            <h5>@{item.by}</h5>
          </Title>
          <Time>{time}</Time>
        </Header>
      </ExtensionPanelSummary>
      <ExtensionPanelDetails>
        <Bottom>
          <Categories>
            <p>{item.type}</p>
          </Categories>
          <Links>
            <a href={item.url}>{item.url}</a>
          </Links>
        </Bottom>
      </ExtensionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small">Close</Button>
        <Button size="small" color="primary">
          Save
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};

class ItemList extends React.Component {
  state = {
    expandedItem: -1
  };
  handleItemChange = (event, idx) => {
    this.setState({ expandedItem: idx });
  };
  renderList = () => {
    const { items } = this.props;
    return items.map((item, idx) => (
      <ListItem
        item={item}
        key={item.id}
        handleChange={event => this.handleItemChange(event, idx)}
        expanded={idx === this.state.expandedItem}
      />
    ));
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default ItemList;
