
import { View, TextInput, Pressable, Image } from "react-native";
import React from "react";
import  searchBarStyles  from "../../utilities/components/searchBarStyles";

interface SearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onFilterPress?: () => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  style?: object;
  inputStyle?: object;
  filterButtonStyle?: object;
  filterIconStyle?: object;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value = "",
  onChangeText,
  onFilterPress,
  placeholder = "Search",
  className = "",
  inputClassName = "",
  style,
  inputStyle,
  filterButtonStyle,
  filterIconStyle,
}) => {
  return (
    <View
      className={`flex-row items-center rounded-full bg-white shadow-lg ${className}`}
      style={[searchBarStyles.container, style]}
    >
      <Image
        source={require("../../assets/search.png")}
        style={searchBarStyles.icon}
        resizeMode="contain"
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#A3A3A3"
        className={inputClassName}
        style={[searchBarStyles.input, inputStyle]}
      />
      <Pressable
        onPress={onFilterPress}
        style={[searchBarStyles.filterButton, filterButtonStyle]}
      >
        <Image
          source={require("../../assets/filter.png")}
          style={[searchBarStyles.filterIcon, filterIconStyle]}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

export default SearchBar;
