import React from "react";
import { Text, StyleSheet } from "react-native";

import { Screen, BackButton } from "../components";
import { PastDiseaseForm, Navbar } from "../containers";

function PastDiseaseScreen() {
  return (
    <Screen>
      <Navbar />
      <BackButton />
      <PastDiseaseForm />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default PastDiseaseScreen;
