import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Auth/LoginScreen";
import Main from "../screens/Auth/FirstScreen";
import SignUp from "../screens/Auth/SignUpScreen";
import Success from "../screens/Auth/SuccessScreen";
import OPTIONS from "../constants/options";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={OPTIONS.SIGN_UP}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} options={OPTIONS.LOGIN} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
