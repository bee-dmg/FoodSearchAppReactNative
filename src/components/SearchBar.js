import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange}) => {
 
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput autoCapitalize="none" autoCorrect={false} style={styles.inputStyle} placeholder="Search" value={term} onChangeText={(newTerm)=> onTermChange(newTerm)} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop:10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",

  },
  inputStyle: {
    // borderColor:'black',
    // borderWidth: 1,
    flex: 1,
    fontSize:18,
  },
  iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:15,
  }
});

export default SearchBar;
