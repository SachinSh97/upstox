import { View, ActivityIndicator, StyleSheet } from "react-native";

import { theme } from "../../constants/styles";

const Loader = () => {
  const styles = makeStyles(theme);
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme?.secondaryThemeColor} size="large" />
    </View>
  );
};

export default Loader;

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme?.primaryBGColor,
    },
  });
