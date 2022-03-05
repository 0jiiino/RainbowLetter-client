import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import OurMailBox from "../screens/Main/OurMailBox/OurMailBoxScreen";
import MyMailBox from "../screens/Main/MyMailBox/MyMailBoxScreen";
import MyPage from "../screens/Main/MyPageScreen";
import NewAngel from "../screens/Main/MyMailBox/NewAngelScreen";
import Angel from "../screens/Main/MyMailBox/AngelScreen";
import LetterList from "../screens/Main/MyMailBox/LetterListScreen";
import LetterInput from "../screens/Main/MyMailBox/LetterInputScreen";
import Letter from "../screens/Main/MyMailBox/LetterScreen";

const Tab = createBottomTabNavigator();
const OurMailBoxStack = createStackNavigator();
const MyMailBoxStack = createStackNavigator();
const MyPageStack = createStackNavigator();

const OurMailBoxStackNavigator = () => (
  <OurMailBoxStack.Navigator>
    <OurMailBoxStack.Screen
      name="OurMailBox"
      component={OurMailBox}
      options={{
        title: "🌈 모두의 편지함",
        headerStyle: {
          backgroundColor: "#FFFDDD",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  </OurMailBoxStack.Navigator>
);
const MyMailBoxStackNavigator = () => (
  <NavigationContainer independent={true}>
    <MyMailBoxStack.Navigator>
      <MyMailBoxStack.Screen
        name="MyMailBox"
        component={MyMailBox}
        options={{
          title: "🌈 내 편지함",
          headerStyle: {
            backgroundColor: "#FFFDDD",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <MyMailBoxStack.Screen
        name="NewAngel"
        component={NewAngel}
        options={{
          title: "🌈 내 편지함",
          headerStyle: {
            backgroundColor: "#FFFDDD",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <MyMailBoxStack.Screen
        name="Angel"
        component={Angel}
        options={{
          title: "🌈 내 편지함",
          headerStyle: {
            backgroundColor: "#FFFDDD",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <MyMailBoxStack.Screen
        name="LetterList"
        component={LetterList}
        options={{
          title: "🌈 내 편지함",
          headerStyle: {
            backgroundColor: "#FFFDDD",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <MyMailBoxStack.Screen
        name="LetterInput"
        component={LetterInput}
        options={{
          title: "🌈 내 편지함",
          headerStyle: {
            backgroundColor: "#FFFDDD",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <MyMailBoxStack.Screen
        name="Letter"
        component={Letter}
        options={{
          title: "🌈 내 편지함",
          headerStyle: {
            backgroundColor: "#FFFDDD",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </MyMailBoxStack.Navigator>
  </NavigationContainer>
);
const MyPageStackNavigator = () => (
  <MyPageStack.Navigator>
    <MyPageStack.Screen
      name="MyPage"
      component={MyPage}
      options={{
        title: "🌈 마이 페이지",
        headerStyle: {
          backgroundColor: "#FFFDDD",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  </MyPageStack.Navigator>
);

function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "First":
                iconName = "mailbox-outline";
                break;
              case "Second":
                iconName = "email-edit-outline";
                break;
              case "Third":
                iconName = "account-outline";
                break;
              default:
                iconName = "mailbox-outline";
            }
            return (
              <MaterialCommunityIcons
                size={size}
                name={iconName}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#1B2228",
          tabBarInactiveTintColor: "#C7CDD3",
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name="First" component={OurMailBoxStackNavigator} />
        <Tab.Screen name="Second" component={MyMailBoxStackNavigator} />
        <Tab.Screen name="Third" component={MyPageStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
