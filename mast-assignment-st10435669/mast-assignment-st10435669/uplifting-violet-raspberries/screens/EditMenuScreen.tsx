import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from "react-native";
import { useMenu } from "../MenuContext";

export default function EditMenuScreen({ navigation }: { navigation: any }) {
  const { menu, addMenuItem, updateMenuItem, removeMenuItem } = useMenu();
  const [editingItemId, setEditingItemId] = useState<string | null>(null); // Tracks which item is being edited
  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const handleEditItem = (item: any) => {
    setEditingItemId(item.id);
    setEditedName(item.name);
    setEditedPrice(item.price);
    setEditedDescription(item.description);
  };

  const handleSaveChanges = () => {
    if (!editedName || !editedPrice || !editedDescription) {
      Alert.alert("Error", "All fields must be filled out.");
      return;
    }

    updateMenuItem(editingItemId, {
      name: editedName,
      price: editedPrice,
      description: editedDescription,
    });

    setEditingItemId(null);
    setEditedName("");
    setEditedPrice("");
    setEditedDescription("");
  };

  const handleRemoveItem = (id: string, name: string) => {
    Alert.alert(
      "Confirm Delete",
      `Are you sure you want to remove "${name}" from the menu?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes, Remove", onPress: () => removeMenuItem(id) },
      ]
    );
  };

  const renderMenuItem = ({ item }: { item: any }) => {
    const isEditing = editingItemId === item.id;

    return (
      <View style={styles.menuItem}>
        {isEditing ? (
          <>
            {/* Editable Fields */}
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={editedName}
              onChangeText={setEditedName}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={editedPrice}
              onChangeText={setEditedPrice}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Description"
              value={editedDescription}
              onChangeText={setEditedDescription}
              multiline
            />
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.actionButton, styles.saveButton]}
                onPress={handleSaveChanges}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.cancelButton]}
                onPress={() => setEditingItemId(null)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            {/* Read-Only Fields */}
            <View style={styles.menuDetails}>
              <Text style={styles.menuItemText}>{item.name} - {item.price}</Text>
              <Text style={styles.menuItemDescription}>{item.description}</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.actionButton, styles.editButton]}
                onPress={() => handleEditItem(item)}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => handleRemoveItem(item.id, item.name)}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Edit Menu</Text>

      {/* Menu List */}
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.flatListContent}
      />

      {/* Add New Item Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddMenuItem")}
      >
        <Text style={styles.addButtonText}>Add Menu Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  backButton: { marginBottom: 20 },
  backButtonText: { fontSize: 16, color: "blue" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  flatListContent: { paddingBottom: 20 },
  menuItem: {
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
  menuDetails: { marginBottom: 10 },
  menuItemText: { fontSize: 16, fontWeight: "bold" },
  menuItemDescription: { fontSize: 14, color: "#666" },
  input: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  textArea: { height: 80 },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  editButton: { backgroundColor: "gold" },
  deleteButton: { backgroundColor: "red" },
  saveButton: { backgroundColor: "green" },
  cancelButton: { backgroundColor: "#ccc" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  addButton: {
    marginTop: 20,
    backgroundColor: "gold",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  addButtonText: { fontWeight: "bold", color: "#000" },
});


