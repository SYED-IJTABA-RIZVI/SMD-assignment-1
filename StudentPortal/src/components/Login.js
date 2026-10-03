import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import CustomButton from './CustomButton';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
      return;
    }
    // Dummy authentication
    if (username.toLowerCase() === '23i0112' && password === 'password123') {
      onLogin();
    } else {
      setError('Invalid credentials. Try 23i0112 / password123');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.logoText}>FLEX</Text>
          <Text style={styles.subText}>FAST Student Portal</Text>
          
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Registration Number</Text>
            <TextInput 
              style={styles.input}
              placeholder="e.g. 23i0112"
              value={username}
              onChangeText={(t) => { setUsername(t); setError(''); }}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput 
              style={styles.input}
              placeholder="••••••••"
              secureTextEntry
              value={password}
              onChangeText={(t) => { setPassword(t); setError(''); }}
            />
          </View>

          <CustomButton title="Login" onPress={handleLogin} style={{marginTop: 10}} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0056D2' },
  scroll: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#fff', padding: 30, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  logoText: { fontSize: 40, fontWeight: 'bold', color: '#0056D2', textAlign: 'center' },
  subText: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 30 },
  inputContainer: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: '#fafafa' },
  error: { color: 'red', textAlign: 'center', marginBottom: 15, fontWeight: 'bold' }
});

export default Login;
