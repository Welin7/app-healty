import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function SignIn() {
 return (
   <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.description}>Welcome to App Realty</Text>
      </Animatable.View> 

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder="Enter an Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />  
      
          <Text style={styles.title}>Password</Text>
          <TextInput
            placeholder="Your Password"
            style={styles.input}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonAcces}>Log in</Text>
          </TouchableOpacity>        
      
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonAccesRegister}>Do not have an account? Register</Text>
          </TouchableOpacity>          
      </Animatable.View>                
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#8000ff'
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  description:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },
  containerForm:{
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 25,
    marginTop: 28,
    fontWeight: 'bold'
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12, 
    fontSize: 16 
  },
  button:{
    backgroundColor: '#8000ff',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAcces:{
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold'
  },
  buttonAccesRegister:{
    marginTop: 14,
    alignSelf: 'center'    
  },
  buttonAccesRegister:{
    color: '#a1a1a1',
    alignSelf: 'center'
  }
})