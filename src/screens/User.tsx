import { StyleSheet, Text, View } from "react-native";
import React, {useContext} from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const {user} = useContext(UserContext);
  return (
    <View>
      <Text>{user.firstname}</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
