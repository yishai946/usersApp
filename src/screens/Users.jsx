import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useAppContext } from "../context/AppContext";
import TextAvatar from "react-native-text-avatar";
import { Containers, Typography } from "../styles";

function colorHash(inputString) {
  var sum = 0;

  for (var i in inputString) {
    sum += inputString.charCodeAt(i);
  }

  r = ~~(
    ("0." +
      Math.sin(sum + 1)
        .toString()
        .substr(6)) *
    256
  );
  g = ~~(
    ("0." +
      Math.sin(sum + 2)
        .toString()
        .substr(6)) *
    256
  );
  b = ~~(
    ("0." +
      Math.sin(sum + 3)
        .toString()
        .substr(6)) *
    256
  );

  var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

  var hex = "#";

  hex += ("00" + r.toString(16)).substr(-2, 2).toUpperCase();
  hex += ("00" + g.toString(18)).substr(-2, 2).toUpperCase();
  hex += ("00" + b.toString(20)).substr(-2, 2).toUpperCase();

  return {
    r: r,
    g: g,
    b: b,
    rgb: rgb,
    hex: hex,
  };
}

const Card = ({ user, navigation }) => {
  const openUser = () => {
    navigation.navigate("User", { user });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={openUser}>
      <TextAvatar
        backgroundColor={colorHash(user.firstName).hex}
        textColor={"white"}
        size={60}
        type={"circle"}
      >
        {user.firstName}
      </TextAvatar>
      <Text style={Typography.label}>
        {user.firstName + " " + user.lastName}
      </Text>
      <Text>{user.email}</Text>
    </TouchableOpacity>
  );
};

const Users = ({ navigation }) => {
  const { users } = useAppContext();

  return (
    <View style={styles.container}>
      {users.map((user, index) => (
        <Card key={index} user={user} navigation={navigation} />
      ))}
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    ...Containers.centerHorizontal,
    paddingVertical: 30,
  },
  cardContainer: {
    alignItems: "center",
    gap: 10,
    marginVertical: 20,
  },
});
