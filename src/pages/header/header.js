import React from "react";
import { Image, Grid, Header, Input, Button } from "semantic-ui-react";

import { Container } from "../home/homeStyles";
export default function Home({ boxData }) {
  return (
    <Container>
      <Grid columns={4} style={{ width: "100%" }}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h1" style={{ color: "#fff" }}>
              Social Network
            </Header>
          </Grid.Column>
          <Grid.Column width={6}>
            <Input fluid icon="search" placeholder="Search..." />
          </Grid.Column>
          <Grid.Column width={3}>
            <Button content="Upload" icon="plus" labelPosition="left" />
          </Grid.Column>
          <Grid.Column width={3}>
            {/* <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" /> */}
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="tiny"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Header as="h5" style={{ color: "#fff" }}>
                    Waseem
                    <Header.Subheader>Arshad</Header.Subheader>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
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
