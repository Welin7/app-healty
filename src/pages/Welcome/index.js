import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
 
  return (
   <View style={styles.container}>

     <View style={styles.containerlogo}>
       <Animatable.Image
          animation="flipInY"
          source={require('../../assets/Logo.png')}
          style={{width:'100%'}}
          resizeMode="contain"
       />
     </View>

     <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
       <Text style={styles.averagetitle}>Have a good security of life and be attended with agility and precision</Text>
       <Text style={styles.litlletitle}>Acess to get started</Text>
       
       <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
         <Text style={styles.buttonAcces}>Acess</Text>
       </TouchableOpacity>
     </Animatable.View >
       
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1

  },
  containerlogo:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  averagetitle:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  litlletitle:{
    fontSize: 22,
    color: '#a1a1a1'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#8000ff',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '7%',
    alignItems: 'center',
    justifyContent: 'center'    
  },
  buttonAcces:{
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold'
  }
})