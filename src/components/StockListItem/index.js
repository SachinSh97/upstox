import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { theme } from "../../constants/styles";
import { currencies } from "../../constants/global";
import { roundOff } from "../../utils/helper";

const ListItem = ({ symbol, quantity, ltp, avgPrice, close }) => {
  const styles = makeStyles(theme);

  const currentValue = (ltp ?? 0) * (quantity ?? 0);
  const investmentValue = (avgPrice ?? 0) * (quantity ?? 0);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.boldFont}>{symbol ?? ""}</Text>
        <View style={styles.row}>
          <Text style={styles.regularFont}>{"LTP: "}</Text>
          <Text style={styles.boldFont}>
            {`${currencies.INR.symbol} ${ltp}`}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.regularFont}>{quantity ?? ""}</Text>
        <View style={styles.row}>
          <Text style={styles.regularFont}>{"P/L: "}</Text>
          <Text style={styles.boldFont}>
            {`${currencies.INR.symbol} ${roundOff(
              (currentValue ?? 0) - (investmentValue ?? 0)
            )}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%",
      paddingHorizontal: 16,
      paddingVertical: 14,
      backgroundColor: theme?.primaryBGColor,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
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
