// Imports: Dependencies
import React from "react";
import { Image, StyleSheet } from "react-native";
import ViewMoreText from "react-native-view-more-text";

import {
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

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
const bgColor = "#111111";
const textColor = "#f1f1f1";
const textColor2 = "#787878";
const MovieCard = ({ title, image_uri, date, overview, votes, language }) => {
  function renderViewMore(onPress) {
    return (
      <Text
        style={{ color: textColor2, paddingLeft: "5%", top: -5 }}
        onPress={onPress}
      >
        View more
      </Text>
    );
  }
  function renderViewLess(onPress) {
    return (
      <Text
        style={{ color: textColor2, paddingLeft: "5%", top: -5 }}
        onPress={onPress}
      >
        View less
      </Text>
    );
  }
  return (
    <>
      {/* <Header /> */}
      <Content
        style={{
          borderWidth: 0,
          borderColor: bgColor,
          backgroundColor: bgColor,
        }}
      >
        <Card style={{ flex: 0, borderColor: bgColor, borderWidth: 0 }}>
          <CardItem
            style={{
              backgroundColor: bgColor,
              borderRadius: 0,
            }}
          >
            {/* Movie Image */}
            <Left>
              <Image
                source={{
                  uri: image_uri,
                }}
                resizeMode={"cover"}
                style={{ width: "100%", height: 300 }}
              />
            </Left>
            <Right style={{ width: "100%", minHeight: 300 }}>
              {/* Movie Brief Overview */}
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.date}>{date}</Text>
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

          <CardItem
            style={{
              backgroundColor: bgColor,
              borderRadius: 0,
              borderColor: bgColor,
              borderWidth: 0,
            }}
          >
            {/* Number of Votes */}
            <Left>
              <Button transparent>
                <Icon style={{ color: textColor }} name="star" />
                <Text style={{ color: textColor2 }}>{votes} stars</Text>
              </Button>
            </Left>
            {/* Movie Original Language */}
            <Right>
              <Button transparent>
                <Icon style={{ color: textColor }} name="language" />
                <Text style={{ color: textColor2 }}>{language}</Text>
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
  image: {
    height: "100%",
    width: "100%",
    marginBottom: "10%",
  },
  overview: {
    color: textColor2,
    alignSelf: "flex-start",
    textAlignVertical: "center",
  },
  date: {
    alignSelf: "flex-start",
    paddingLeft: "5%",
    color: textColor2,
    // flex: 1,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 20,
    paddingLeft: "5%",
    color: textColor,
  },
});
