import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
} from 'react-native';
import Box from './components/Box';
import CustomButton from './components/CustomButton/CustomButton';
export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello world</Text>
        <CustomButton title={'click me'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'pink',
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'pink',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: Platform.OS === 'android' ? 0 : 65,
  },
  text: {
    color: Platform.OS === 'android' ? 'white' : 'black',
    fontSize: 48,
  },
});
