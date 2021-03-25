import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DisclaimerScreen from "./components/DisclaimerComponent";
import InfoScreen from "./components/InfoComponent";
import InstructionScreen from "./components/InstructionComponent";
import PhotoScreen from "./components/PhotoComponent";
import ConfirmationScreen from "./components/ConfirmationComponent";
import { Card } from "react-native-elements";
import { View, SafeAreaView, Image, StyleSheet } from "react-native";

const RootStack = createStackNavigator();

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Image
            source={require("./assets/Fairways_Logo_gray.png")}
            resizeMode={"cover"}
            style={{ margin: 10 }}
          />
        </View>
      </SafeAreaView>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Vehicle Safety Disclaimer"
            component={DisclaimerScreen}
          />
          <RootStack.Screen name="Claim Information" component={InfoScreen} />
          <RootStack.Screen
            name="Instructions & Tips"
            component={InstructionScreen}
          />
          <RootStack.Screen name="Take Photos" component={PhotoScreen} />
          <RootStack.Screen
            name="Thank you for using CrashApp!"
            component={ConfirmationScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  header: {},
});

export default App;
