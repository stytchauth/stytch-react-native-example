import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useStytch} from '@stytch/react-native';
import styles from './shared';
import React, {useState, useEffect} from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

function Welcome({navigation}: Props) {
  const stytch = useStytch();

  const [hasBiometricRegistration, setBiometricRegistration] = useState(false);

  const checkBiometricsRegistration = async () => {
    await stytch.biometrics.isRegistrationAvailable().then(resp => {
      setBiometricRegistration(resp);
    });
  };

  useEffect(() => {
    checkBiometricsRegistration();
  });

  const authenticateBiometrics = () => {
    stytch.biometrics
      .authenticate({
        prompt: 'Authenticate biometrics',
        sessionDurationMinutes: 60,
      })
      .catch(err => {
        Alert.alert('Authenticate unsuccessful', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', resizeMode: 'contain'}}
        source={require('../assets/logo.png')}></Image>
      <TouchableOpacity
        style={styles.buttonDark}
        onPress={() => navigation.navigate('SendOTP')}>
        <Text style={styles.buttonTextDark}>Login or sign up with OTP</Text>
      </TouchableOpacity>
      {hasBiometricRegistration && (
        <View style={{padding: 10, marginBottom: 10}}>
          <TouchableOpacity
            style={styles.buttonDark}
            onPress={authenticateBiometrics}>
            <Text style={styles.buttonTextDark}>Login with Biometrics</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default Welcome;
