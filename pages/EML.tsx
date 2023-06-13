import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useStytch } from "@stytch/react-native";
import { styles } from "./styles";
import { scheme } from "../App";

function EML() {
  const stytch = useStytch();
  const [email, setEmail] = useState("");

  const redirect = scheme + "Authenticate";

  const login = () => {
    stytch.magicLinks.email
      .loginOrCreate(email, {
        login_magic_link_url: redirect,
      })
      .then(() => {
        Alert.alert("Follow the link in your email");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your email</Text>
      <TextInput
        style={styles.input}
        key="phone"
        onChangeText={(val: string) => setEmail(val)}
        placeholder="test@stytch.com"
        defaultValue={email}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={login}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EML;
