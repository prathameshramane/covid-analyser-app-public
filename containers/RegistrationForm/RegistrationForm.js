import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../../constants/colors";
import {
  Form,
  FormField,
  SubmitButton,
  CategoryPickerItem,
  FormPicker as Picker,
  ErrorMessage,
} from "../../components/Forms";
import { LoadingScreen } from "../../components";
import { routes } from "../../navigations/configs";
import autApi from "../../services/auth";

const logo = require("../../assets/icon.png");

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().label("First name"),
  last_name: Yup.string().required().label("Last name"),
  age: Yup.number().required().label("Age"),
  gender: Yup.object().required().label("Gender"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const categories = [
  {
    backgroundColor: COLORS.medium,
    icon: "gender-male",
    label: "Male",
    value: "M",
  },
  {
    backgroundColor: COLORS.medium,
    icon: "gender-female",
    label: "Female",
    value: "F",
  },
  {
    backgroundColor: COLORS.medium,
    icon: "gender-male-female-variant",
    label: "Other",
    value: "O",
  },
];

function RegistrationForm() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (data, { resetForm }) => {
    data.gender = data.gender.value;

    setLoading(true);
    const response = await autApi.registerUser(data);
    setLoading(false);

    if (!response.ok) {
      setErrorMessage(response.data);
      setError(true);
      return;
    }

    setError(false);
    setErrorMessage(null);
    resetForm();
    navigation.navigate(routes.LOGIN, { registerSuccess: true });
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <View style={styles.container}>
        <ScrollView>
          <Image source={logo} style={styles.logo} />
          <View style={styles.formContainer}>
            <Form
              initialValues={{
                first_name: "",
                last_name: "",
                age: "",
                gender: "",
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <FormField
                autoCorrect={false}
                name="first_name"
                placeholder="First Name"
              />
              <FormField
                autoCorrect={false}
                name="last_name"
                placeholder="Last Name"
              />
              <FormField autoCorrect={false} name="age" placeholder="Age" />
              <Picker
                items={categories}
                name="gender"
                numberOfColumns={3}
                PickerItemComponent={CategoryPickerItem}
                placeholder="Gender"
                width="50%"
              />
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                placeholder="Email"
                textContentType="emailAddress"
              />
              {error && errorMessage.email && (
                <ErrorMessage error={errorMessage.email[0]} visible={true} />
              )}
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              {error && errorMessage.non_field_errors && (
                <ErrorMessage
                  error={errorMessage.non_field_errors[0]}
                  visible={true}
                />
              )}
              <SubmitButton text="Register" />
            </Form>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(routes.LOGIN)}
            >
              <Text style={styles.textCenter}>
                Already have account? Login here
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "90%",
    width: "90%",
    backgroundColor: COLORS.light,
    borderRadius: 20,
  },
  formContainer: {
    padding: 20,
  },
  logo: {
    alignSelf: "center",
    marginTop: 30,
  },
  textCenter: {
    alignSelf: "center",
    color: "#1E90FF",
  },
});

export default RegistrationForm;
