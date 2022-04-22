
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button, 
  Alert, 
  StatusBar,
  Platform, 
  SafeAreaView,
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  TouchableHighlight,
  Dimensions 
} from 'react-native';


export default function App() {

  const {landscape} = useDeviceOrientation();
  //console.log(useDeviceOrientation());

  return (
    <SafeAreaView style={[styles.container]}>    
      <View style={{
          backgroundColor: 'dodgerblue', 
          width:'100%', 
          height:landscape ? '100%' : '30%'
          }}>
      </View>

      {/*       
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

      <Text 
        numberOfLines={2} 
        onPress={()=>console.log("Text pressed")}>
        Hello React Native android Hello 
        React Native android Hello React Native 
        android Hello React Native android Hello</Text>
      
        <Button
        color="green" 
        title='Click Me' 
        onPress={()=>Alert.alert('My title', 'My Message', [
          {text: 'Yes', onPress: () => console.log("Yes")},
          {text: 'No', onPress: ()=>console.log("No")},
        ])} />

      */}
   
    </SafeAreaView>
  );
}

const containerStyle = {backghgroundColor: 'orange'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS=='android' ? StatusBar.currentHeight : 0
  },
  button:{
    backgroundColor: 'green'
  },
  imageStyle: {
    width: 100,
    height: 100
  }
});
