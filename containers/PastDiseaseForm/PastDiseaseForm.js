import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../../constants/colors";
import { FormSelector, LoadingScreen, Alert } from "../../components";
import { Form, SubmitButton } from "../../components/Forms";
import {
  ObesiutyIcon,
  HypertensionIcon,
  RenalChronicIcon,
  DiabetesIcon,
  TobaccoIcon,
  AsthamaIcon,
  CardiovascularIcon,
  PnuemoniaIcon,
} from "../../assets/icons";
import { updatePastDisease, getPastDisease } from "../../services/api";
import { routes } from "../../navigations/configs";

const PastDiseaseForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [initialValues, setInitialValues] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    getUserPastDisease();
  }, []);

  const getUserPastDisease = async () => {
    setLoading(true);
    const response = await getPastDisease();
    setLoading(false);

    if (!response.ok) {
      setError(true);
      console.log(response.data);
    }

    setInitialValues(response.data);
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    const response = await updatePastDisease(data);
    setLoading(false);

    if (!response.ok) setError(true);

    setInitialValues(response.data);
    navigation.navigate(routes.DASHBOARD);
  };

  return !loading && initialValues ? (
    <>
      {error && (
        <Alert
          isVisible={error}
          setIsVisible={setError}
          message={"Something went wrong"}
          success={false}
        />
      )}
      {success && (
        <Alert
          isVisible={success}
          setIsVisible={setSuccess}
          message={"Updated Successfully"}
        />
      )}
      <View style={styles.container}>
        <Text style={styles.heading1}>Select Your</Text>
        <Text style={styles.heading2}>Past Disease</Text>
        <ScrollView style={styles.formScroll}>
          <Form
            initialValues={{
              ...initialValues,
            }}
            onSubmit={handleSubmit}
          >
            <View style={styles.form}>
              <FormSelector
                Icon={ObesiutyIcon}
                text="Obesity"
                style={styles.selector}
                name="obesity"
              />
              <FormSelector
                Icon={HypertensionIcon}
                text="Hypertension"
                style={styles.selector}
                name="hypertension"
              />
              <FormSelector
                Icon={RenalChronicIcon}
                text="Renal Chronic"
                style={styles.selector}
                name="renal_chronic"
              />
              <FormSelector
                Icon={DiabetesIcon}
                text="Diabetes"
                style={styles.selector}
                name="diabetes"
              />
              <FormSelector
                Icon={TobaccoIcon}
                text="Tobacco"
                style={styles.selector}
                name="tobacco"
              />
              <FormSelector
                Icon={AsthamaIcon}
                text="Asthama"
                style={styles.selector}
                name="asthma"
              />
              <FormSelector
                Icon={CardiovascularIcon}
                text="Cardiovascular"
                style={styles.selector}
                name="cardiovascular"
              />
              <FormSelector
                Icon={PnuemoniaIcon}
                text="Pneumonia"
                style={styles.selector}
                name="pneumonia"
              />
            </View>
            <SubmitButton text={"Done"} />
          </Form>
        </ScrollView>
      </View>
    </>
  ) : (
    <LoadingScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  heading1: {
    fontSize: 36,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  heading2: {
    fontSize: 28,
    color: COLORS.primary,
    marginBottom: 20,
  },
  form: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  formScroll: {
    flex: 1,
  },
  selector: {
    margin: 10,
  },
});

export default PastDiseaseForm;
