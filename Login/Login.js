
import React, { useState } from 'react'
import { ImageBackground,StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert} from 'react-native'
 import Button from 'react-native-ui-lib/button';
import styles from './Login_style'
export default Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const showAlert = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId)
  }

  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputs}
        placeholder="Email"
        keyboardType="email-address"
        underlineColorAndroid="transparent"
        onChangeText={email => setEmail({ email })}
      />
      <Image
        style={styles.inputIcon}
        source={{ uri: 'https://img.icons8.com/nolan/40/000000/email.png' }}
      />
    </View>

    <TouchableOpacity
      style={styles.btnForgotPassword}
      onPress={() => showAlert('restore_password')}>
      <Text style={styles.btnText}>Forgot your password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{margin:20}}
      style={[styles.buttonContainer, styles.loginButton]}
      onPress={() => showAlert('login')}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonContainer} onPress={() => showAlert('Sign up')}>
      <Text style={styles.btnText}>Sign Up</Text>
    </TouchableOpacity>
  </View>
  )
}