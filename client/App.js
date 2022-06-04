import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AccountScreen from "./src/screens/AccountScreen";
import GroupsScreen from "./src/screens/GroupsScreen";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  //FIXME: I don't know how to style the words on each tab. Or make it go away. WIll it look better without the laberls?
  return (
    <Tab.Navigator
    activeTintColor="#black"
    inactiveTintColor="white"
    tabBarLabelStyle={{ color: 'white' }}
    barStyle={{ backgroundColor: '#30bfbf', margin: 10 }}

    initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName ='planet-outline';
            color = focused ? '#0079fd' : '#7a7a7a'
          } else if (route.name === 'Accounts') {
            iconName ='person-circle-outline';
            color = focused ? '#0079fd' : '#7a7a7a'
          }else if (route.name === 'Groups') {
            iconName ='people-circle-outline';
            color = focused ? '#0079fd' : '#7a7a7a'
          }
          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Accounts" component={AccountScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Groups" component={GroupsScreen} options={{ headerShown: false }} />

    </Tab.Navigator>)
}

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Sign In"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeTab"
            component={HomeTab}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
