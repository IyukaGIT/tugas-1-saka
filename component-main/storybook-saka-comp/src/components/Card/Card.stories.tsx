import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { fn } from "@storybook/test";

const meta: Meta<typeof Card> = {
  title: "Molecule/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "success", "warning", "danger"],
      },
    },
    onClick: { action: "clicked" },
  },
  args: {
    variant: "light",
    label: "Card",
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Light: Story = {
  args: {
    variant: "light",
    title: "Light Theme",
    label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
};

export const Dark: Story = {
    args: {
      variant: "dark",
      title: "Dark Theme",
      label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  };