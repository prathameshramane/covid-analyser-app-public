import React from "react";
import { Text, StyleSheet } from "react-native";

import { Screen, BackButton } from "../components";
import { Navbar, ReportList } from "../containers";

function ReportListScreen() {
  return (
    <Screen>
      <Navbar />
      <BackButton />
      <ReportList />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ReportListScreen;
