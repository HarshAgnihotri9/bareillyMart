import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={styles.wrapper}>
      {/* Label */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Input Container */}
      <View
        style={[
          styles.inputContainer,
          error && { borderColor: "red" },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
        />

        {/* Show/Hide Password */}
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
            <Text style={styles.toggle}>
              {isSecure ? "Show" : "Hide"}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Error */}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    marginBottom: 6,
    color: "#333",
    fontWeight: "500",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
  },

  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: "#000",
  },

  toggle: {
    color: "#ff6b00",
    fontWeight: "600",
  },

  error: {
    color: "red",
    marginTop: 4,
    fontSize: 12,
  },
});