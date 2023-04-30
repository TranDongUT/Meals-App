import { StyleSheet, TextInput } from 'react-native';
// expo
import { StatusBar } from 'expo-status-bar';

// screen
import Categories from './src/screens/Categories';
import MealsOverview from './src/screens/MealsOverview';
import MealDetailScreen from './src/screens/MealDetailScreen';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './src/screens/Favorites';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#351401',
        },
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },

        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={Categories}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={Favorites}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#351401',
            },
            contentStyle: {
              backgroundColor: '#3f2f25',
            },
          }}
        >
          <Stack.Screen
            name='Drawer'
            options={{
              headerShown: false,
            }}
            component={DrawerNavigator}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverview} />

          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={{ title: 'More about Meal' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 12,
  },
});
