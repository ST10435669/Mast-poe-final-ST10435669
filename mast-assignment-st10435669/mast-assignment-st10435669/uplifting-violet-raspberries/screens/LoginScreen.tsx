// screens/LoginScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Bookings');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LA COMIDA PRINCIPAL</Text>
      <Text style={styles.subtitle}>EST. 2024</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username/email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Don’t have an account? <Text style={styles.link}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  logo: { fontSize: 24, fontWeight: 'bold', color: 'gold' },
  subtitle: { fontSize: 14, color: 'gold', marginBottom: 40 },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'gold',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: { color: '#000', fontWeight: 'bold' },
  footerText: { marginTop: 20, color: '#fff' },
  link: { color: 'gold' },
});
