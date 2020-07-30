import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListView } from '../list-view';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={ListView} />
    </Tab.Navigator>
  );
}