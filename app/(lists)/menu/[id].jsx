import MenuImages from "@/constants/MenuImages";
import { MENU_ITEMS } from "@/constants/MenuItems";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [value, setValue] = useState(0);

  const { title, description } = MENU_ITEMS.find(
    (item) => item.id.toString() === id,
  );

  const image = MenuImages[id - 1];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>

        <Image source={image} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>

      <View style={styles.orderContainer}>
        <Text style={styles.orderText}>Order {title} here:</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="-"
            style={styles.button}
            onPress={() => {
              setValue((prev) => prev - 1);
            }}
          ></Button>
          <Text>{value}</Text>
          <Button
            title="+"
            style={styles.button}
            onPress={() => {
              setValue((prev) => prev + 1);
            }}
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 35,
    alignSelf: "center",
    color: "rgba(218, 130, 15, 0.6)",
  },
  text: {
    color: "white",
    fontSize: 19,
    textAlign: "center",
  },
  textContainer: {
    backgroundColor: "rgba(218, 130, 15, 0.6)",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  image: {
    resizeMode: "cover",
    borderRadius: 15,
    alignSelf: "center",
    borderColor: "rgba(218, 130, 15, 0.6)",
    borderWidth: 1,
    marginBottom: 30,
    marginTop: 30,
  },
  orderContainer: {
    backgroundColor: "rgba(104, 98, 98, 0.8)",
    flexDirection: "column",
    marginTop: 50,
    width: "95%",
    borderRadius: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  orderText: {
    color: "white",
    marginBottom: 25,
    alignSelf: "center",
  },
  button: {
    color: "rgba(218, 130, 15, 0.6)",
    borderRadius: 10,
  },
});
