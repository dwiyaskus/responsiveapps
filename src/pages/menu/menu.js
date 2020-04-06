import React from "react";
import { Grid, Header, Divider } from "semantic-ui-react";

import { Container } from "../home/homeStyles";
export default function Home() {
  return (
    <Container>
      <Grid columns={"equal"} style={{ width: "100%" }}>
        <Divider
          style={{ backgroundColor: "#fff", width: "97.7%", marginLeft: "1em" }}
        />
        <Grid.Row>
          <Grid.Column>
            <Header as="h5" style={{ color: "#fff" }}>
              Video
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header style={{ color: "#fff" }} as="h5">
              People
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header style={{ color: "#fff" }} as="h5">
              Document
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header style={{ color: "#fff" }} as="h5">
              Event{" "}
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header style={{ color: "#fff" }} as="h5">
              Communities{" "}
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header style={{ color: "#fff" }} as="h5">
              Favorites{" "}
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header style={{ color: "#fff" }} as="h5">
              Channel
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Divider style={{ backgroundColor: "#fff" }} />
      </Grid>
    </Container>
  );
}

/* <Container>
{boxData.map((box) => (
  <Box key={box.id} bgColor={box.bgColor}>
    <BoxTitle>{box.title}</BoxTitle>
    <BoxText>{box.text}</BoxText>
  </Box>
))}
</Container> */
