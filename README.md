# RNVectorIcons

#### This branch contains how to add [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) package to your [React-Native](https://reactnative.dev/docs/0.68/getting-started) Project for both platforms.

## Setup for IOS 👇

#### 1. Install package.

```sh
npm install react-native-vector-icons
```

#### 2. Install pods.

```sh
cd ios && pod install
```

#### 3. Add icon fonts to `info.plist` file.

```sh
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
  <string>Fontisto.ttf</string>
</array>
```

## Setup for Android 👇

#### For Android go to in your app `android/app/android.gradle` file. then add this code below the end of the code.

```sh
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## Now Import icons from package and test it in your code.

```sh
import Icon from 'react-native-vector-icons/Ionicons';
<Icon name="md-menu" size={30} />
```

### and we're done with these little few steps 😄
