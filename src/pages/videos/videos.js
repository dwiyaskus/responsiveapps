import React from "react";
import { Image, Grid } from "semantic-ui-react";
const videos = (props) => {
  const { data } = props;
  return (
    <Grid columns={2}>
      <Grid.Column>
        <Image src={data ? data[0].flag : ""} />
      </Grid.Column>
      <Grid.Column>
        <Grid columns={2}>
          <Grid.Column>
            <Image src={data ? data[1].flag : ""} />
          </Grid.Column>
          <Grid.Column>
            <Image src={data ? data[2].flag : ""} />
          </Grid.Column>
        </Grid>
        <Grid columns={2}>
          <Grid.Column>
            <Image src={data ? data[3].flag : ""} />
          </Grid.Column>
          <Grid.Column>
            <Image src={data ? data[4].flag : ""} />
          </Grid.Column>
        </Grid>
      </Grid.Column>

      <Grid.Row columns={4}>
        <Grid.Column>
          <Image src={data ? data[5].flag : ""} />
        </Grid.Column>
        <Grid.Column>
          <Image src={data ? data[6].flag : ""} />
        </Grid.Column>
        <Grid.Column>
          <Image src={data ? data[7].flag : ""} />
        </Grid.Column>
        <Grid.Column>
          <Image src={data ? data[8].flag : ""} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default videos;
