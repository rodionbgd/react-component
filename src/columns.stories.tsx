import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Columns from "./columns";

export default {
  title: "Columns",
  component: Columns,
  argTypes: {
    columns: {
      options: [1, 2, 3, 4, 5],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Columns>;

const Template: ComponentStory<typeof Columns> = (args) => (
  <Columns {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: ["one", "two", "three", "four", "five"],
};
