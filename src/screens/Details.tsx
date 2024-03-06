import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ProductDTO } from "../types/Products";

const Details = () => {

  const route = useRoute();
  const {title, description, images} = route.params as ProductDTO;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
