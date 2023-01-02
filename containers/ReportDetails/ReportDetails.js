import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

import COLORS from "../../constants/colors";
import { ReportDetailsIcon } from "../../assets/icons";
import { ReportDisease } from "../../components";

const color = {
  0: "#11FF0C", //Green
  1: "#FFBB0C", //Yellow
  2: "#FF630C", //Orange
  3: "#FF0C0C", //Red
};

const ReportDetails = () => {
  const route = useRoute();
  const { report } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Report Details</Text>
      <View style={styles.content}>
        <View style={styles.icon}>
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: color[report.severity_level] },
            ]}
          >
            <ReportDetailsIcon />
          </View>
          <View style={styles.diseaseContainer}>
            <ReportDisease
              check={report.fever}
              disease={"Fever"}
              style={styles.diseaseListItem}
            />
            <ReportDisease
              check={report.tiredness}
              disease={"Tiredness"}
              style={styles.diseaseListItem}
            />
            <ReportDisease
              check={report.dry_cough}
              disease={"Dry Cough"}
              style={styles.diseaseListItem}
            />
            <ReportDisease
              check={report.difficulty_in_breathing}
              disease={"Difficulty in breathing"}
              style={styles.diseaseListItem}
            />
            <ReportDisease
              check={report.sore_throat}
              disease={"Sore Throat"}
              style={styles.diseaseListItem}
            />
            <ReportDisease
              check={report.pains}
              disease={"Pain"}
              style={styles.diseaseListItem}
            />
            <ReportDisease
              check={report.diarrhea}
              disease={"Diarrhea"}
              style={styles.diseaseListItem}
            />
          </View>
          <View style={styles.score}>
            <Text style={styles.scoreText}>
              Vulnerability Score: {report.vulnerability_score}/10
            </Text>
          </View>
          <View style={styles.message}>
            <Text
              style={[
                styles.messageText,
                { color: color[report.severity_level] },
              ]}
            >
              "{report.message}"
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  content: {
    backgroundColor: COLORS.light,
    flex: 1,
    marginVertical: 20,
    borderRadius: 20,
  },
  diseaseContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  diseaseListItem: {
    marginVertical: 5,
  },
  icon: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  iconCircle: {
    backgroundColor: "#11FF0C",
    padding: 20,
    borderRadius: 100,
  },
  score: {
    marginVertical: 10,
  },
  scoreText: {
    fontSize: 22,
    fontWeight: "100",
  },
  message: {
    marginVertical: 10,
  },
  messageText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#11FF0C",
    textAlign: "center",
  },
});

export default ReportDetails;
