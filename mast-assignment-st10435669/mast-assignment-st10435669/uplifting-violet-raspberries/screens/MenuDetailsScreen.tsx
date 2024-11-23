import React from "react";
import { View, Text, StyleSheet, Image, SectionList, TouchableOpacity } from "react-native";

const menu = [
  {
    title: "Appetizers",
    data: [
      {
        id: "1",
        name: "Bruschetta",
        price: "R10",
        description: "Toasted bread topped with diced tomatoes, garlic, basil, and olive oil",
        image: "https://via.placeholder.com/80",
      },
      {
        id: "2",
        name: "Stuffed Mushrooms",
        price: "R10",
        description: "Mushrooms filled with a mixture of cream cheese, garlic, herbs, and breadcrumbs.",
        image: "https://via.placeholder.com/80",
      },
    ],
  },
  {
    title: "Entrees",
    data: [
      {
        id: "3",
        name: "Lobster Bisque",
        price: "R10",
        description: "A rich, creamy lobster soup, often garnished with lobster meat.",
        image: "https://via.placeholder.com/80",
      },
      {
        id: "4",
        name: "Seared Tuna Salad",
        price: "R10",
        description: "Fresh tuna steak, seared and served over mixed greens with a vinaigrette.",
        image: "https://via.placeholder.com/80",
      },
    ],
  },
  {
    title: "Main dishes",
    data: [
      {
        id: "5",
        name: "Grilled Ribeye Steak",
        price: "R10",
        description: "A juicy ribeye steak grilled to perfection and served with sides like mashed potatoes.",
        image: "https://via.placeholder.com/80",
      },
    ],
  },
  {
    title: "Desserts",
    data: [
      {
        id: "6",
        name: "Tiramisu",
        price: "R10",
        description:
          "A layered Italian dessert made of coffee-soaked ladyfingers, mascarpone cheese, cocoa powder, and coffee.",
        image: "https://via.placeholder.com/80",
      },
    ],
  },
];

export default function MenuDetailsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>View Menu</Text>
      </View>

      {/* Menu Section */}
      <SectionList
        sections={menu}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.categoryHeader}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image source={{ uri: item.image }} style={styles.menuImage} />
            <View style={styles.menuDetails}>
              <Text style={styles.menuName}>
                {item.name} - <Text style={styles.menuPrice}>{item.price}</Text>
              </Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.menuList}
      />

      {/* Total Section */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>R60</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: { fontSize: 16, color: "blue" },
  headerText: { fontSize: 20, fontWeight: "bold", marginLeft: 10 },
  categoryHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 15,
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuImage: { width: 60, height: 60, marginRight: 10, borderRadius: 8 },
  menuDetails: { flex: 1 },
  menuName: { fontSize: 16, fontWeight: "bold" },
  menuPrice: { color: "#f0c057" },
  menuDescription: { fontSize: 14, color: "#666", marginTop: 5 },
  menuList: { paddingBottom: 80 },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  totalText: { fontSize: 18, fontWeight: "bold" },
  totalPrice: { fontSize: 18, fontWeight: "bold", color: "#f0c057" },
});
