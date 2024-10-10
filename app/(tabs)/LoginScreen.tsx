import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import axios from "axios";

import { Colors } from '@/constants/Colors'
import { ThemedText } from "@/components/ThemedText";

export default function LoginScreen() {
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

  const handleForgotPassword = async () => {
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText style={{ fontFamily: 'Roboto' }}>tabichan</ThemedText>

      <View style={styles.loginView}>
        <TextInput style={styles.input}
          placeholderTextColor={Colors.light.inputStyles.placeholderTextColor}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="username or email"
        />
        <TextInput style={styles.input}
          onChangeText={onChangePassword}
          placeholderTextColor={Colors.light.inputStyles.placeholderTextColor}
          value={password}
          placeholder="password"
          secureTextEntry={true}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.linkText}>forgot my password</Text>
          </TouchableOpacity>
        </View>
        
        <Pressable style={styles.loginButton} onPress={onSignupButton}>
          <Text style={styles.loginButtonText}>login</Text>
        </Pressable>
       
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.light.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginView: {
    gap: 7,
    width: "100%",
    paddingHorizontal: 30,
  },
  input: {
    height : 55,
    fontSize:16,
    paddingHorizontal : 10,
    borderColor : Colors.light.inputStyles.borderColor,
    color:Colors.light.inputStyles.color,
    borderWidth : 1,
    borderRadius: 16,
    backgroundColor: Colors.light.inputStyles.backgroundColor
  },
  loginButton: {
    marginTop: 20,
    borderWidth : 1,
    borderRadius: 16,
    backgroundColor: Colors.accent,
    height: 55, 
    borderColor : Colors.light.inputStyles.borderColor,
    alignItems : "center",
    justifyContent : "center"
    
  },
  loginButtonText: {
    fontSize:16,
    fontWeight: "bold",
    color: "white"
  },
  linkContainer: {
    alignItems:'flex-end',
  },
  linkText: {
    color: "#00ABEE",
    fontSize: 11,
  }
});
