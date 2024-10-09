import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [username, onChangeUsername] = useState<string>("");
  const [password, onChangePassword] = useState<string>("");
  const [email, onChangeEmail] = useState<string>("");

  const onSignupButton = async () => {
    return await axios
      .post("http://localhost:8080/signup", { username, password, email })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Signup</Text>

      <TextInput
        onChangeText={onChangeUsername}
        value={username}
        placeholder="username"
      />
      <TextInput
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
      />
      <TextInput
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
        secureTextEntry={true}
      />

      <Pressable style={styles.verifyButton} onPress={onSignupButton}>
        <Text>Verify</Text>
      </Pressable>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  verifyButton: {
    // position: "absolute",
    // alignSelf: "center",
    right: 0,
  },
});
