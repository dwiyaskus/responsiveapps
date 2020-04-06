import React, { Component } from "react";
import { Container, Box } from "./homeStyles";
import Videos from "../videos/videos";
import Activities from "../activities/activities";
import { Header, Grid, Divider } from "semantic-ui-react";
class section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const urlFetch = fetch("https://restcountries.eu/rest/v2/all");
    urlFetch
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resJson) => {
        this.setState({
          data: resJson,
        });
      });
  }

  render() {
    return (
      <Container>
        <Box bgColor={"#953E46"}>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2" style={{ color: "#fff" }} textAlign="left">
                  Videos
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header
                  as="h5"
                  style={{ color: "#fff", marginTop: "5px" }}
                  textAlign="right"
                >
                  Browse All Videos
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Divider style={{ backgroundColor: "#fff" }} />
          </Grid>
          {this.state.data.length > 0 ? (
            <Videos data={this.state.data} />
          ) : null}
        </Box>
        <Box bgColor={"#953E46"}>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2" style={{ color: "#fff" }} textAlign="left">
                  Activity
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header
                  as="h5"
                  style={{ color: "#fff", marginTop: "5px" }}
                  textAlign="right"
                >
                  View timeline/ filter activities
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Divider style={{ backgroundColor: "#fff" }} />
          </Grid>
          <Activities />
        </Box>
      </Container>
    );
  }
}

export default section1;
