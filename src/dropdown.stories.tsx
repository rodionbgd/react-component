import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "./dropdown";

const styles = {
  color: "red",
  fontSize: "16px",
};

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Default = () => <Dropdown style={styles} />;
