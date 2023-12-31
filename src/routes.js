import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from './pages/home/index';
import About from './pages/about/index';
import Game from './pages/game/index';
import { Ionicons } from '@expo/vector-icons';
import Logo from './assets/logo.png';
const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <>

      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: 'rgba(27,38,79, 1)',
              height: 100,
            },
            headerTitle: () => <Image source={Logo} />,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Sobre"
          component={About}
          options={{

            headerStyle: {
              backgroundColor: 'rgba(27,38,79, 1)',
              height: 100,
            },
            headerTitle: () => <Image source={Logo} />,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Game"
          component={Game}

          options={{
            tabBarButton: () => null,
            headerStyle: {
              backgroundColor: 'rgba(27,38,79, 1)',
              height: 100,
            },
            headerTitle: () => <Image source={Logo} />,

          }}
        />
      </Tab.Navigator>

    </>
  );
}
