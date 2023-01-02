import React from "react";
import { Text, StyleSheet } from "react-native";

import { Screen, BackButton } from "../components";
import { ReportDetails, Navbar } from "../containers";

function ReportDetailsScreen() {
  return (
    <Screen>
      <Navbar />
      <BackButton />
      <ReportDetails />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ReportDetailsScreen;
