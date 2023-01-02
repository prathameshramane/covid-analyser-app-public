import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "../configs";
import ReportNavigator from "../ReportNavigator";

import {
  DashboardScreen,
  ProfileScreen,
  PastDiseaseScreen,
  CurrentDiseaseScreen,
} from "../../screens";

const Stack = createStackNavigator();

const DashboardNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.DASHBOARD} component={DashboardScreen} />
    <Stack.Screen name={routes.PROFILE} component={ProfileScreen} />
    <Stack.Screen name={routes.REPORT_LIST} component={ReportNavigator} />
    <Stack.Screen
      name={routes.CHECK_VULNERABILITY}
      component={CurrentDiseaseScreen}
    />
    <Stack.Screen name={routes.PAST_DISEASE} component={PastDiseaseScreen} />
  </Stack.Navigator>
);

export default DashboardNavigator;
