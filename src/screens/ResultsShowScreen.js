import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Yelp from '../api/Yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);

    }
 useEffect(()=>{
getResult(id);
 },[]);


    return <View>
        <Text>Results Show</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
