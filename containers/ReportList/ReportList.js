import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../../constants/colors";
import { ListItem, LoadingScreen, Alert } from "../../components";
import { routes } from "../../navigations/configs";
import { getReports } from "../../services/api";

import {
  RedCircle,
  YelloCircle,
  OrangeCircle,
  GreenCircle,
} from "../../assets/icons";

const iconType = {
  0: GreenCircle,
  1: YelloCircle,
  2: OrangeCircle,
  3: RedCircle,
};

const ReportList = () => {
  const navigation = useNavigation();
  const [reportList, setReportList] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserReportList();
  }, []);

  const getUserReportList = async () => {
    setLoading(true);
    const response = await getReports();
    setLoading(false);

    if (!response.ok) return setError(true);

    setReportList(response.data);
  };

  return loading && !reportList ? (
    <LoadingScreen />
  ) : (
    <View style={styles.container}>
      <Text style={styles.header}>Your Reports</Text>
      <FlatList
        data={reportList}
        keyExtractor={(report) => report.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={`Report Date: ${item.date}`}
            subtitle={`Vulnerability Score: ${item.vulnerability_score}/10`}
            Icon={iconType[item.severity_level]}
            style={styles.listItem}
            onPress={() =>
              navigation.navigate(routes.REPORT_DETAIL, { report: item })
            }
          />
        )}
      />
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
    marginBottom: 10,
  },
  listItem: {
    marginVertical: 6,
  },
});

export default ReportList;
