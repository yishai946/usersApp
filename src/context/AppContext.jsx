import { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    if (
      user.firstName == "" ||
      user.lastName == "" ||
      user.age == "" ||
      user.gender == "" ||
      user.email == ""
    ) {
      Alert.alert("Error", "Please fill out all fields");
      return;
    }
    setUsers([...users, user]);
    Alert.alert("Success", "User added");
  };

  return (
    <AppContext.Provider value={{ users, addUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
