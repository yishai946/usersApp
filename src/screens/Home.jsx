import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Inputs, Containers, Typography, Buttons } from "../styles";
import { useAppContext } from "../context/AppContext";
import TextAvatar from "react-native-text-avatar";

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

const Home = () => {
  const { addUser } = useAppContext();
  const [color, setColor] = React.useState("#000000");

  const [userObj, setUserObj] = React.useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
  });

  const add = () => {
    addUser(userObj);
    setUserObj({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      email: "",
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextAvatar
        backgroundColor={color}
        textColor={"white"}
        size={60}
        type={"circle"}
      >
        {userObj.firstName}
      </TextAvatar>
      <View style={styles.left}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          value={userObj.firstName}
          onChangeText={(text) => {
            setUserObj({ ...userObj, firstName: text });
            setColor(colorHash(text).hex);
          }}
        />
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.input}
          value={userObj.lastName}
          onChangeText={(text) => setUserObj({ ...userObj, lastName: text })}
        />
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          value={userObj.age}
          onChangeText={(text) => setUserObj({ ...userObj, age: text })}
        />
        <Text style={styles.label}>Gender:</Text>
        <TextInput
          style={styles.input}
          value={userObj.gender}
          onChangeText={(text) => setUserObj({ ...userObj, gender: text })}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={userObj.email}
          onChangeText={(text) => setUserObj({ ...userObj, email: text })}
        />
      </View>

      <TouchableOpacity style={styles.smallButton} onPress={add}>
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    ...Containers.centerHorizontal,
    marginTop: 30,
  },
  input: {
    ...Inputs.smallInput,
    marginVertical: 10,
  },
  header: {
    ...Typography.header,
  },
  subHeader: {
    ...Typography.subHeader,
  },
  label: {
    ...Typography.label,
    marginTop: 20,
  },
  left: {
    width: "70%",
  },
  smallButton: {
    ...Buttons.smallButton,
    marginTop: 20,
  },
});
