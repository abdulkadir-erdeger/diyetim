import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import CreateMenu from "./pages/CreateMenu";
import Report from "./pages/Report";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import MenuProvider from "./context";

const Stack = createNativeStackNavigator();

const Router = () => {
  const CustomTabBarButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="arrow-back-circle" size={40} color="black" />
    </TouchableOpacity>
  );

  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#b2ff59" },
            headerTitleStyle: { color: "black" },
            headerTitleAlign: "center",
            // headerLeft: (props) => <CustomTabBarButton {...props} />,
          }}
        >
          <Stack.Screen
            name="HomePage"
            component={Home}
            options={{
              title: "Diyetim",
            }}
          />
          <Stack.Screen
            name="CreateMenuPage"
            component={CreateMenu}
            options={({ navigation }) => ({
              title: "Menu Oluştur",
              headerLeft: () => (
                <CustomTabBarButton
                  onPress={() => navigation.navigate("HomePage")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="RaporPage"
            component={Report}
            options={({ navigation }) => ({
              title: "Rapor",
              headerLeft: () => (
                <CustomTabBarButton onPress={() => navigation.goBack()} />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default Router;
