import React from "react";
import { Container, Box } from "./homeStyles";
import Videos from "../videos/videos";
import Activities from "../activities/activities";

export default function Home({ boxData }) {
  return (
    <Container>
      <Box bgColor={"#953E46"}>
        <Videos />
      </Box>
      <Box bgColor={"#953E46"}>
        <Activities />
      </Box>
    </Container>
  );
}
