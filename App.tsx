import React from 'react';
import {ProfilePage, SendOTPPage, VerifyOTPPage, WelcomePage} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  StytchClient,
  StytchProvider,
  useStytchUser,
} from '@stytch/react-native';
import Config from 'react-native-config';

const config = {
  initialRouteName: 'Welcome',
  screens: {
    Welcome: 'Welcome',
    SendOTP: 'SendOTP',
    VerifyOTP: 'VerifyOTP',
    Profile: 'Profile',
  },
};

const linking = {
  prefixes: ['stytchrn://'],
  config: config,
};

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const user = useStytchUser();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="Profile"
            component={ProfilePage}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Welcome"
              component={WelcomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SendOTP"
              component={SendOTPPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="VerifyOTP"
              component={VerifyOTPPage}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const stytch = new StytchClient(Config.STYTCH_PUBLIC_TOKEN);
  return (
    <StytchProvider stytch={stytch}>
      <HomeScreen />
    </StytchProvider>
  );
};

export default App;
