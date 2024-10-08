import { SafeAreaView, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Signup() {
  const [text, onChangeText] = useState<string>("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="username"
      />
    </SafeAreaView>
  );
}
