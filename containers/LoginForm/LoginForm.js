import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Yup from "yup";

import COLORS from "../../constants/colors";
import { Form, FormField, SubmitButton } from "../../components/Forms";
import { Alert, LoadingScreen } from "../../components";
import { routes } from "../../navigations/configs";
import authApi from "../../services/auth";
import AuthContext from "../../services/auth/context";

const logo = require("../../assets/icon.png");

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginForm() {
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(AuthContext);

  const navigation = useNavigation();
  const route = useRoute();

  if (route.params.registerSuccess && !isVisible) {
    setIsVisible(true);
    navigation.setParams({ registerSuccess: false });
  }

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    const response = await authApi.loginUser(email, password);
    setLoading(false);

    if (!response.ok) {
      console.log(response);
      return setError(true);
    }

    const user = await authApi.getUser();
    setError(false);
    setUser(user);
  };

  return (
    <>
      <Alert
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={"Registeration Success. Now you can login."}
      />
      <Alert
        isVisible={error}
        setIsVisible={setError}
        message={"Invalid Email and/or Password"}
        success={false}
      />
      {loading && <LoadingScreen />}
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.formContainer}>
          <Form
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => handleLogin(values)}
            validationSchema={validationSchema}
          >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton text="Login" />
          </Form>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(routes.REGISTER)}
          >
            <Text style={styles.textCenter}>
              Don't have account? Create One
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: "90%",
    backgroundColor: COLORS.light,
    borderRadius: 20,
  },
  formContainer: {
    padding: 20,
  },
  logo: {
    alignSelf: "center",
    marginTop: 80,
  },
  textCenter: {
    alignSelf: "center",
    color: "#1E90FF",
  },
});

export default LoginForm;
