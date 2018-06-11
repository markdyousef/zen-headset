import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import WorldIcon from "@material-ui/icons/Language";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";

const ListContainer = styled.nav`
  width: 200px;
`;

const NavListItem = ({ onChange }) => (
  <ListContainer>
    <List>
      <ListItem button>
        <WorldIcon />
        <ListItemText primary="Discover" onClick={() => onChange(false)} />
      </ListItem>
    </List>
  </ListContainer>
);

export default ({open, onChange}) => (
  <Drawer open={open} onClose={() => onChange(false)}>
    <NavListItem onChange={onChange} />
  </Drawer>
);
