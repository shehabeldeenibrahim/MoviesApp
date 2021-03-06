// Imports: Dependencies
import { Body, Header, Title } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { getMovies } from "../Services/movieApi";
import MoviesList from "../Components/MoviesList";
import NoData from "../Components/NoData";

// Background Color
const bgColor = "#111111";

// Screen Dimensions
const { height, width } = Dimensions.get("window");

/**
 * Main Screen Displays the List of Movies
 * @param  none
 */

export default function Home(props) {
  // States Declerations

  // State for loading indicator
  const [loading, setLoading] = useState(false);

  // State for refreshing attribute in flatlist
  const [refreshing, setRefreshing] = useState(false);

  // State that holds movie data to be listed
  const [data, setData] = useState([]);

  // State that holds the current page being fetched
  const [page, setPage] = useState(1);

  // Beginning of the life cycle
  useEffect(() => {
    try {
      // Retrieve first page on page load
      retrieveData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  /**
   * Shows error toast message when error occurs
   * @param  none
   * @return none
   */
  function showToast() {
    ToastAndroid.show(
      "Please check your internet connection!",
      ToastAndroid.LONG
    );
  }

  /**
   * Retrieve first page on page load
   * @param  none
   * @return none
   */
  const retrieveData = async () => {
    try {
      // Set loading before fetching
      setLoading(true);

      // Fetch first page from api
      // Call back
      props
        .getMovies()
        .then((receivedData) => {
          // Set data array to be listed
          setData(receivedData);
        })
        .catch((e) => {
          /* Error Handling */
          showToast();
          console.log(e);
        });

      // Increment page number to fetch next page
      setPage(page + 1);

      console.log("Retrieving Data");

      // Stop loading after fetching
      setLoading(false);
    } catch (error) {
      /* Error Handling */

      showToast();
      console.log(error);
    }
  };

  /**
   * Retrieve next page when the user scrolls to the end
   * of the flatlist. Called by onEndReached method in Flatlist
   * @param  none
   * @return none
   */
  const retrieveMore = async () => {
    try {
      console.log("Retrieving additional Data");

      // Set loading and refreshing before fetching
      setRefreshing(true);
      setLoading(true);

      getMovies(page)
        .then((moreData) => {
          // Append new data to data state to be listed
          setData([...data, ...moreData]);

          // Increment page number to fetch next page
          setPage(page + 1);

          // Set loading after fetching
          setLoading(false);
        })
        .catch((e) => {
          /* Error Handling */
          showToast();
          console.log(e);
        });

      // Set refreshing to false
      setRefreshing(false);
    } catch (error) {
      /* Error Handling */
      console.log(error);
      showToast();
    }
  };

  /* View */
  return (
    // Safe Area for status bar
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header span style={styles.header}>
        <Body>
          <Title style={styles.headerText}>My Movies</Title>
        </Body>
      </Header>

      {/* If Data is available show flat list */}
      {data && data.length ? (
        /* Render Our Movie Flatlist Component */
        <MoviesList
          testID="dataArrived"
          retrieveMore={retrieveMore}
          data={data}
          refreshing={refreshing}
          loading={loading}
        />
      ) : (
        /* If data not available */

        /* Place Holder Image and text, indicating no data */
        <NoData />
      )}
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: bgColor,
  },
  headerText: {
    fontSize: 40,
    paddingLeft: "2%",
    color: "#dfdfdf",
    fontFamily: "Roboto",
    fontWeight: "600",
  },
  itemContainer: {
    height: 80,
    width: width,
    borderWidth: 0.2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "System",
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },
  header: {
    backgroundColor: bgColor,
    borderBottomWidth: 0,
  },
});
