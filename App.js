import MyTabs from "./src/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./src/context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </AppProvider>
  );
}
