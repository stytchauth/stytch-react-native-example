import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { StytchClient, useStytchSession, StytchProvider, useStytch } from '@stytch/react-native';

const publicToken = 'public-token-test-fd87127e-9114-4216-90ba-0385741b7c9b';

const HomeScreen: () => Node = () => {
  const [authStarted, setAuthStarted] = React.useState(false);
  const [methodId, setMethodId] = React.useState<string | undefined>();
  const [code, setCode] = React.useState('');
  const stytch = useStytch();
  const session = useStytchSession();
  const login = () => {
    stytch.otps.sms.loginOrCreate(
      // Replace this with your mobile number
      '+13335557777',
      {
        expiration_minutes: 5,
      }
    )
      .then((res) => {
        console.log('success', res);
        setMethodId(res.method_id);
        alert('To continue - please enter the 6 digit code');
        setAuthStarted(true);
      })
      .catch((e) => {
        console.log('fail', e)
      })
  }

  const authenticate = () => {
    stytch.otps.authenticate(
      code,
      methodId,
      { session_duration_minutes: 60 }
    )
      .then(res => {
        alert('you are authenticated');
      })
  }

  const logout = () => {
    stytch.session.revoke().then(() => {
      setAuthStarted(false);
      setMethodId('');
      setCode('');
    })
  }

  const UnauthenticatedView = () =>
    <Container>
      <TouchableOpacity
        style={styles.button}
        onPress={login}
      >
        <Text style={styles.buttonText}>Send SMS</Text>
      </TouchableOpacity>
    </Container>

  const EnterOTPView = () =>
    <Container>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={(val) => setCode(val)}
          defaultValue={code}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={authenticate}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </Container>

  const AuthenticatedView = () =>
    <Container>
      <Text>
        <TouchableOpacity
          style={styles.button}
          onPress={logout}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert(`Session Id: ${session.session_id}`)}
        >
          <Text style={styles.buttonText}>Show Session Id</Text>
        </TouchableOpacity>
      </Text>
    </Container>

  if (!authStarted) {
    return <UnauthenticatedView />
  }
  else if (!session) {
    return <EnterOTPView />
  } else {
    return <AuthenticatedView />
  }
};

const Container: React.FC = ({ children }) =>
  <View style={styles.container}>
    <Text style={styles.title}>Stytch - React Native SMS OTP Demo</Text>
    {children}
  </View >

const App: () => Node = () => {
  const stytch = new StytchClient(publicToken);
  return (
    <StytchProvider stytch={stytch}>
      <HomeScreen />
    </StytchProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F0F0F0',
    padding: 50,
    display: 'flex',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    margin: 'auto',
    marginBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 0,
  },
  textInputWrapper: {
    padding: 10,
  },
  textInput: {
    height: 40,
    width: 200,
    backgroundColor: 'white',
    textAlign: 'center',
  }
});

export default App;
