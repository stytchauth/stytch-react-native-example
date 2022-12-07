import {Text, TouchableOpacity, View} from 'react-native';
import sharedStyles from './shared';
import {useStytch} from '@stytch/react-native-testing';
import * as React from 'react';

function ProfilePage() {
  const stytch = useStytch();

  const registerBiometrics = () => {
    stytch.biometrics
      .register('Register Your Biometric Factor')
      .then((resp: any) => {
        console.log(resp);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const authBiometrics = () => {
    stytch.biometrics
      .authenticate('Register Your Biometric Factor', 60)
      .then((resp: any) => {
        console.log(resp);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const deleteBiometricsDeviceRegistration = async () => {
    const response = await stytch.biometrics.removeRegistration();
    console.log(response);
  };

  return (
    <View style={sharedStyles.container}>
      <View>
        <Text style={sharedStyles.header}>Profile</Text>
        <Text>
          Welcome to your profile page. You have completed a one time passcode
          login flow powered by Stytch. You can review the source code for this
          app on Github to learn how to implement this yourself!
        </Text>
      </View>
      <View style={{padding: 10, marginBottom: 10}}>
        <TouchableOpacity
          style={sharedStyles.buttonDark}
          onPress={registerBiometrics}>
          <Text style={sharedStyles.buttonTextDark}>
            Register with Biometrics
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10, marginBottom: 10}}>
        <TouchableOpacity
          style={sharedStyles.buttonDark}
          onPress={authBiometrics}>
          <Text style={sharedStyles.buttonTextDark}>Auth with Biometrics</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10, marginBottom: 10}}>
        <TouchableOpacity
          style={sharedStyles.buttonDark}
          onPress={deleteBiometricsDeviceRegistration}>
          <Text style={sharedStyles.buttonTextDark}>
            Delete Biometrics Registration
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[sharedStyles.buttonDark]}
        onPress={stytch.session.revoke}>
        <Text style={[sharedStyles.buttonTextDark]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfilePage;
