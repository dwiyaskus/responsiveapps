import React from "react";
import { List, Image } from "semantic-ui-react";
const activities = () => {
  return (
    <List>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <List.Content>
          <List.Header style={{ color: "#fff" }}>Rachel</List.Header>
          <List.Description style={{ color: "#fff" }}>
            Last seen watching Arrested Development just now.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <List.Content>
          <List.Header style={{ color: "#fff" }}>Lindsay</List.Header>
          <List.Description style={{ color: "#fff" }}>
            Last seen watching Bob's Burgers 10 hours ago.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <List.Content>
          <List.Header style={{ color: "#fff" }}>Matthew</List.Header>
          <List.Description style={{ color: "#fff" }}>
            Last seen watching The Godfather Part 2 yesterday.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <List.Content>
          <List.Header style={{ color: "#fff" }}>Jenny Hess</List.Header>
          <List.Description style={{ color: "#fff" }}>
            Last seen watching Twin Peaks 3 days ago.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <List.Content>
          <List.Header style={{ color: "#fff" }}>Veronika Ossi</List.Header>
          <List.Description style={{ color: "#fff" }}>
            Has not watched anything recently
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default activities;
