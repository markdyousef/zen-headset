import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Chip
} from "@material-ui/core";
import styled from "styled-components";

const CardContainer = styled.section`
  min-height: 500px;
  /* background: #ddda; */
`;

const Image = styled.img`
  max-height: 200px;
`;

const Content = styled(CardContent)`
  display: flex;
`;

const Info = styled.section`
  padding: 20px;
`;

export default ({ item }) => {
  return (
    <CardContainer>
      <Card raised>
        <Content>
          <Image src={item.image && item.image.src} />
          <Info>
            <h1>{item.given_title}</h1>
            <p>{item.excerpt}</p>
            <a href={item.given_url}>{item.given_url}</a>
            {item.tags &&
              Object.keys(item.tags).map(tag => <Chip label={tag} key={tag} />)}
          </Info>
        </Content>
        <CardActions>
          <Button>Analyze</Button>
          <Button>Edit</Button>
        </CardActions>
      </Card>
    </CardContainer>
  );
};
