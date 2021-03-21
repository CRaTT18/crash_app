import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Card, Button } from "react-native-elements";
import Communications from "react-native-communications";

const Instruction = ({ navigation }) => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Text>Required photos:</Text>
        <Text></Text>
        <Text>Four corners of the vehicle.</Text>
        <Text></Text>
        <Text>
          VIN Number decal located in drivers door jamb or door. OPTIONAL: Photo
          of registration or document with VIN number if decal not present.
        </Text>
        <Text></Text>
        <Text>Odometer or mileage photo.</Text>
        <Text></Text>
        <Text>Photos of damage from multiple angles.</Text>
        <Text></Text>
        <Text>
          Take photos from angles and height as shown in examples below.
        </Text>
        <Text></Text>
        <Text>Example photos:</Text>
        <Text></Text>
        <Image
          source={require("../assets/vin.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/odo.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/rightfront.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/rightrear.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/leftrear.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/leftfront.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Button
          style={{ marginTop: 20 }}
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
