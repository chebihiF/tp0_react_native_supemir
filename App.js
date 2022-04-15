
import { StyleSheet, Text, View, Image, Button, Alert, StatusBar } from 'react-native';
import { Platform, SafeAreaView } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text 
        numberOfLines={2} 
        onPress={()=>console.log("Text pressed")}>
        Hello React Native android Hello 
        React Native android Hello React Native 
        android Hello React Native android Hello</Text>
      <Image style={styles.imageStyle} source={require("./assets/favicon.png")} />
        
      <TouchableOpacity 
        onPress={()=>console.log("image pressed")}>
        <Image
          fadeDuration={2000}
          source={
            {
              uri: "https://picsum.photos/200",
              width:200,
              height:200
            }
        }/>
      </TouchableOpacity>
       
      <Button 
        title='Click Me' 
        color='orange' 
        onPress={()=>Alert.alert('My title', 'My Message', [
          {text: 'Yes', onPress: () => console.log("Yes")},
          {text: 'No', onPress: ()=>console.log("No")},
        ])} />

   
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    width: 100,
    height: 100
  }
});
