import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { theme } from "../../constants/styles";

const Header = ({ title }) => {
  const styles = makeStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "auto",
      paddingVertical: 16,
      paddingHorizontal: 24,
      backgroundColor: theme?.primaryThemeColor,
    },
    title: {
      fontSize: 16,
      fontWeight: "600",
      letterSpacing: 0.5,
      color: theme?.secondaryTextColor,
    },
  });
