import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { usePlantStore } from "@/store/plantsStore";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const plants = usePlantStore((store) => store.plants);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        renderItem={({ item }) => <PlantCard plant={item} />}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        ListEmptyComponent={
          <PlantlyButton
            title={"Add your first plant"}
            onPress={() => router.navigate("/new")}
          />
        }
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 12,
  },
});
