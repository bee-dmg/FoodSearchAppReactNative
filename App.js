import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import React, {useState} from 'react';

export default function App() {
const [boop, setBoop] = useState(false);
let scaleValue = new Animated.Value(0)
  const papaj = require('./assets/IMG_2531.jpg');
  return (
    <View style={styles.container}>
      <Text>Pizza Pie</Text>
      <Button title="Boop" onPress={()=>setBoop(!boop)}/>


      <TouchableWithoutFeedback
      onPressIn={() => {
        scaleValue.setValue(0);
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true
        }).start();

        // cardAction();
      }}
      onPressOut={() => {
        // Animated.timing(scaleValue, {
        //   toValue: 0,
        //   duration: 100,
        //   easing: Easing.linear,
        //   useNativeDriver: true
        // }).start();
        console.log("test")
      }}
    ><Image style={{height:200, width:200}} source={papaj} /></TouchableWithoutFeedback>
      <TouchableOpacity onPress={()=>setBoop(!boop)}>
      {!boop ? <Image style={{height:200, width:200}} source={papaj} /> : <Animated.Text style={styles.pastajohn}>Hello I'm Pasta Jawn</Animated.Text>}
      
      </TouchableOpacity><StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pastajohn:{

  },
  
});
