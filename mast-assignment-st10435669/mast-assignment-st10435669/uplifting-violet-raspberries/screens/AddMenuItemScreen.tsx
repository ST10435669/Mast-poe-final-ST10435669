import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useMenu } from "../MenuContext";

export default function AddMenuItemScreen({ navigation }: { navigation: any }) {
  const { addMenuItem } = useMenu();
  const [mealName, setMealName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Appetizers"); // Default category

  const handleSave = () => {
    if (!mealName || !description || !price) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const newMenuItem = {
      id: Date.now().toString(), // Unique ID
      category,
      name: mealName,
      price: price || "R10", // Default price if not provided
      description,
    };

    addMenuItem(newMenuItem);
    navigation.goBack(); // Return to EditMenuScreen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Add Menu Item</Text>

      {/* Category Dropdown */}
      <Text style={styles.label}>Select Category</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Appetizers" value="Appetizers" />
          <Picker.Item label="Entrees" value="Entrees" />
          <Picker.Item label="Main dishes" value="Main dishes" />
          <Picker.Item label="Desserts" value="Desserts" />
        </Picker>
      </View>

      {/* Meal Name Input */}
      <Text style={styles.label}>Meal Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={mealName}
        onChangeText={setMealName}
      />

      {/* Price Input */}
      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      {/* Description Input */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  backButton: { marginBottom: 20 },
  backButtonText: { fontSize: 16, color: "blue" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5, color: "#000" },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    backgroundColor: "#f8f8f8",
  },
  input: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
  },
  textArea: { height: 80 },
  saveButton: {
    backgroundColor: "gold",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: { color: "#000", fontWeight: "bold" },
});

