import React, { useState } from 'react';
import { View, Text,} from 'react-native';
import { Input } from '../components/ui/Input';
import Button from '../components/Button/Button';
import { buttonStyles } from '../utilities/components/buttonStyles';
import { loginStyles } from '../utilities/pages/loginStyles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    navigation.navigate('Dashboard');
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
      <Button
        label="Login"
        variant="primary"
        style={loginStyles.loginButton}
        textStyle={loginStyles.loginButtonText}
        onPress={handleLogin}
      />
    </View>
  );
};

export default Login;
