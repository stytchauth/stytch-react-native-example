## Stytch React Native SDK Demo

This is a demo app that uses the Stytch SDKs in a React Native app.  This app was created with `npx react-native init <project>`

## Configuration

In order to test the OTP functionality in this app, there are a couple things you need to do to configure your app.

 1. Add `stytch.rn.test` as a Bundle ID to your project in the [Stytch SDK Configuration Dashboard](https://stytch.com/dashboard/sdk-configuration).
 2. Enable OTP in that same dashboard.
 3. Add your project's public token on line 13 in `App.tsx`

 After this, you should be able to run the app and test OTP functionality by running the app with 
 ```bash
 npm install
 react-native run-ios|andoird
 ```

 ## Docs

 For more information on the Stytch React Native SDK, check out [our docs](https://stytch.com/docs/sdks/react-native-sdk)
