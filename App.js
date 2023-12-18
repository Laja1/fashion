import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store";

import Product from "./components/Product";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Menu from "./components/Menu";

import Category from "./components/Category";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e7eaef",
        },
        drawerStyle: {
          backgroundColor: "green",
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "OPEN FASHION",

          drawerLabel: "Home Label",
          drawerActiveTintColor: "#333",
          drawerActiveBackgroundColor: "lightblue",
          drawerContentStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Category" component={Category} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            headerTitle: "OPEN FASHION",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
