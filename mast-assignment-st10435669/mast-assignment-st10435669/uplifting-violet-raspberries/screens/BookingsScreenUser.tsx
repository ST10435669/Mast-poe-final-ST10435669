import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function BookingsScreenUser({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("")} style={styles.logo} />
        <Text style={styles.headerText}>LA COMIDA PRINCIPAL</Text>
        <TouchableOpacity onPress={() => alert("Logging out")} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.profilePicture}
        />
        <Text style={styles.welcomeText}>Welcome James Brown</Text>
      </View>

      {/* Bookings Section */}
      <Text style={styles.sectionTitle}>Your Bookings</Text>
      <View style={styles.bookingItem}>
        <View>
          <Text style={styles.bookingText}>Chef: Gordon Ramsy</Text>
          <Text style={styles.bookingText}>Date: 18 Feb 2025</Text>
          <Text style={styles.bookingText}>Time: 20:00</Text>
        </View>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => navigation.navigate("MenuDetailsScreen")}
        >
          <Text style={styles.viewButtonText}>View Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logo: { width: 40, height: 40 },
  headerText: { fontSize: 18, fontWeight: "bold", color: "#000" },
  logoutButton: {},
  logoutText: { fontSize: 14, color: "red" },
  welcomeSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  welcomeText: { fontSize: 16, fontWeight: "bold" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  bookingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  bookingText: { fontSize: 14, color: "#000", marginBottom: 5 },
  viewButton: {
    backgroundColor: "#fdd835",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  viewButtonText: { color: "#000", fontWeight: "bold" },
});
