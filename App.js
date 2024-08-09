import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {firebase} from './firebaseInit'
import Homescreen from './src/screen/Homescreen';
import Loginscreenn from './src/screen/Loginscreenn';
import Signupscreenn from './src/screen/Signupscreenn';
import Dashboard from './src/screen/Dashboard';
import Fooddelivery from './src/screen/Fooddelivery';
import Instamart from './src/screen/Instamart';
import Genie from './src/screen/Genie';
import Dineout from './src/screen/Dineout';
import Reorder from './src/screen/Reorder';


const stack = createStackNavigator();


const App = () => {

  // const [initializing, setintializing] = useState(true);
  // const [user, setuser] = useState();

  // function onauthstatechanged(user) {
  //   setuser(user);
  //   if (initializing) setintializing(false);

  // }
  // useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(onauthstatechanged);
  //   return subscriber;
  // }, []);

  // if (initializing) return null;

  // if (!user) 
  {
    return (
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headershown: false, }} >

          <stack.Screen name={"HOME"} component={Homescreen}  />
          <stack.Screen name={"DASHBOARD"} component={Dashboard} options={{headershown:false}} />
          <stack.Screen name={"LOGIN"} component={Loginscreenn} options={{headershown:false}}/>
          <stack.Screen name={"SIGNUP"} component={Signupscreenn} options={{headershown:false}} />
          <stack.Screen name={"FOODDELIVERY"} component={Fooddelivery} options={{headershown:false}} />
          <stack.Screen name={"INSTAMART"} component={Instamart} options={{headershown:false}} />
          <stack.Screen name={"GENIE"} component={Genie} options={{headershown:false}}/>
          <stack.Screen name={"DINEOUT"} component={Dineout} options={{headershown:false}} />
          <stack.Screen name={"REORDER"} component={Reorder} options={{headershown:false}} />

        </stack.Navigator>
      </NavigationContainer>
    )
 // }
}
}
export default App;