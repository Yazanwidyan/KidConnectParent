import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Calendar from '../screens/Calendar';
import ChildProfile from '../screens/ChildProfile';
import Dashboard from '../screens/Dashboard';
import Messages from '../screens/Messages';
import Notifications from '../screens/Notifications';
import Payments from '../screens/Payments';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#25A0DD',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({color, size}) => {
            const icons = {
              Home: 'home-outline',
              Feed: 'image-outline',
              Messages: 'chatbubble-outline',
              Payments: 'card-outline',
              Calendar: 'calendar-outline',
              Notifications: 'notifications-outline',
              Profile: 'person-outline',
            };
            return (
              <Ionicons name={icons[route.name]} size={size} color={color} />
            );
          },
        })}>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Feed" component={ChildProfile} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Payments" component={Payments} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
