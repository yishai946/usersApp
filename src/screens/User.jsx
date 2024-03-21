import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TextAvatar from "react-native-text-avatar";
import { Typography, Containers, Buttons } from "../styles";

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

const User = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <View style={Containers.center}>
      <TextAvatar
        backgroundColor={colorHash(user.firstName).hex}
        textColor={"white"}
        size={100}
        type={"circle"}
      >
        {user.firstName}
      </TextAvatar>
      <View
        style={{
          gap: 10,
          display: "flex",
          alignItems: "center",
          marginVertical: 30,
        }}
      >
        <Text style={Typography.header}>
          {user.firstName + " " + user.lastName}
        </Text>
        <Text style={Typography.subHeader}>{user.email}</Text>
        <Text style={Typography.subHeader}>{user.gender}</Text>
        <Text style={Typography.subHeader}>{user.age}</Text>
      </View>
      <TouchableOpacity
        style={Buttons.smallButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ color: "white" }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    ...Containers.center,
  },
});
