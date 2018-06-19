import React from "react";
import {Drawer, List, ListItem, ListItemText} from "@material-ui/core";
import WorldIcon from "@material-ui/icons/Language";
import CollectionsIcon from "@material-ui/icons/Collections";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ListContainer = styled.nav`
  width: 200px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
`;

const NavListItem = ({ onChange, route, icon }) => (
  <ListContainer>
    <List>
      <ListItem button>
        {icon}
        <Link to={"/" + route}>
          <ListItemText primary={route} onClick={() => onChange(false)} />
        </Link>
      </ListItem>
    </List>
  </ListContainer>
);

export default ({ open, onChange }) => (
  <Drawer open={open} onClose={() => onChange(false)}>
    <NavListItem onChange={onChange} route="discover" icon={<WorldIcon />} />
    <NavListItem onChange={onChange} route="collections" icon={<CollectionsIcon />} />
  </Drawer>
);
