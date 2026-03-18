import { View, TextInput, Pressable, Image } from "react-native";
import React from "react";
import searchBarStyles from "../../utilities/components/searchBarStyles";

interface SearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onFilterPress?: () => void;
  onQRPress?: () => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value = "",
  onChangeText,
  onFilterPress,
  onQRPress,
  placeholder = "Search..",
}) => {
  return (
    <View style={searchBarStyles.mainWrapper}>
      <View style={searchBarStyles.container}>
        <Image
          source={require("../../assets/search.png")}
          style={searchBarStyles.searchIcon}
          resizeMode="contain"
        />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#A3A3A3"
          style={searchBarStyles.input}
        />
        <Pressable onPress={onFilterPress} style={searchBarStyles.filterCircle}>
          <Image
            source={require("../../assets/filter.png")}
            style={searchBarStyles.filterIcon}
            resizeMode="contain"
          />
        </Pressable>
      </View>

      <Pressable onPress={onQRPress} style={searchBarStyles.qrButton}>
        <Image
          source={require("../../assets/QR.png")}
          style={searchBarStyles.qrIcon}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

export default SearchBar;