import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Paragraph from "./paragraph";

export default {
  title: "Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
