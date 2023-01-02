import React from "react";
import { Text, StyleSheet } from "react-native";

import { Screen } from "../components";
import { Navbar, Dashboard } from "../containers";

function DashboardScreen() {
  return (
    <Screen>
      <Navbar />
      <Dashboard />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default DashboardScreen;
