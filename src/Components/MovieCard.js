// Imports: Dependencies
import React from "react";
import { Image, StyleSheet } from "react-native";
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

const MovieCard = ({
  title,
  image_uri,
  image_uri_thumb,
  date,
  overview,
  votes,
  language,
}) => (
  <>
    <Header />
    <Content>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            {/* Thumbnail Image */}
            <Thumbnail
              source={{
                uri: image_uri_thumb,
              }}
            />
            <Body>
              {/* Movie Title */}
              <Text>{title}</Text>
              {/* Movie Release Date */}
              <Text note>{date}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            {/* Movie Image */}
            <Image
              source={{
                uri: image_uri,
              }}
              style={styles.image}
            />
            {/* Movie Brief Overview */}
            <Text>{overview}</Text>
          </Body>
        </CardItem>
        <CardItem>
          {/* Number of Votes */}
          <Left>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <Icon name="star" />
              <Text>{votes} stars</Text>
            </Button>
          </Left>
          {/* Movie Original Language */}
          <Right>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <Icon name="language" />
              <Text>{language}</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </Content>
  </>
);

export default MovieCard;

// Styles
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    flex: 1,
    alignSelf: "center",
    marginBottom: "10%",
  },
});
