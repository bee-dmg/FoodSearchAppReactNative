import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
// import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const apiKey = process.env.REACT_APP_YELP_KEY;
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("term submited")}
      />
      <Text>{apiKey}</Text>
      {console.log(process.env)}
      <Text>Search Screen {term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
