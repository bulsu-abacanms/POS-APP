import { Pressable, Text } from "react-native";
import React from "react";
import  buttonStyles  from "../../utilities/components/buttonStyles";
import { theme } from "../../utilities/theme";
import { View } from "react-native";

interface ButtonProps {
  label?: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
  style?: object;
  textStyle?: object;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  label = "Save",
  onPress,
  variant = "primary",
  disabled = false,
  className = "",
  style,
  textStyle,
  icon,
  iconPosition = "left",
}) => {
  const isSecondary = variant === "secondary";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`items-center justify-center rounded-full min-w-[120px] px-6 py-2 shadow-lg text-base font-body transition-all duration-200 focus:outline-none disabled:opacity-50 flex-row ${className}`}
      style={[
        buttonStyles.baseButton,
        isSecondary ? buttonStyles.secondary : buttonStyles.primary,
        style,
      ]}
    >
      {icon && iconPosition === "left" && (
        <View style={{ marginRight: 8 }}>{icon}</View>
      )}
      <Text
        className="text-center font-body text-black"
        style={[{ textAlign: 'center', fontWeight: '400', color: isSecondary ? '#222' : theme.colors.textPrimary }, textStyle]}
      >
        {label}
      </Text>
      {icon && iconPosition === "right" && (
        <View style={{ marginLeft: 8 }}>{icon}</View>
      )}
    </Pressable>
  );
};

export default Button;
