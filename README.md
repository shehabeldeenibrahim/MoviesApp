# Movies Mobile Application React-Native

A cross-platform mobile app build using React-Native (Expo) that displays a list of movies fetched through [TheMovieDB]('https://developers.themoviedb.org/') API

<img src="https://firebasestorage.googleapis.com/v0/b/myfirstproject-5a8f5.appspot.com/o/gif.gif?alt=media&token=b4722083-aac8-4e1f-9e02-5f35eea5437c" style="width:200px;margin-left:25%;" />

# Features

- Infinite List of Movies
- List is Lazy-Loaded
- Image and thumbnail for each movie
- Overview
- Release Date
- Number of Stars

# Project Directory

    .
    ├── assets                    # Static Assets
    ├── src                       # Source Code
    │   ├── Components            # Directory of Components used
    │   └── Screens               # Directory of Screens used
    ├── package.json              # List of Packages used in the project
    ├── app.json                  # Configuring parts of your app
    ├── App.js                    # Starting point of the app
    └── README.md                 # Comprehensive desicription

# Preview App

To preview the app there are 3 options: local build (_See Setup Instructions_), [Snack](https://snack.expo.io/@shehabtarek1/55ba44) (_Recommended_), run my build on Expo

_Snack_:

1. Open this link from a browser: https://snack.expo.io/@shehabtarek1/55ba44
2. Choose a Android/IOS tab to preview the app on a simulator

_My built version_ (Android only):

Scan the following QR code:

![QR Code](https://firebasestorage.googleapis.com/v0/b/myfirstproject-5a8f5.appspot.com/o/QR.png?alt=media&token=0e8b498f-c467-407f-bc7a-c58cc18ef4d7)

# Setup instructions

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

To preview the app there are 3 options: local build, [Snack](https://snack.expo.io/@shehabtarek1/55ba44) (\_\_), run my build on Expo

1. Dowload Expo app on device:
   [Google Play]('https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US'), [Apple Store]('https://apps.apple.com/us/app/expo-go/id982107779')

2. Run the following snippet

```sh
# Start Expo
expo start
```

3. Scan QR code from the device camera

# Requirements

- [Expo]('https://expo.io/')
- [npm]('https://www.npmjs.com/')
- [native-base]('https://nativebase.io/')

# Screenshots

<div class="row">
    <div style="float: left; width: 50%; border-bottom-width: 0;">
        <h1 style="border-bottom-width: 0;">Android</h1> 
        <img src="https://firebasestorage.googleapis.com/v0/b/myfirstproject-5a8f5.appspot.com/o/AndroidSS.jpeg?alt=media&token=c37a2ef4-110c-47e6-8c53-1a56cbd6722a"  style="width:200px;"/>
    </div>
    </div>
    <div style="float: left; width: 50%;">
        <h1 style="border-bottom-width: 0;">Apple</h1> 
        <img src="https://firebasestorage.googleapis.com/v0/b/myfirstproject-5a8f5.appspot.com/o/AppleSS.png?alt=media&token=32238bf6-55da-4055-b4e7-0f76e956d7e8" style="width:200px;"/>
    </div>
</div>
