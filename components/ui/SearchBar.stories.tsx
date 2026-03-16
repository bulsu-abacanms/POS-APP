import { View } from "react-native";
import SearchBar from "./SearchBar";

const meta = {
  title: "Components/UI/SearchBar",
  component: SearchBar,
  args: {
    value: "",
    placeholder: "Search..",
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

export const Default = {
  args: {
    value: "",
    placeholder: "Search..",
    onChangeText: () => {},
    onFilterPress: () => {},
  },
  render: (args) => <SearchBar {...args} />,
};
