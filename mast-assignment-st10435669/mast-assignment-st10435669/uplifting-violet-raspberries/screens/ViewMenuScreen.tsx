import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SectionList,
} from "react-native";

type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

type SectionData = {
  title: string;
  data: MenuItem[];
};

// Sample Menu Data
const menu: SectionData[] = [
  {
    title: "Appetizers",
    data: [
      {
        id: "1",
        name: "Bruschetta",
        price: "R10",
        description: "Toasted bread topped with diced tomatoes, garlic, basil, and olive oil",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-07-bruschetta%2FBruschetta_10000jpg",
      },
      {
        id: "2",
        name: "Stuffed Mushrooms",
        price: "R10",
        description: "Mushrooms filled with a mixture of cream cheese, garlic, herbs, and breadcrumbs.",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2019/12/stuffed-mushrooms-2.jpg",
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
        image: "https://keviniscooking.com/wp-content/uploads/2018/02/How-to-Make-Creamy-Lobster-Bisque-square.jpg",
      },
      {
        id: "4",
        name: "Seared Tuna Salad",
        price: "R10",
        description: "Fresh tuna steak, seared and served over mixed greens with a vinaigrette.",
        image: "https://www.feastingathome.com/wp-content/uploads/2024/07/Ahi-tuna-salad-recipe-16.jpg",
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
        image: "https://thesageapron.com/wp-content/uploads/2022/07/Grilled-Ribeye-7.jpg",
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
        image: "https://www.wellseasonedstudio.com/wp-content/uploads/2023/11/Italian-tiramisu-on-a-plate-with-cocoa-powder-and-chocolate-shavings.jpg",
      },
    ],
  },
];

const ViewMenuScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>View Menu</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("EditMenu")}
        >
          <Text style={styles.editButtonText}>Edit Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable SectionList */}
      <SectionList
        sections={menu}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.categoryHeader}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <View style={styles.menuItemInfo}>
              <Text style={styles.menuItemName}>
                {item.name} <Text style={styles.menuItemPrice}>{item.price}</Text>
              </Text>
              <Text style={styles.menuItemDescription}>{item.description}</Text>
            </View>
            <Image source={{ uri: item.image }} style={styles.menuItemImage} />
          </View>
        )}
        contentContainerStyle={styles.sectionListContent}
        showsVerticalScrollIndicator={false} // Hide scrollbar for cleaner UI
      />

      {/* Total Section */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>R60</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the entire screen
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  backArrow: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  editButton: {
    backgroundColor: "#f0c057",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  editButtonText: {
    fontWeight: "bold",
    color: "#000",
  },
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
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  menuItemInfo: {
    flex: 1,
    marginRight: 10,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f0c057",
  },
  menuItemDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#ddd",
  },
  sectionListContent: {
    paddingBottom: 100, // Ensures content doesn't overlap with the footer
  },
  totalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f0c057",
  },
});

export default ViewMenuScreen;
