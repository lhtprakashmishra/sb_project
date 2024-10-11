// src/components/Button.stories.js
import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

// 1. Default Button
export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  variant: "default",
  size: "medium",
};

// 2. Primary Button
export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
  size: "medium",
};

// 3. Success Button
export const Success = Template.bind({});
Success.args = {
  label: "Success Button",
  variant: "success",
  size: "medium",
};

// 4. Danger Button
export const Danger = Template.bind({});
Danger.args = {
  label: "Danger Button",
  variant: "danger",
  size: "medium",
};

// 5. Warning Button
export const Warning = Template.bind({});
Warning.args = {
  label: "Warning Button",
  variant: "warning",
  size: "medium",
};

// 6. Info Button
export const Info = Template.bind({});
Info.args = {
  label: "Info Button",
  variant: "info",
  size: "medium",
};

// 7. Disabled Button
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  variant: "primary",
  size: "medium",
  disabled: true,
};

// 8. Large Button
export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  variant: "primary",
  size: "large",
};

// 9. Small Button
export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  variant: "primary",
  size: "small",
};

// 10. Button with Icon
export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "With Icon",
  variant: "primary",
  size: "medium",
  icon: "❤️",
};

// 11. Button with green text and border
export const GreenTextBorder = Template.bind({});
GreenTextBorder.args = {
  label: "Green Text & Border",
  variant: "green-text-border",
  size: "medium",
};

// 12. Button with green background and white text
export const GreenBackground = Template.bind({});
GreenBackground.args = {
  label: "Green Background",
  variant: "green-bg",
  size: "medium",
};

// 13. Button with blue border and green text
export const BlueBorderGreenText = Template.bind({});
BlueBorderGreenText.args = {
  label: "Blue Border & Green Text",
  variant: "blue-border-green-text",
  size: "medium",
};

// 14. Outline button with green text
export const OutlineGreen = Template.bind({});
OutlineGreen.args = {
  label: "Outline Green Text",
  variant: "outline-green",
  size: "medium",
};
