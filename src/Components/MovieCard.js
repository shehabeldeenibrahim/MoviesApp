// Imports: Dependencies
import React from "react";
import { Image, StyleSheet } from "react-native";
import ViewMoreText from "react-native-view-more-text";

import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Right,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

/**
 * Card Component to Display Movie Details
 * @param  {string} title Movie title
 * @param  {string} image_uri Image URI for Movie Image
 * @param  {string} image_uri_thumb Image URI for Movie Thumbnail
 * @param  {string} date Release Date of the Movie
 * @param  {string} overview Overview About the Movie
 * @param  {number} votes Number of Votes for the Movie
 * @param  {string} language Movie title
 */

// Colors Used
const bgColor = "#111111";
const white = "#f1f1f1";
const grey = "#787878";

const MovieCard = ({ title, image_uri, date, overview, votes, language }) => {
  function renderViewMore(onPress) {
    return (
      <Text style={styles.expand} onPress={onPress}>
        View more
      </Text>
    );
  }
  function renderViewLess(onPress) {
    return (
      <Text style={styles.expand} onPress={onPress}>
        View less
      </Text>
    );
  }

  /* View */
  return (
    <>
      {/* <Header /> */}
      <Content>
        <Card style={{ flex: 0, borderColor: bgColor, borderWidth: 0 }}>
          {/* First Card Item */}
          <CardItem style={styles.cardItem}>
            {/* Left Col */}
            <Left>
              {/* Movie Image */}
              <Image
                source={{
                  uri: image_uri,
                }}
                resizeMode={"cover"}
                style={styles.image}
              />
            </Left>

            {/* Right Col */}
            <Right style={styles.right}>
              {/* Movie Title */}
              <Text style={styles.title}>{title}</Text>

              {/* Movie ReleaseDate */}
              <Text style={styles.date}>{date}</Text>

              {/* Movie Brief Overview Expandable*/}
              <ViewMoreText
                numberOfLines={6}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}
                textStyle={{ padding: "5%" }}
              >
                <Text style={styles.overview}>{overview}</Text>
              </ViewMoreText>
            </Right>
          </CardItem>

          {/* Second Card Item */}
          <CardItem style={styles.cardItem}>
            {/* Left Col */}
            <Left>
              {/* Number of Votes */}
              <Button transparent>
                <Ionicons style={styles.icon} size={15} name="heart" />
                <Text style={{ color: grey }}>{votes} Votes</Text>
              </Button>
            </Left>
            {/* Right Col */}
            <Right>
              {/* Movie Original Language */}
              <Button transparent>
                <Ionicons style={styles.icon} size={15} name="language" />
                <Text style={{ color: grey }}>{language}</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </>
  );
};

export default MovieCard;

// Styles
const styles = StyleSheet.create({
  image: { width: "100%", height: 300 },
  right: { width: "100%", minHeight: 300 },
  overview: {
    color: grey,
    alignSelf: "flex-start",
    textAlignVertical: "center",
  },
  date: {
    alignSelf: "flex-start",
    paddingLeft: "5%",
    color: grey,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 20,
    paddingLeft: "5%",
    color: white,
  },
  expand: { color: grey, paddingLeft: "5%", top: -5 },
  cardItem: {
    backgroundColor: bgColor,
    borderRadius: 0,
  },
  icon: { color: white },
});
