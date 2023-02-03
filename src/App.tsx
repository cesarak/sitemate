import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    //   <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       headerTintColor: theme.colors.menuTitleColor,
    //       headerBackTitle: ' ',
    //       headerStyle: {
    //         backgroundColor: 'white',
    //       },
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //       },
    //     }}>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         headerShown: false,
    //         headerTitle: '',
    //       }}
    //     />
    //     <Stack.Screen
    //       name="NovaManha"
    //       component={NovaManhaScreen}
    //       options={{
    //         headerShown: false,
    //         headerTitle: '',
    //       }}
    //     />
    //     <Stack.Screen
    //       name="NovaBrasil"
    //       component={NovaBrasilScreen}
    //       options={{
    //         headerShown: false,
    //         headerTitle: '',
    //       }}
    //     />
    //     <Stack.Screen
    //       name="ClubNB"
    //       component={ClubNovaBrasilScreen}
    //       options={{
    //         headerShown: false,
    //         headerTitle: '',
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
