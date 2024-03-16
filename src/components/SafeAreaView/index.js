import React from "react";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = ({ style, edges, children }) => {
  return (
    <RNSafeAreaView style={style} edges={edges}>
      {children}
    </RNSafeAreaView>
  );
};

SafeAreaView.defaultProps = {
  edges: ["left", "right", "top", "bottom"],
};

export default SafeAreaView;
