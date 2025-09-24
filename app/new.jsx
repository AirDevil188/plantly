import { View, Text, StyleSheet, Alert, TextInput } from "react-native";
import { theme } from "@/theme";
import { useState } from "react";
import { PlantlyImage } from "@/components/PlantlyImage";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function NewScreen() {
  const [name, setName] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert(
        "Validation error!",
        "You must give a name to your plant"
      );
    }

    if (!days) {
      return Alert.alert(
        "Validation error",
        `How does often ${name} need hydration`
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation error",
        "Watering frequency must be a number"
      );
    }

    console.log("Adding a plant", name, days);
  };
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <View style={styles.imageContainer}>
          <PlantlyImage />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="E.g. Casper the Cactus"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <Text style={styles.label}>Watering Frequency (every x days)</Text>
          <TextInput
            placeholder="E.g. 6"
            value={days}
            onChangeText={setDays}
            style={styles.input}
          ></TextInput>
          <PlantlyButton title={"Add plant"} onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colorLightGrey,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 0,
  },
  centered: {
    alignItems: "center",
  },
});
