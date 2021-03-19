import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-elements";
import Communications from "react-native-communications";

const Instruction = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Card image={require("../assets/Fairways_Logo_gray.png")}></Card>
        <Card title="Photo Taking Instructions" wrapperStyle={{ margin: 20 }}>
          <Text>
            Required photos: Four corners of the vehicle. VIN Number decal
            located in drivers door jamb or door. Photo of registration or
            document with VIN number if decal not present. Odometer or mileage
            photo. Photos of damage from multiple angles.
          </Text>
          <Text>Example photos will go here?</Text>
          <Button
            title="Continue to Photos"
            onPress={() => navigation.navigate("Take Photos")}
          />
        </Card>
        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => Communications.phonecall("2086973888", true)}
          >
            <Text style={styles.buttonTextStyle}>Call Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() =>
              Communications.email(
                ["ratt18@hotmail.com"],
                null,
                null,
                "Email From CrashApp",
                "Please include your name and phone number along with preferred contact method."
              )
            }
          >
            <Text style={styles.buttonTextStyle}>Email Shop</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  buttonStyle: {
    justifyContent: "center",
    margin: 10,
    padding: 15,
    backgroundColor: "#39FF14",
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: "black",
    textAlign: "center",
  },
});

export default Instruction;
