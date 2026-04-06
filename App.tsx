
import SignupScreen from './src/screens/SignupScreen'
import LoginScreen from   './src/screens/Login'
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
     {/* <SignupScreen />
      */}
      <LoginScreen/>
    </SafeAreaProvider>
  );
}



export default App;
