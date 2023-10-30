import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import  {Image} from 'react-native'
import Home from './pages/home/index'
import {Ionicons} from '@expo/vector-icons'
import Logo from './assets/logo.png';
const Tab = createBottomTabNavigator();


export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarShowLabel: false,
        headerStyle:{
          backgroundColor: 'rgba(27,38,79, 1)',
          height: 100,
        },
        headerTitle: () => <Image source={Logo} />,
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  )
}