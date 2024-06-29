# Stytch + React Native example app

![reactNativeExampleApp](https://user-images.githubusercontent.com/100632220/169424762-67caa828-2b05-43f7-9055-067014676316.png)

## Overview

This example app includes a mobile application powered by React Native. This app was created with `npx react-native init`

This application demonstrates a mobile friendly signup and sign in flow powered by Stytch. In this example the following Stytch products are used:

1. [Email Magic Links](https://stytch.com/products/email-magic-links)
2. [SMS passcodes](https://stytch.com/products/sms-passcodes)
3. [OAuth](https://stytch.com/products/oauth)
4. [Biometrics](https://stytch.com/products/mobile-biometrics)
5. [Session management](https://stytch.com/products/session-management)

## Running locally

**Create a Stytch account**

Sign up and create a new project in [Stytch](https://stytch.com).

**Stytch Dashboard Configuration**

Open the [Stytch Dashboard Frontend SDK Configuration](https://stytch.com/dashboard/sdk-configuration).

1. Enable the SDK in your project.
2. Add `com.stytch.rn.example` as a Bundle ID.

Open the [Stytch Dashboard Redirect URLS](https://stytch.com/dashboard/redirect-urls).
1. Add `stytchrnexample://Authenticate` and select "Login" and "Signup" as URL Types.   

**Clone repository**

```bash
git clone https://github.com/stytchauth/stytch-react-native-example.git
cd stytch-react-native-example
```

Copy the `.env.template` file into `.env`. Set the `public_token` found in your [Stytch Dashboard](https://stytch.com/dashboard/api-keys) in the local copy.

**Install Dependencies**

```bash
npm install
# on iOS
cd ios && pod install
```

**Start Application**

Note that your development environment must be configured to run react native applications before you can run this demo. For more information, see the [React Native docs](https://reactnative.dev/docs/environment-setup) for environment setup.

```bash
# open on iOS
npm run ios
# or on Android
npm run android
```

**Running the Application**
1. Email Magic Links: Make sure to log in to the associated email account on the device's browser. The redirect will only work on the same device.
2. Biometrics: Once you log in for the first time, you can add Biometrics as a login option. You will see a "Add Biometrics Registration" button, click it and you'll be taken back to the home page where you can press "Login with Biometrics" at which point the Fingerprint prompt will appear. You can navigate to the `Features` tab of your navigation window then press `Touch ID` and `Matching Touch` to complete the Fingerprint authentication. Then you will be logged in.

**Troubleshooting**
1. If for some reason the local file is not registered, you can try setting the token directly in `App.tsx` during local testing.
2. If you get build errors for your iOS app related to Flipper Configurations, you can try directly setting `flipper_config = FlipperConfiguration.disabled` in `ios/Podfile`. 

## Documentation

Learn more about the [React Native SDK](https://stytch.com/docs/sdks/react-native-sdk).
