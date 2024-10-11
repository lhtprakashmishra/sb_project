// src/components/Input.stories.js
import React from "react";
import Input from "./input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

// 1. Default Input
export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Default Input",
  variant: "default",
  size: "medium",
};

// 2. Primary Input
export const Primary = Template.bind({});
Primary.args = {
  type: "text",
  placeholder: "Primary Input",
  variant: "primary",
  size: "medium",
};

// 3. Input with border and green text
export const GreenBorder = Template.bind({});
GreenBorder.args = {
  type: "text",
  placeholder: "Green Border Input",
  variant: "green-border",
  size: "medium",
};

// 4. Input with background color
export const BackgroundInput = Template.bind({});
BackgroundInput.args = {
  type: "text",
  placeholder: "Colored Background Input",
  variant: "colored-bg",
  size: "medium",
};

// 5. Disabled Input
export const Disabled = Template.bind({});
Disabled.args = {
  type: "text",
  placeholder: "Disabled Input",
  variant: "primary",
  size: "medium",
  disabled: true,
};

// 6. Small Input
export const Small = Template.bind({});
Small.args = {
  type: "text",
  placeholder: "Small Input",
  variant: "primary",
  size: "small",
};

// 7. Large Input
export const Large = Template.bind({});
Large.args = {
  type: "text",
  placeholder: "Large Input",
  variant: "primary",
  size: "large",
};

// 8. Password Input
export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Password Input",
  variant: "primary",
  size: "medium",
};

// 9. Number Input
export const Number = Template.bind({});
Number.args = {
  type: "number",
  placeholder: "Number Input",
  variant: "primary",
  size: "medium",
};

// 10. Input with blue border and green text
export const BlueBorderGreenText = Template.bind({});
BlueBorderGreenText.args = {
  type: "text",
  placeholder: "Blue Border & Green Text",
  variant: "blue-border-green-text",
  size: "medium",
};
