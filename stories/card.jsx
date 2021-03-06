import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../src/Button";
import Card from "../src/Card";
import Grid from "../src/Grid";


export const cardStories =
  storiesOf("Card", module)
    .add("blank ", () => <Card.Body size={"md"} shadow={10} />)
    .add("only text body", () => (
      <Card.Body size={"md"} shadow={10}>
        <Card.Content>
          A card with just some text.
        </Card.Content>
      </Card.Body>
    ))
    .add("text body with titling", () => (
      <Card.Body size={"md"} shadow={10}>
        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
          A card with just some text that describes the given card.
        </Card.Content>
      </Card.Body>
    ))
    .add("text body with titling (auto sized)", () => (
      <Card.Body size={"md"} shadow={10} width={"auto"}>
        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
          A card with just some text that describes the given card.
        </Card.Content>
      </Card.Body>
    ))
    .add("shadows" ,() => (
      <Grid.Column gap={32} width={"auto"}>
        <Card.Body size={"md"} shadow={10}>
          <Card.Content title={"Shadow 10"} subtitle={"Subtitle"}>
            A card with a shadow of value 10.
          </Card.Content>
        </Card.Body>
        <Card.Body size={"md"} shadow={20} width={"auto"}>
          <Card.Content title={"Shadow 20"} subtitle={"Subtitle"}>
            A card with a shadow of value 20.
          </Card.Content>
        </Card.Body>
        <Card.Body size={"md"} shadow={30} width={"auto"}>
          <Card.Content title={"Shadow 30"} subtitle={"Subtitle"}>
            A card with a shadow of value 30.
          </Card.Content>
        </Card.Body>
      </Grid.Column>
    ))
    .add("only header", () => (
      <Card.Body size={"md"} shadow={10}>
        <Card.Header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
        </Card.Header>
      </Card.Body>
    ))
    .add("only header (auto sized)", () => (
      <Card.Body size={"md"} shadow={10} width={"auto"}>
        <Card.Header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
        </Card.Header>
      </Card.Body>
    ))
    .add("header with content button", () => (
      <Card.Body type={"button"} size={"md"} shadow={10}>
        <Card.Header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
        </Card.Header>
        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
          A card with just some text that describes the given card.
        </Card.Content>
      </Card.Body>
    ))
    .add("header with content button (auto sized)", () => (
      <Card.Body type={"button"} size={"md"} shadow={10} width={"auto"}>
        <Card.Header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
        </Card.Header>
        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
          A card with just some text that describes the given card.
        </Card.Content>
      </Card.Body>
    ))
    .add("header with content and action (auto sized)", () => (
      <Card.Body size={"md"} shadow={10} width={"auto"}>
        <Card.Header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
        </Card.Header>
        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
          A card with just some text that describes the given card.
          <Card.Actions>
            <Button status={"primary"}>Some Action</Button>
          </Card.Actions>
        </Card.Content>
      </Card.Body>
    ))
    .add("header with content and 2 actions (auto sized)", () => (
      <Card.Body size={"md"} shadow={10} width={"auto"}>
        <Card.Header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
        </Card.Header>
        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
          A card with just some text that describes the given card.
          <Card.Actions>
            <Button>Default Action</Button>
            <Button status={"primary"}>Primary Action</Button>
          </Card.Actions>
        </Card.Content>
      </Card.Body>
    ))
    .add("onClick", () => (
      <Card.Body
        type={"button"}
        size={"md"}
        shadow={10}
        onClick={() => alert("Hello, Firefox!")}
        width={"auto"}
      >
        <Card.Header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
        </Card.Header>
        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
          A card with just some text that describes the given card.
        </Card.Content>
      </Card.Body>
    ));
