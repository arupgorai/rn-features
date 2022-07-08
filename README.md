# CustomFontsAndSvg

#### This branch contains how to add custom fonts to your local [React Native](https://reactnative.dev/docs/getting-started) project.

> Here, in this documentation we'll learn two ways to add custom fonts. One is very easy and quick which is recently introduced to `react-native version 0.69` and the second method is manually configuration for both android and ios.

## Method 1 👇

1. Add `assets` folder at root directory and inside `assets` folder create one more folder called `fonts`. i.e `assets/fonts`.
2. Add all your `fonts`/`.ttf` files that you've downloaded in `fonts` folder.
3. Create `react-native.config.js` file at root directory and mention your `fonts` folder location in that file as below 👇

```sh
module.exports = {
  ios: {},
  android: {},
  assets: ['./assets/fonts/'],
};
```

4. Run below command in your terminal to link those assets to your native directory for both android and ios.

```sh
npx react-native-asset
```

5. mention font name as font-family in your `<Text>` component as style.

```sh
<Text
    style={{
        fontFamily: 'Roboto-BoldItalic',
    }}>
      React Native
</Text>
```

6. Re-run your metro server and re-build your app

#### Optional _`Extra Step`_

In case if it doesn't work for ios pease add all you custom fonts in `info.plist` file

```sh
<key>UIAppFonts</key>
	<array>
	  ...
		<string>Inter-Bold.ttf</string>
		<string>Inter-ExtraBold.ttf</string>
		<string>Inter-Light.ttf</string>
		...
	</array>
```

## Method 2 👇

#### `manually configure` your assets.

follow the steps 1, 2 and 3 of `method 1` from above which are common in this method also. 4. Add all you fonts in `android>app>src>main>assets>fonts` folder for android. 5. for ios make sure above `extra step` is done 6. open projectName.xcodeproj file in xcode. right click on your projectname and select `new group` option and named it `Resources`. 7. right click on `Resources` folder and select `Add files to projectName` then select all the fonts from `assets/fonts` folder, here all the fonts will be added which is pointing to `assets/fonts` folder fonts. 8. now click your projectName in xcode and select the target, select `build phases` and check `Copy Bundle Resources` option there all your fonts should linked. 9. now re-run metro bundler and re-build your ios app, it should work.
