# Movies Mobile Application React-Native

A cross-platform mobile app build using React-Native (Expo) that displays a list of movies fetched through [TheMovieDB]('https://developers.themoviedb.org/') API

## Features

- Infinite List of Movies
- List is Lazy-Loaded
- Image and thumbnail for each movie
- Overview
- Release Date
- Number of Stars

## Project Directory

    .
    ├── assets                    # Static Assets
    ├── src                       # Source Code
    │   ├── Components            # Directory of Components used
    │   └── Screens               # Directory of Screens used
    ├── package.json              # List of Packages used in the project
    ├── app.json                  # Configuring parts of your app
    ├── App.js                    # Starting point of the app
    └── README.md                 # Comprehensive desicription

## Setup instructions

### 1. Install dependencies

```sh
# Clone the example app repo
git clone https://github.com/shehabeldeenibrahim/MoviesApp.git
cd MoviesApp

# Install npm dependencies
npm install --global expo-cli
npm install
```

### 2. Run App

_Locally_:

1. Dowload Expo app on device:
   [Google Play]('https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US'), [Apple Store]('https://apps.apple.com/us/app/expo-go/id982107779')

2. Run the following snippet

```sh
# Start Expo
expo start
```

3. Scan QR code from the device camera

_My built version_ (Android only):

Scan the following QR code:

![QR Code](https://raw.githubusercontent.com/shehabeldeenibrahim/MoviesApp/master/QR.png?token=AOLURWN6ROTT7YQM72FFVCTAVWGN6)

# Requirements

- [Expo]('https://expo.io/')
- [npm]('https://www.npmjs.com/')
- [native-base]('https://nativebase.io/')

# Screenshots

## Android

![Android ScreenShot](https://raw.githubusercontent.com/shehabeldeenibrahim/MoviesApp/master/AndroidSS.jpeg?token=AOLURWIXVFO6M2YMSR232CTAVWGHK)
