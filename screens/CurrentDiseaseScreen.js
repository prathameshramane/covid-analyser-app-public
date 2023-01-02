import React from "react";
import { Text, StyleSheet } from "react-native";

import { Screen, BackButton } from "../components";
import { Navbar, CurrentDiseaseForm } from "../containers";

function CurrentDiseaseScreen() {
  return (
    <Screen>
      <Navbar />
      <BackButton />
      <CurrentDiseaseForm />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default CurrentDiseaseScreen;
