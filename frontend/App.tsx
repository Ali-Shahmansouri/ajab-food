import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, RestaurantScreen } from "./App/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./App/store/store";
import { Provider } from "react-redux";

export type RootStackParams = {
  Home: undefined;
  Restaurant: IRestaurant;
};

export default function App() {
  const RootStack = createNativeStackNavigator<RootStackParams>();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
