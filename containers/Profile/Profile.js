import React, { useContext } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import COLORS from "../../constants/colors";
import { TextInput, Button, LoadingScreen } from "../../components";
import AuthContext from "../../services/auth/context";

function Profile() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return user ? (
    <View style={styles.container}>
      <Text style={styles.header}>Your Profile</Text>
      <ScrollView style={styles.form}>
        <TextInput
          label="Firstname"
          editable={false}
          selectTextOnFocus={false}
          defaultValue={user.first_name}
        />
        <TextInput
          label="Lastname"
          editable={false}
          selectTextOnFocus={false}
          defaultValue={user.last_name}
        />
        <TextInput
          label="Gender"
          editable={false}
          selectTextOnFocus={false}
          defaultValue={user.gender}
        />
        <TextInput
          label="Age"
          editable={false}
          selectTextOnFocus={false}
          defaultValue={user.age.toString()}
        />
        <TextInput
          label="Email"
          editable={false}
          selectTextOnFocus={false}
          defaultValue={user.email}
        />
        {/* <Button text="Save" /> */}
      </ScrollView>
    </View>
  ) : (
    <LoadingScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 30,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  form: {
    flex: 1,
    marginTop: 20,
  },
});

export default Profile;
