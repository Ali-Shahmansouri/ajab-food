import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, RestaurantScreen } from "./App/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParams = {
  Home: undefined;
  Restaurant: IRestaurant;
};

export default function App() {
  const RootStack = createNativeStackNavigator<RootStackParams>();
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
