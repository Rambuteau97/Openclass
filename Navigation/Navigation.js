// Navigation/Navigation.js
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favoris" component={FavorisScreen} />
    </Tab.Navigator>
  );
}

export default createAppContainer(SearchStackNavigator)
