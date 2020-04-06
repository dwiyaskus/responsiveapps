import React from "react";
import { Grid, Header, Button, Divider } from "semantic-ui-react";

import { Container } from "../home/homeStyles";
export default function Home({ boxData }) {
  return (
    <Container>
      <Grid style={{ width: "100%" }}>
        <Divider
          style={{ backgroundColor: "#fff", width: "97.7%", marginLeft: "1em" }}
        />
        <Grid.Row>
          <Button icon="twitter" />
          <Button icon="facebook f" />
          <Button icon="linkedin alternate" />
        </Grid.Row>
        <Grid.Row>
          <Grid columns={"equal"} style={{ width: "100%" }}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h5" style={{ color: "#fff" }}>
                  About
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" style={{ color: "#fff" }}>
                  For Bussiness
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" style={{ color: "#fff" }}>
                  Suggestion
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" style={{ color: "#fff" }}>
                  Help & FAQs{" "}
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" style={{ color: "#fff" }}>
                  Contact{" "}
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" style={{ color: "#fff" }}>
                  Pricing{" "}
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <Header as="h5" style={{ color: "#fff" }}>
            @copyright 2013 companyname.inc
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Header as="h5" style={{ color: "#fff" }}>
            Privacy / Term
          </Header>
        </Grid.Row>
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
