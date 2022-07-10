# AppIconAndName

> In this branch I've added icon for our application and changed app name for both android and IOS.

#### Step 1 :- Change App Icon 👇

Go to any [icon generator online tool](https://appicon.co/) and upload you icon (make sure min size of icon to be uploaded should be atleast 512x512). This online tool helps us generating icons for our application for both platform

> Note:- for android make sure this online tools generate both `ic_launcher.png` and `ic_launcher_round.png` image, if it doesn't generate `round` image then either generate manually keeping in mind proper resolution of the images for every `mipmap-*` folder (project/android/app/src/main/res/mipmap-\*) or you can remove `android:roundIcon="@mipmap/ic_launcher_round"` 👈 line from `AndroidManifest.xml` file, so that it does not read round icon at all.

#### Step 2 (for Android) :-

Go to `project/android/app/src/main/res/mipmap-*` folder and replace all the images (ic_launcher.png & ic_launcher_round.png) with the generated icons then open `android/app/build.gradle` file in **Android Studios** to auto download library and create file local.properties.
Then, Re-run your metro-bundler & re-build your app.

#### Step 3 (for IOS) :-

Go to your `ios/projectName/Images.xcassets/AppIcon.appiconset` folder and keep all generated iocns for ios.
Then, Re-run your metro-bundler & re-build your app.

#### Change App Name 👇

#### Step 1 (for Android) :-

Go to `android/app/src/main/res/values/string.xml` file and updage the app name
`<string name="app_name">YOUR_APP_NAME_HERE</string>` 👈 here.

#### Step 2 (for IOS) :-

Go to `info.plist` file and below `<key>CFBundleDisplayName</key>` change the app name you wish to as :-

```sh
<key>CFBundleDisplayName</key>
<string>YOUR_APP_NAME_HERE</string>
```

> Note :- you can use this little handy method to rename your app name but it assumes that you created your react-native project using react-native init.

```sh
npx react-native-rename <newName>
```
