import React, { useState } from 'react';
import { View, Text,} from 'react-native';
import { Input } from '../components/ui/Input';
import { TouchableOpacity } from 'react-native';
import { buttonStyles } from '../utilities/components/buttonStyles';
import { loginStyles } from '../utilities/pages/loginStyles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logoContainer}>
        <Text style={loginStyles.logoTitle}>SwiftPos</Text>
        <Text style={loginStyles.subtitle}>Sign in to your account.</Text>
      </View>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <TouchableOpacity style={[buttonStyles.baseButton, loginStyles.loginButton]} onPress={handleLogin}>
        <Text style={loginStyles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
