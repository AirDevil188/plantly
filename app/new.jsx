import { View, Text, StyleSheet, Alert, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { theme } from "@/theme";
import { useState } from "react";
import { PlantlyImage } from "@/components/PlantlyImage";
import { PlantlyButton } from "@/components/PlantlyButton";
import { usePlantStore } from "@/store/plantsStore";
import { useRouter } from "expo-router";

export default function NewScreen() {
  const [name, setName] = useState("");
  const [days, setDays] = useState("");
  const addPlant = usePlantStore((state) => state.addPlant);
  const router = useRouter();

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

    addPlant(name, Number(days));
    router.replace("/");
  };
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.centered}>
        <PlantlyImage />
      </View>
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
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
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
    flex: 1,
  },
});
