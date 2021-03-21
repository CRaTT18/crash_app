import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-elements";
import Communications from "react-native-communications";

const PhotoScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Card>
        <Text>Press buttons to take photos:</Text>
        <Button
          style={{ marginTop: 20 }}
          title="VIN Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Odometer Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Right Front Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Right Rear Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Left Rear Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Left Front Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Damage Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Damage from Above Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Damage from Below Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Damage from Right Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Damage from Left Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Press to Submit to Shop"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
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

export default PhotoScreen;
