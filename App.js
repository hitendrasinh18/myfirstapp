import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebaseInit';

import Homescreen from './src/screen/Homescreen';
import Loginscreenn from './src/screen/Loginscreenn';
import Signupscreenn from './src/screen/Signupscreenn';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; 
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Homescreen} />
            <Stack.Screen name="Login" component={Loginscreenn} />
            <Stack.Screen name="Signup" component={Signupscreenn} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
