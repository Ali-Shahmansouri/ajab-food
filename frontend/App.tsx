import { NavigationContainer } from "@react-navigation/native";
import {
  BasketScreen,
  DeliveryScreen,
  HomeScreen,
  PreparingOrderScreen,
  RestaurantScreen,
} from "./App/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./App/store/store";
import { Provider } from "react-redux";

export type RootStackParams = {
  Home: undefined;
  Restaurant: IRestaurant;
  Basket: undefined;
  PreparingOrder: undefined;
  Delivery: undefined;
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
          <RootStack.Screen
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{ headerShown: false, presentation: "fullScreenModal" }}
          />
          <RootStack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ headerShown: false, presentation: "fullScreenModal" }}
          />
        </RootStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
