import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ThemeProvider } from "..";
import { Switch } from "../components/Switch/Switch";
import useTheme from "../hooks/useMode";


const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  render: () => {
    const [changeValue, setChangeValue] = useState(false);
    const mode = useTheme();

    const change = () => {
        setChangeValue(!changeValue)
        };

    return (
      <ThemeProvider value={{ theme: mode }}>
        <Switch
          check={changeValue}
          onChange={change}
        />
      </ThemeProvider>
    );
  }
};
