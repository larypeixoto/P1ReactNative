import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ReadMe } from "../../screens/ReadMe";
import { Login } from "../../screens/Login";
import { HomePage } from "../../screens/Home";

export type TabParamList = {
  ReadMe: undefined;
  Login: undefined;
  HomePage: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#ffffff",
        tabBarActiveTintColor: "#716F73",
        tabBarStyle: {
          backgroundColor: "#1A1A1A",
        },
      }}
    >
      <Tab.Screen
        name="ReadMe"
        component={ReadMe}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color: color }}>✎</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color: color }}>✏</Text>
          ),
        }}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color: color }}>✐</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
