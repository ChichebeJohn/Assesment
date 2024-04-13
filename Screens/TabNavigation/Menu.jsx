import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from '@react-navigation/native';
import SearchBar from "../../components/SearchBar";

import ShoppingBagIcon from "../../components/ShoppingBag";

import List from "../../components/List";
import HeartIcon from "../../components/HeartIcon";

const Menu = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [mealData, setMealData] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    const getData = async () => {
      try {
        const data = [
          {
            id: 1,
            name: "African Dou....",
            price: "£30",
            image:
              "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sy6fzAEXI1LH148JH8k98aH~b~5NRABtmsHABeHk-NMjaBl6nd46-mkJRR8TPdAepxjMJHB~RjT7Y8MeCen4g26S412i203940dKYWt62M5fYs9LOlqbNRCVzD8zrWurWbMUme43zLp6oZSd35TypsPDJLCWD~k0YbVja1kEosIeJQKpyQAeq5u-fUaNuT0yk7VYMNACR~GYM0POI2rIsanEeJCKVYcjifWmti70mXE424cwOMEsOjcKOZPcGGqLPIlxEYn9A2RO8bDMBJdWpW3yGxA2qiD~TmFy3uLGxnKuVebqOKEo5isnHdZxQfcLJxck7JxwH00sK6SVMuoCNA__",
          },

          {
            id: 2,
            name: "Efo Riro",
            price: "£30",
            image:
              "https://s3-alpha-sig.figma.com/img/b9c6/c267/1723fca06277aa180afddf41cfc06065?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KmH2TGQUpe-rkLe-7LvPUDsz3HPq5d4HEUxnUoUdtWoSk-qSay9kYv-NHknDasX-bCCXnyvEVtiBhaYJxfpysa5JxSTlOAvn~orKGbiFEf0P9lYXGbEWZbJTC3tyZGtOL3ySt8pWp8RqhU~0YTF-De4gOcT4XeAA0lVXd0f-4ThJ~wFW4f3sb90xuBpWGKAE3LgM9hpL2n7d3ZY3wQlDoaLyYMBRZPxkscZYpyczEu5X4apAM-NBaMywFHWsthW0tK6RQQFokxaAm3hYIZdgbUy8VycDPsdHL9LlPeu-u0jOY-Ru2DPguRTmd6bG~~ZO50gBhldF3vWYocdZDwaj~A__",
          },

          {
            id: 3,
            name: "Asaro",
            details: "(Yam...",
            price: "£30",
            image:
              "https://s3-alpha-sig.figma.com/img/8127/df7c/f3e1712529caa0b55e1663646c798fd3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gkgjO2BD8xzANeghNrxktHzyBrrUAhWJBA~2mH8ixVzVSvPARQyqreV6jTe9fhtW5-NoSjyu6rG7N6wBoVHJW1V8b9tR-G9fyK5Z~4c0dXKHsRkR3ZdvuZ2oDU36L8khGRVLWR3iDSqbdYJGbHM01XrFOGCkqpr0Jx6A9hsnZRAyOZo6XLT6LMTkmDb8nAXQURs8aC~a~5ATM4UKXga-oO2ffUcBaCGWznEeNbYeHKY-vkyzbcUEZoBzsWbwEDHXIOsirn~sjruKYjaMfyGWCTZatzHSygX9iuY2Jy~z5UvmVXl82VQfR6ocsktXYhZTeeOkNe8fowZrQNLAubfLKg__",
          },

          {
            id: 4,
            name: "Chicken Stew",
            price: "£30",
            image:
              "https://s3-alpha-sig.figma.com/img/3a7c/fb08/a1d7b520531bdedb26a13f45224a54da?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifKSTVm89mj8a7i78FeZycvUwFTbs0XymC--BxhNeYH37KAkK5zWF2mjtx6NeLw5lTur-xO44XDFm4Jd28Pn~5i7NZI4RdJINzISVb1dpBKmGjub8z0QWeTH~4PCaRDmlDyANRVTcHcWcX6h8onv3owIfMBzMX32yZQF7gx9RDqassdjRy2GZr4baPhvnaAWAsPS0iR7TGfF2cZc2uEGkjNo7F5MiLBuR746vnT9JF4E7hqgwed03BJOECqp7~048N3148FR~H7DiG3zqdUTYTiSgiJk0Dz8qgZtCeA9kL5i8EcAuHBqwdDNlGVyLvZrE5sCkUWsd5kF-7kVN16fwQ__",
          },

          {
            id: 5,
            name: "Asaro",
            details: "(Yam...",
            price: "£30",
            image:
              "https://s3-alpha-sig.figma.com/img/8127/df7c/f3e1712529caa0b55e1663646c798fd3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gkgjO2BD8xzANeghNrxktHzyBrrUAhWJBA~2mH8ixVzVSvPARQyqreV6jTe9fhtW5-NoSjyu6rG7N6wBoVHJW1V8b9tR-G9fyK5Z~4c0dXKHsRkR3ZdvuZ2oDU36L8khGRVLWR3iDSqbdYJGbHM01XrFOGCkqpr0Jx6A9hsnZRAyOZo6XLT6LMTkmDb8nAXQURs8aC~a~5ATM4UKXga-oO2ffUcBaCGWznEeNbYeHKY-vkyzbcUEZoBzsWbwEDHXIOsirn~sjruKYjaMfyGWCTZatzHSygX9iuY2Jy~z5UvmVXl82VQfR6ocsktXYhZTeeOkNe8fowZrQNLAubfLKg__",
          },

          {
            id: 6,
            name: "Asaro",
            details: "(Yam...",
            price: "£30",
            image:
              "https://s3-alpha-sig.figma.com/img/8127/df7c/f3e1712529caa0b55e1663646c798fd3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gkgjO2BD8xzANeghNrxktHzyBrrUAhWJBA~2mH8ixVzVSvPARQyqreV6jTe9fhtW5-NoSjyu6rG7N6wBoVHJW1V8b9tR-G9fyK5Z~4c0dXKHsRkR3ZdvuZ2oDU36L8khGRVLWR3iDSqbdYJGbHM01XrFOGCkqpr0Jx6A9hsnZRAyOZo6XLT6LMTkmDb8nAXQURs8aC~a~5ATM4UKXga-oO2ffUcBaCGWznEeNbYeHKY-vkyzbcUEZoBzsWbwEDHXIOsirn~sjruKYjaMfyGWCTZatzHSygX9iuY2Jy~z5UvmVXl82VQfR6ocsktXYhZTeeOkNe8fowZrQNLAubfLKg__",
          },
        ];
        setMealData(data);
      } catch (error) {
        console.error("Error setting data:", error);
      }
    };
    getData();
  }, []);

  const handleAddToCart = (itemName) => {
    
    navigation.navigate('ProductDetails', { item });
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.root}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
        <View style={styles.container}>
          {mealData.map((item) => (
            <View
              key={item.id}
              style={[
                styles.item,
                { backgroundColor: "white", borderRadius: 10, height: 260 },
              ]}
            >
              <View style={{ marginLeft: 80, top: 13 }}>
                <HeartIcon color={"black"} width={24} height={24} />
              </View>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDetails}>{item.details}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#DB3C25",
                  borderRadius: 20,
                  height: 43,
                  width: 145,
                  alignContent: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <TouchableOpacity
                  onPress={() => handleAddToCart(item.name)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <View style={{ right: 85 }}>
                  <ShoppingBagIcon width={30} height={30} />
                </View>
              </View>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  item: {
    width: "45%", // Adjust as needed to leave space between items
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "white", // Set background color to white
    gap: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDetails: {
    fontSize: 15,
    opacity: 0.6, // Set opacity to make it look faded
    color: "black",
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 15,
    color: "red",
    fontWeight: "bold",
    opacity: 0.6,
  },
  image: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignSelf: "center",
    bottom: 3,
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    left: 30,
  },
  itemInfo: {
    flexDirection: "row",
    gap: 15,
  },
});
