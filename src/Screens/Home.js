// Imports: Dependencies
import { Body, Header, Title } from "native-base";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import MovieCard from "../Components/MovieCard";

// Background Color
const bgColor = "#111111";

// Base URI for images fetched
const img_base_uri = "https://image.tmdb.org/t/p/w500/";

// Screen Dimensions
const { height, width } = Dimensions.get("window");

/**
 * Main Screen Displays the List of Movies
 * @param  none
 */

export default function Home() {
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
   * Retrieve first page on page load
   * @param  none
   * @return none
   */
  const retrieveData = async () => {
    try {
      // Set loading before fetching
      setLoading(true);

      // Fetch first page from api
      async function api_content() {
        const response = await fetch(
          // Movies URL
          `http://api.themoviedb.org/3/discover/movie?api_key=28ae3e833077363150b565b2ab3160a7&page=${1}`,
          {}
        ).catch((e) => {
          console.log(e);
        });

        const json = await response.json();
        return json;
      }

      // Call back
      api_content().then((data) => {
        // Set data array to be listed
        setData(data.results);
      });

      // Increment page number to fetch next page
      setPage(page + 1);

      console.log("Retrieving Data");

      // Stop loading after fetching
      setLoading(false);
    } catch (error) {
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

      async function api_content() {
        const response = await fetch(
          // Movies URL
          `http://api.themoviedb.org/3/discover/movie?api_key=28ae3e833077363150b565b2ab3160a7&page=${page}`,
          {}
        );
        const json = await response.json();
        return json;
      }

      api_content().then((moreData) => {
        // Append new data to data state to be listed
        setData([...data, ...moreData.results]);

        // Increment page number to fetch next page
        setPage(page + 1);

        // Set loading after fetching
        setLoading(false);
      });

      // Set refreshing to false
      setRefreshing(false);
    } catch (error) {
      console.log(error);
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
      {/* Our Movie Flatlist */}
      <FlatList
        // Data fetched
        data={data}
        // Render Items
        renderItem={({ item }) => (
          <View>
            {/* Card Component */}
            <MovieCard
              // Props passed
              title={item.title}
              image_uri_thumb={img_base_uri + item.backdrop_path}
              image_uri={img_base_uri + item.poster_path}
              date={item.release_date}
              overview={item.overview}
              votes={item.vote_count}
              language={item.original_language}
            />
          </View>
        )}
        // Item Key
        keyExtractor={(item, index) => String(index)}
        // On End Reached retrieves more data
        onEndReached={() => {
          retrieveMore();
        }}
        // How Close To The End Of List Until Next Data Request Is Made
        onEndReachedThreshold={0.1}
        // Refreshing (Set To True When End Reached)
        refreshing={refreshing}
        // Optimization attributes
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={10}
      />
      {/* Show loading indicator if loading set to true */}
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#87838B"
          style={styles.loading}
        />
      ) : null}
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
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    // top: 0,
    bottom: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: bgColor,
    borderBottomWidth: 0,
  },
});
