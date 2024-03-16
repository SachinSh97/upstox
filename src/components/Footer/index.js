import React from "react";
import { View, Text, StyleSheet } from "react-native";

import resourcesConfig from "../../resources";
import { theme } from "../../constants/styles";
import { currencies } from "../../constants/global";
import { roundOff } from "../../utils/helper";

const Accordion = React.lazy(() => import("../Accordion"));

const Footer = ({ userHolding }) => {
  const styles = makeStyles(theme);

  const renderRowContent = (rows) =>
    rows?.map((row, index) => (
      <View key={`${row?.label}-${index}`} style={styles.row}>
        <Text style={styles.boldFont}>{row?.label ?? ""}</Text>
        <Text style={styles.regularFont}>{`${currencies.INR.symbol} ${
          row?.value ?? 0
        }`}</Text>
      </View>
    ));

  const totalCurrentValue = userHolding?.reduce(
    (aggr, curr) => aggr + curr?.ltp * curr?.quantity,
    0
  );
  const totalInvestment = userHolding?.reduce(
    (aggr, curr) => aggr + curr?.avgPrice * curr?.quantity,
    0
  );
  const totalProfitLoss = totalCurrentValue - totalInvestment;
  const todayProfitLoss = userHolding?.reduce(
    (aggr, curr) => aggr + (curr?.close - curr?.ltp) * curr?.quantity,
    0
  );
  const headerRows = [
    {
      label: `${resourcesConfig.profitLoss}:`,
      value: roundOff(totalProfitLoss),
    },
  ];
  const bodyRows = [
    {
      label: `${resourcesConfig.currentValue}:`,
      value: roundOff(totalCurrentValue),
    },
    {
      label: `${resourcesConfig.totalInvestment}:`,
      value: roundOff(totalInvestment),
    },
    {
      label: `${resourcesConfig.todayProfitLoss}:`,
      value: roundOff(todayProfitLoss),
    },
  ];

  return (
    <Accordion
      headerContent={renderRowContent(headerRows)}
      bodyContent={renderRowContent(bodyRows)}
    />
  );
};

export default Footer;

const makeStyles = (theme) =>
  StyleSheet.create({
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    boldFont: {
      fontSize: 16,
      fontWeight: "600",
      color: theme?.primaryTextColor ?? "",
    },
    regularFont: {
      fontSize: 16,
      fontWeight: "400",
      color: theme?.primaryTextColor ?? "",
    },
  });
