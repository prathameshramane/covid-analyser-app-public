import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "../configs";
import { ReportListScreen, ReportDetailsScreen } from "../../screens";

const Stack = createStackNavigator();

const ReportNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.REPORT_LIST} component={ReportListScreen} />
    <Stack.Screen name={routes.REPORT_DETAIL} component={ReportDetailsScreen} />
  </Stack.Navigator>
);

export default ReportNavigator;
