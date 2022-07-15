# ProductFlavoursWithEnv

> In this branch, we'll add `build-variant` (_build-variant = build-type + product-flavours_) in our app along different `environments` with the help of [react-native-config](https://github.com/luggit/react-native-config) package. We'll also be adding different `app name` for each variant and different `icons` as well for both **Android** & **IOS** platforms.
> As a bonus, we'll also try to [automate debug apk name]() so that whenever we generate new apk, that apk name contain some custom `name + environment + version`.apk

#### Step 1 :- Install and configure `react-native-config`.

Download and install [react-native-config](https://www.npmjs.com/package/react-native-config) package from `npm` registry and install `pods` for IOS.

```sh
npm i react-native-config
cd ios && pod install
```

For IOS you do not have to do anything extra setup, but for Android you've to add below code at `android/app/build.gradle` file at line no 2.

```sh
// 2nd line, add a new apply:
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

Create `.env` file at root of your project and add some values for the testing purpose.

```sh
// .env
ENV=ROOT
```

Now validate whether we're able to access `ENV` value or not. Let's check it in `App.js` file.

```sh
import Config from "react-native-config";
.
.
.
console.log(Config.ENV) // ROOT
```

> NOTE:- In case if you get `undefined` then delete `package-local.json` file and `node-modules` again install and check, it should work.

## Add build-variant for `Android`

> Here, we'll be adding three different variants for our application.

1. **dev** :- for development purpose.
2. **qa** :- for qa testing purpose.
3. **prod** :- for production.

#### Step 1 :-

First create three enviornments files at the root and add something in each file for testing purpose.

```sh
// .env.dev
ENV=DEV

// .env.qa
ENV=QA

// .env.prod
ENV=PROD
```

#### Step 2 :-

Go to `/android/app/build.gradle` file and add below code.

```sh
// on line no 2

project.ext.envConfigFiles = [
    dev: ".env.dev",
    prod: ".env.prod",
    qa: ".env.qa"
]
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

```sh
android: {
    ...
    defaultConfig: {
        ...
    }
    flavorDimensions "default"

    productFlavors {
        dev {
            minSdkVersion rootProject.ext.minSdkVersion
            applicationId "com.rnfeatures.dev"
            targetSdkVersion rootProject.ext.targetSdkVersion
            resValue "string", "build_config_package", "com.rnfeatures"
            versionCode 2
            versionName "2.0"
        }
        prod {
            minSdkVersion rootProject.ext.minSdkVersion
            applicationId "com.rnfeatures"
            targetSdkVersion rootProject.ext.targetSdkVersion
            resValue "string", "build_config_package", "com.rnfeatures"
            versionCode 2
            versionName "2.0"
        }
        qa {
            minSdkVersion rootProject.ext.minSdkVersion
            applicationId "com.rnfeatures.qa"
            targetSdkVersion rootProject.ext.targetSdkVersion
            resValue "string", "build_config_package", "com.rnfeatures"
            versionCode 2
            versionName "2.0"
        }
    }
    ...
}
```

#### Now, with this you'll be able to build three different variant of our app and install them simultanously 😀.

## Chage App Name & Icons

> Now, let's add different name of all the variant and add different icons as well.

## Step 3 :-

To change app name and icon we've to create `dev`, `qa` & `prod` folder inside `/android/app/src` same as `main` (**main** folder is bydefault generated folder with **react-native init**).

> Let's take a scenario for `dev` now, and we'll follow the same procedure for other(`qa` & `prod`) later on once we completed for dev.

Inside `dev` folder create one more folder named `res` and inside `res` folder add all the resources folder which is required for **name** & **icons**.
Inside `res` add `drawable`, all `mipmap-*` folders and `values` (take a reference from **main** folder if needed, coz we're just mimicing exactly `main` folder contents).
Inside, values there will be a file named `strings.xml` here you add below xml file and add the app name of your choice.

```sh
<resources>
    <string name="app_name">RNFeatures</string>
</resources>
```

Inside, `mipmap-*` folder add your app icons in each folder. Icons can be generated from [here](https://appicon.co/).

> Note :- Either you remove `android:roundIcon="@mipmap/ic_launcher_round"` line from `android/app/src/main/AndroidManifest.xml` or add `ic_launcher_round.png` images in each `mipmap-*` folder to avoid un-necessary propblems.

#### Re-Run the metro server and re-build the app in emulator 😀.

## Automate debug apk name :-

Add below code at `android/app/build.gradle` file just above `android` block

```sh
def static renameDebugAPK(variant, versionName) {
    variant.outputs.all { output ->
        outputFileName = "MY_APP_" + variant.flavorName + '_' + versionName  + ".apk"
    }
}
android {
    ndkVersion rootProject.ext.ndkVersion
    compileSdkVersion rootProject.ext.compileSdkVersion
    .
    .
}
```

and call this function as below 👇

```sh
applicationVariants.all { variant ->
        variant.outputs.each { output ->
            def versionCodes = ["armeabi-v7a": 1, "x86": 2, "arm64-v8a": 3, "x86_64": 4]
            def abi = output.getFilter(OutputFile.ABI)
            if (abi != null) {  // null for the universal-debug, universal-release variants
                output.versionCodeOverride =
                        defaultConfig.versionCode * 1000 + versionCodes.get(abi)
            }

        }
        renameDebugAPK(variant, versionName) // 👈 here
    }
```

> For IOS, follow below links

1. https://blog.logicwind.com/adding-multiple-target/
2. https://www.youtube.com/watch?v=8lA0wP-0vEo
