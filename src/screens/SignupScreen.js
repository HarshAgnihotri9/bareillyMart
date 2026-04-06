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

const SignupScreen = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* 🛒 Logo / Brand */}
        <Text style={styles.logo}>Bareilly Mart</Text>

        {/* 👋 Heading */}
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Sign up to start shopping groceries 🚀
        </Text>

        {/* 📦 Input Card */}
        <View style={styles.card}>
          <InputField
            label="Full Name"
            placeholder="Enter your name"
            value={form.name}
            onChangeText={(text) =>
              setForm((prev) => ({ ...prev, name: text }))
            }
          />

          <InputField
            label="Phone Number"
            placeholder="Enter phone number"
            value={form.phone}
            onChangeText={(text) =>
              setForm((prev) => ({ ...prev, phone: text }))
            }
          />

          <InputField
            label="Email"
            placeholder="Enter email"
            value={form.email}
            onChangeText={(text) =>
              setForm((prev) => ({ ...prev, email: text }))
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

        {/* 🚀 Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        {/* 🔁 Login Link */}
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.link}>Login</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f8f9fb",
    justifyContent:'center',
    marginTop:30
  },

  container: {
    padding: 20,
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
    marginBottom: 20,
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