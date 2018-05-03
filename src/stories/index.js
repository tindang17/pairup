import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Form from "../components/Form";

storiesOf("Form", module)
  .add("with text", () => <Form />)
  .add("test", () => (
    <form>
      <button onClick={action("clicked")}>Yooooo</button>
    </form>
  ))
  .add("with some emoji", () => (
    <button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  ));
