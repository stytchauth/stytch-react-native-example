import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  OTPScreen,
  WelcomeScreen,
  ProfileScreen,
  EMLScreen,
  AuthenticateScreen,
} from "./pages";
import {
  StytchProvider,
  StytchClient,
  useStytchUser,
} from "@stytch/react-native";

export type RootStackParamList = {
  Welcome: undefined;
  EML: undefined;
  OTP: undefined;
  Profile: undefined;
  Authenticate: { stytch_token_type: string; token: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const scheme = "stytchrnexample://";

function App() {
  const publicToken = process.env.STYTCH_PUBLIC_TOKEN ?? "";
  const stytch = new StytchClient(publicToken);

  return (
    <StytchProvider stytch={stytch}>
      <Nav />
    </StytchProvider>
  );
}

function Nav() {
  const linking = {
    prefixes: [scheme],
  };

  const user = useStytchUser();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {user.user == null ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Authenticate" component={AuthenticateScreen} />
            <Stack.Screen name="EML" component={EMLScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
