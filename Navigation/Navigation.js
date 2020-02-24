import React from "react";
import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favoris" component={FilmDetail} />
    </Tab.Navigator>
  );
}

export default MyTabs;
