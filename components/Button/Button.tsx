import { Pressable, Text } from "react-native";
import React from "react";
import  buttonStyles  from "../../utilities/components/buttonStyles";
import { theme } from "../../utilities/theme";

interface ButtonProps {
  label?: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
  style?: object;
  textStyle?: object;
}

const Button: React.FC<ButtonProps> = ({
  label = "Save",
  onPress,
  variant = "primary",
  disabled = false,
  className = "",
  style,
  textStyle,
}) => {
  const isSecondary = variant === "secondary";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`items-center justify-center rounded-full min-w-[240px] px-10 py-4 shadow-lg text-base font-body transition-all duration-200 focus:outline-none disabled:opacity-50 ${className}`}
      style={[
        buttonStyles.baseButton,
        isSecondary ? buttonStyles.secondary : buttonStyles.primary,
        style,
      ]}
    >
      <Text
        className="text-[40px] text-center font-body text-black"
        style={[{ minWidth: 100, textAlign: 'center', fontWeight: '400', color: isSecondary ? '#222' : theme.colors.textPrimary }, textStyle]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
