import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  StyleSheet,
  Animated,
} from "react-native";

import { theme } from "../../constants/styles";

if (Platform.OS === "android") {
  //Enable Layout animation for android
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Accordion = ({ headerContent, bodyContent }) => {
  const styles = makeStyles(theme);
  const intitalPosition = React.useRef(new Animated.Value(0)).current;
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    Animated.timing(intitalPosition, {
      toValue: !expanded ? 60 : 0,
      duration: 300,
      useNativeDriver: true,
    })?.start();
    setExpanded(!expanded);
  };

  const transform = [
    {
      rotate: intitalPosition.interpolate({
        inputRange: [0, 60],
        outputRange: ["0deg", "60deg"],
      }),
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowWrapper} onPress={toggleAccordion}>
        <Animated.View style={[styles.arrow, [{ transform }]]} />
      </TouchableOpacity>
      {expanded && <View style={styles.body}>{bodyContent ?? ""}</View>}
      <View style={styles.header}>{headerContent ?? ""}</View>
    </View>
  );
};

export default Accordion;

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme?.primaryBGColor,
    },
    header: {
      paddingBottom: 16,
      paddingHorizontal: 16,
    },
    body: {
      display: "flex",
      flexDirection: "column",
      paddingBottom: 24,
      paddingHorizontal: 16,
      gap: 6,
    },
    arrowWrapper: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 6,
    },
    arrow: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: 24 / 2,
      borderRightWidth: 24 / 2,
      borderBottomWidth: (Math.sqrt(3) / 2) * 24,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: theme?.secondaryThemeColor,
    },
  });
