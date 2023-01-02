import React from "react";
import { Text, StyleSheet } from "react-native";

import { Screen, BackButton } from "../components";
import { Navbar, Profile } from "../containers";

function ProfileScreen() {
  return (
    <Screen>
      <Navbar />
      <BackButton />
      <Profile />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ProfileScreen;
