import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ListItem, LineDivider, Button } from "../../components";
import { ProfileIcon, VulnerabilityIcon, ReportIcon } from "../../assets/icons";
import { routes } from "../../navigations/configs";
import authApi from "../../services/auth";
import AuthContext from "../../services/auth/context";
import COLORS from "../../constants/colors";

const Dashboard = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ListItem
        title="Your Profile"
        Icon={ProfileIcon}
        style={styles.list}
        onPress={() => navigation.navigate(routes.PROFILE)}
      />
      <LineDivider />
      <ListItem
        title="Update Past Disease"
        Icon={() => (
          <MaterialCommunityIcons
            name="account-convert"
            size={30}
            color={COLORS.primary}
          />
        )}
        style={styles.list}
        onPress={() => navigation.navigate(routes.PAST_DISEASE)}
      />
      <ListItem
        title="Check Vulnerability"
        Icon={VulnerabilityIcon}
        style={styles.list}
        onPress={() => navigation.navigate(routes.CHECK_VULNERABILITY)}
      />
      <ListItem
        title="Report"
        Icon={ReportIcon}
        style={styles.list}
        onPress={() => navigation.navigate(routes.REPORT_LIST)}
      />
      <View style={styles.buttonContainer}>
        <Button
          text="Logout"
          onPress={() => {
            authApi.logout();
            setUser(null);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    flex: 1,
  },
  list: {
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
  },
});

export default Dashboard;
