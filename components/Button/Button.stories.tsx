import { View } from "react-native";
import Button from "./Button";


const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    isSecondary: {
      control: { type: "boolean" },
      description: "Toggle secondary color",
      defaultValue: false,
    },
  },
  args: {
    label: "Save",
    isSecondary: false,
  },
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center bg-gray-400 p-6">
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const Save = {
  args: {
    label: "Save",
    isSecondary: false,
    onPress: () => {},
  },
  render: (args) => <Button {...args} variant={args.isSecondary ? "secondary" : "primary"} />,
};

export const Charge = {
  args: {
    label: "Charge",
    isSecondary: true,
    onPress: () => {},
  },
  render: (args) => <Button {...args} variant={args.isSecondary ? "secondary" : "primary"} />,
};
