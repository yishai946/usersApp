import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";

import Home from "./screens/Home";
import User from "./screens/User";
import Users from "./screens/Users";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />
        }} />
        <Tab.Screen name="UsersStack" component={StackNavigator} options={{
          title: "Users",
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="users" size={size} color={color} />,
          headerShown: false
        }} />
      </Tab.Navigator>
  );
}

export default MyTabs;
