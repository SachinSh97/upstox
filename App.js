import React, { Suspense } from "react";
import { StyleSheet } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";

import store from "./src/store";

import Loader from "./src/components/Loader";

const RootContainer = React.lazy(() => import("./src/container"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </SafeAreaProvider>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
