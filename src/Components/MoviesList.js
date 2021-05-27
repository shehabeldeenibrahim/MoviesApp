// Imports: Dependencies
import React from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import MovieCard from "./MovieCard";

// Base URI for images fetched
const img_base_uri = "https://image.tmdb.org/t/p/w500/";

/**
 * List Component to list all movie cards
 * @param  {function} retrieveMore  Function gets next page of movies
 * @param  {Array} data             Data to be displayed
 * @param  {state} refreshing       State for refreshing attribute in Flatlist
 * @param  {state} loading          State for showing loader while retrieving more data
 */
export default MovieList = ({ retrieveMore, data, refreshing, loading }) => {
  return (
    <>
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
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        windowSize={20}
      />
      {/* Show loading indicator if loading set to true */}
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#87838B"
          style={styles.loading}
        />
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    // top: 0,
    bottom: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
});
