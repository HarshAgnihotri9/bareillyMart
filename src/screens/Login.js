import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import InputField from "../components/InputFeild";

const LoginScreen = () => {
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* 🛒 Logo */}
        <Text style={styles.logo}>Bareilly Mart</Text>

        {/* 👋 Heading */}
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>
          Login to continue shopping
        </Text>

        {/* 📦 Input Card */}
        <View style={styles.card}>
          <InputField
            label="Phone Number"
            placeholder="Enter phone number"
            value={form.phone}
            onChangeText={(text) =>
              setForm((prev) => ({ ...prev, phone: text }))
            }
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            secureTextEntry
            value={form.password}
            onChangeText={(text) =>
              setForm((prev) => ({ ...prev, password: text }))
            }
          />
        </View>

        {/* 🔐 Forgot Password */}
        <Text style={styles.forgot}>Forgot Password?</Text>

        {/* 🚀 Login Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* 🔁 Signup Redirect */}
        <Text style={styles.footerText}>
          Don’t have an account?{" "}
          <Text style={styles.link}>Signup</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f8f9fb",
  },

  container: {
    padding: 20,
    marginTop:40
  },

  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff6b00",
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111",
    marginTop:20
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 15,
  },

  forgot: {
    textAlign: "right",
    color: "#ff6b00",
    marginBottom: 10,
    fontSize: 13,
  },

  button: {
    backgroundColor: "#ff6b00",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  footerText: {
    marginTop: 15,
    textAlign: "center",
    color: "#666",
  },

  link: {
    color: "#ff6b00",
    fontWeight: "600",
  },
});