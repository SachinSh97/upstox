import React, { useEffect, Suspense } from "react";
import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { useDispatch } from "react-redux";

import { theme } from "../constants/styles";
import resourcesConfig from "../resources";
import { userHoldingAction, useUserHoldingSelector } from "../slices";

const Loader = React.lazy(() => import("../components/Loader"));
const Header = React.lazy(() => import("../components/Header"));
const Footer = React.lazy(() => import("../components/Footer"));
const SafeAreaView = React.lazy(() => import("../components/SafeAreaView"));
const StockListItem = React.lazy(() => import("../components/StockListItem"));

const Container = () => {
  const styles = makeStyles(theme);
  const dispatch = useDispatch();
  const { data, error, status } = useUserHoldingSelector();
  const isLoading = status === "loading";

  useEffect(() => {
    dispatch(userHoldingAction());
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Header title={resourcesConfig.upstoxHolding} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ScrollView>
              <Suspense fallback={<Loader />}>
                <FlatList
                  contentContainerStyle={styles.flatlistContainer}
                  data={data?.userHolding ?? []}
                  keyExtractor={({ item, index }) => item?.id || index}
                  renderItem={({ item }) => <StockListItem {...item} />}
                  ItemSeparatorComponent={<View style={styles.divider} />}
                />
              </Suspense>
            </ScrollView>
            <Footer userHolding={data?.userHolding ?? []} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Container;

const makeStyles = (theme) =>
  StyleSheet.create({
    safeAreaView: {
      flex: 1,
    },
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      paddingTop: 54,
      backgroundColor: theme?.secondaryBGColor,
    },
    flatlistContainer: { flex: 1 },
    divider: {
      height: 1,
      backgroundColor: theme?.dividerColor,
    },
  });
