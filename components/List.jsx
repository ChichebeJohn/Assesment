// List.jsx
import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

const Item = ({ name, details }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </View>
);

const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }
    // Custom search for specific items
    const itemName = item.name.toLowerCase();
    const searchTerm = searchPhrase.toLowerCase().trim();
    if (itemName.includes(searchTerm)) {
      return <Item name={item.name} details={item.details} />;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View onStartShouldSetResponder={() => setClicked(false)}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
  details: {
    fontSize: 16,
  },
});
