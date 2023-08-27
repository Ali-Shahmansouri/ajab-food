import { NavigationContainer } from "@react-navigation/native";
import { BasketScreen, HomeScreen, RestaurantScreen } from "./App/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./App/store/store";
import { Provider } from "react-redux";

export type RootStackParams = {
  Home: undefined;
  Restaurant: IRestaurant;
  Basket: undefined;
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
          <RootStack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
        </RootStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
