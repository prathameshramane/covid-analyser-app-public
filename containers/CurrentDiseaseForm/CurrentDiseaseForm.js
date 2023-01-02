import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import COLORS from "../../constants/colors";
import { FormSelector, Alert, LoadingScreen } from "../../components";
import { Form, SubmitButton } from "../../components/Forms";
import {
  BreathingIcon,
  DiarrheaIcon,
  DryCoughIcon,
  FeverIcon,
  PainIcon,
  SoreThroatIcon,
  TirednessIcon,
} from "../../assets/icons";
import { checkVulnerability } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations/configs/routes";

const CurrentDiseaseForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async (data, { resetForm }) => {
    setLoading(true);
    const response = await checkVulnerability(data);
    setLoading(false);

    if (!response.ok) {
      console.log(response);
      setError(true);
      return;
    }

    resetForm();
    navigation.navigate(ROUTES.REPORT_LIST, {
      screen: ROUTES.REPORT_DETAIL,
      params: { report: response.data },
    });
  };

  return (
    <>
      <Alert
        isVisible={error}
        setIsVisible={setError}
        message={"Invalid Email and/or Password"}
        success={false}
      />
      {loading && <LoadingScreen />}
      <View style={styles.container}>
        <Text style={styles.heading1}>Select What</Text>
        <Text style={styles.heading2}>You Feel</Text>
        <Form
          initialValues={{
            fever: false,
            tiredness: false,
            dry_cough: false,
            difficulty_in_breathing: false,
            sore_throat: false,
            pains: false,
            diarrhea: false,
          }}
          onSubmit={handleSubmit}
        >
          <ScrollView style={styles.formScroll}>
            <View style={styles.form}>
              <FormSelector
                Icon={FeverIcon}
                text="Fever"
                name="fever"
                style={styles.selector}
              />
              <FormSelector
                Icon={TirednessIcon}
                text="Tiredness"
                name="tiredness"
                style={styles.selector}
              />
              <FormSelector
                Icon={DryCoughIcon}
                text="Dry Cough"
                name="dry_cough"
                style={styles.selector}
              />
              <FormSelector
                Icon={BreathingIcon}
                text="Difficulty in breathing"
                name="difficulty_in_breathing"
                style={styles.selector}
              />
              <FormSelector
                Icon={SoreThroatIcon}
                text="Sore throat"
                name="sore_throat"
                style={styles.selector}
              />
              <FormSelector
                Icon={DiarrheaIcon}
                text="Diarrhea"
                name="diarrhea"
                style={styles.selector}
              />
              <FormSelector
                Icon={PainIcon}
                text="Pain"
                style={styles.selector}
                name="pains"
              />
            </View>
            <SubmitButton text={"Done"} />
          </ScrollView>
        </Form>
      </View>
    </>
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

export default CurrentDiseaseForm;
