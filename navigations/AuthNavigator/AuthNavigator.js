import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../configs";

import { LoginScreen, RegisterScreen } from "../../screens";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={routes.LOGIN}
      component={LoginScreen}
      initialParams={{ registerSuccess: false }}
    />
    <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
