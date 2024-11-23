// screens/BookingsScreen.tsx
// screens/BookingsScreen.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const bookings = [
  { id: "1", client: "James Brown", date: "18 Feb 2025", time: "13:00" },
  { id: "2", client: "momo kadir", date: "18 Feb 2025", time: "20:00" },
  { id: "3", client: "Ben white", date: "20 Feb 2025", time: "12:00" },
  { id: "4", client: "ali khan", date: "21 Feb 2025", time: "10:00" },
];

export default function BookingsScreen() {
  const navigation = useNavigation();

  const renderBooking = ({ item }: { item: any }) => (
    <View style={styles.bookingContainer}>
      <View style={styles.bookingDetails}>
        <Text style={styles.clientName}>Client: {item.client}</Text>
        <Text style={styles.bookingText}>Date: {item.date}</Text>
        <Text style={styles.bookingText}>Time: {item.time}</Text>
      </View>
      <TouchableOpacity
        style={styles.viewMenuButton}
        onPress={() => navigation.navigate("ViewMenu")}
      >
        <Text style={styles.viewMenuText}>View Menu</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }} // Replace with the app logo
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>LA COMIDA PRINCIPAL</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.logoutButton}>Log out</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome Message */}
      <Text style={styles.welcomeMessage}>Welcome Chef Ramsy</Text>

      {/* Booking List */}
      <Text style={styles.sectionTitle}>Your Bookings</Text>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={renderBooking}
        contentContainerStyle={styles.bookingsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#000",
  },
  logo: { width: 40, height: 40 },
  headerTitle: { fontSize: 18, color: "gold", fontWeight: "bold" },
  logoutButton: { color: "gold", fontSize: 14 },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
    color: "#000",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 10,
    color: "#000",
  },
  bookingsList: { paddingHorizontal: 15 },
  bookingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  bookingDetails: { flex: 1 },
  clientName: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  bookingText: { fontSize: 14, color: "#555" },
  viewMenuButton: {
    backgroundColor: "gold",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  viewMenuText: { color: "#000", fontWeight: "bold", fontSize: 14 },
});
