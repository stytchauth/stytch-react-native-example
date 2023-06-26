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
2. Add `com.stytch.sdk.rn.example` as a Bundle ID.

**Clone repository**

```bash
git clone https://github.com/stytchauth/stytch-react-native-example.git
cd stytch-react-native-example
```

Copy the `.env.template` file and use the public token found in your Stytch [project dashboard](https://stytch.com/dashboard/api-keys).

**Install Dependencies**

```bash
npm install
# on iOS
npx pod-install
```

**Start Application**

Note that your development environment must be configured to run react native applications before you can run this demo. For more information, see the [React Native docs](https://reactnative.dev/docs/environment-setup) for environment setup.

```bash
# open on iOS
npm run ios
# or on Android
npm run android
```

## Documentation

Learn more about the [React Native SDK](https://stytch.com/docs/sdks/react-native-sdk).
