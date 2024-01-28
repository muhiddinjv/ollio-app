import React, { useState } from 'react';
import { View, StyleSheet ,SafeAreaView} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const SigninScreen =({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
  },
  forgotPassword: {
    textAlign: 'center',
    color: 'blue',
  },
});

export default SigninScreen;