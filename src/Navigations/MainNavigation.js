import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import OPTIONS from "../constants/options";
import OurMailBox from "../screens/Main/OurMailBox/OurMailBoxScreen";
import Reply from "../screens/Main/OurMailBox/ReplyScreen";
import LetterDetail from "../screens/Main/OurMailBox/LetterDetailScreen";
import MyMailBox from "../screens/Main/MyMailBox/MyMailBoxScreen";
import NewAngel from "../screens/Main/MyMailBox/NewAngelScreen";
import Angel from "../screens/Main/MyMailBox/AngelScreen";
import LetterList from "../screens/Main/MyMailBox/LetterListScreen";
import LetterInput from "../screens/Main/MyMailBox/LetterInputScreen";
import Letter from "../screens/Main/MyMailBox/LetterScreen";
import MyPage from "../screens/Main/MyPage/MyPageScreen";
import MailboxLetter from "../screens/Main/MyPage/MailboxLetterScreen";

const Tab = createBottomTabNavigator();
const OurMailBoxStack = createStackNavigator();
const MyMailBoxStack = createStackNavigator();
const MyPageStack = createStackNavigator();

const OurMailBoxStackNavigator = () => (
  <OurMailBoxStack.Navigator>
    <OurMailBoxStack.Screen
      name="OurMailBox"
      component={OurMailBox}
      options={OPTIONS.OUR_MAILBOX}
    />
    <OurMailBoxStack.Screen
      name="LetterDetail"
      component={LetterDetail}
      options={OPTIONS.OUR_MAILBOX}
    />
    <OurMailBoxStack.Screen
      name="Reply"
      component={Reply}
      options={OPTIONS.OUR_MAILBOX}
    />
  </OurMailBoxStack.Navigator>
);

const MyMailBoxStackNavigator = () => (
  <NavigationContainer independent={true}>
    <MyMailBoxStack.Navigator>
      <MyMailBoxStack.Screen
        name="MyMailBox"
        component={MyMailBox}
        options={OPTIONS.MY_MAILBOX}
      />
      <MyMailBoxStack.Screen
        name="NewAngel"
        component={NewAngel}
        options={OPTIONS.MY_MAILBOX}
      />
      <MyMailBoxStack.Screen
        name="Angel"
        component={Angel}
        options={OPTIONS.MY_MAILBOX}
      />
      <MyMailBoxStack.Screen
        name="LetterList"
        component={LetterList}
        options={OPTIONS.MY_MAILBOX}
      />
      <MyMailBoxStack.Screen
        name="LetterInput"
        component={LetterInput}
        options={OPTIONS.MY_MAILBOX}
      />
      <MyMailBoxStack.Screen
        name="Letter"
        component={Letter}
        options={OPTIONS.MY_MAILBOX}
      />
    </MyMailBoxStack.Navigator>
  </NavigationContainer>
);

const MyPageStackNavigator = () => (
  <MyPageStack.Navigator>
    <MyPageStack.Screen
      name="MyPage"
      component={MyPage}
      options={OPTIONS.MY_PAGE}
    />
    <MyPageStack.Screen
      name="MailboxLetter"
      component={MailboxLetter}
      options={OPTIONS.MY_PAGE}
    />
  </MyPageStack.Navigator>
);

const MainNavigation = () => {
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
};

export default MainNavigation;
