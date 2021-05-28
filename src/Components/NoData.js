// Imports: Dependencies
import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

// Screen Dimensions
const { width } = Dimensions.get("window");

/**
 * Component rendered when no data is retrieved
 * @param  none
 */
export default NoData = () => {
  return (
    <View style={styles.noData}>
      <Image
        source={require("../../assets/nodata.png")}
        style={styles.noDataImage}
        resizeMode={"cover"}
      />
      <Text testID="no-data" style={styles.noDataText}>
        No data available
      </Text>
      <Text style={styles.noDataText}>
        check your internet connectin and try again
      </Text>
    </View>
  );
};
// Styles

const styles = StyleSheet.create({
  noData: {
    color: "white",
    alignSelf: "center",
    top: width / 2,
  },
  noDataText: { color: "white", alignSelf: "center" },
  noDataImage: { width: 100, height: 100, alignSelf: "center" },
});
