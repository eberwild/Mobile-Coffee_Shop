import Cart from "@/assets/images/icons/cart.png";
import Minus from "@/assets/images/icons/minus.png";
import Plus from "@/assets/images/icons/plus.png";
import MenuImages from "@/constants/MenuImages";
import { MENU_ITEMS } from "@/constants/MenuItems";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
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
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
          <Pressable style={styles.cartButton}>
            <Image
              source={Cart}
              style={[styles.icon, styles.cart]}
              resizeMode="cover"
            />
          </Pressable>
        </View>

        <Image source={image} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (value > 0) {
              setValue((prev) => prev - 1);
            }
          }}
        >
          <Image source={Minus} resizeMode="cover" style={styles.icon} />
        </Pressable>
        <Text style={styles.value}>{value}</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            setValue((prev) => prev + 1);
          }}
        >
          <Image source={Plus} resizeMode="cover" style={styles.icon} />
        </Pressable>
      </View>

      <Pressable style={styles.addCartButton}>
        <Text style={styles.text}>Add to Cart</Text>
      </Pressable>
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
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartButton: {
    backgroundColor: "white",
    padding: 4,
    borderRadius: 29,
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
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgba(223, 213, 213, 0.8)",
    marginTop: 25,
    width: "95%",
    borderRadius: 10,
  },
  button: {
    height: 50,
    width: 50,
  },
  icon: {
    with: 50,
    height: 50,
  },
  value: {
    fontSize: 25,
    color: "white",
  },
  addCartButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "rgba(218, 130, 15, 0.6)",
    width: "30%",
    borderRadius: 18,
  },
});
