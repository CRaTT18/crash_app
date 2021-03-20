import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-elements";
import Communications from "react-native-communications";

const MainScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Text styles={styles.safety}>
          This app is intended as a convenience tool for our guests to get their
          claim started with an estimate based on provided photos. If your car
          has been in an accident it may be unsafe to drive. Safety and ADAS
          systems may not function properly or at all. Photo estimates are not a
          replacement for proper inspection and repair planning by a trained
          professional. If you have any questions or concerns please reach out
          to us by your preferred contact method. You can use the buttons at the
          bottom of your screen to call or email us at any time.
        </Text>
        <Button
          style={{ marginTop: 20 }}
          title="Agree & Continue"
          onPress={() => navigation.navigate("Claim Information")}
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
  safety: {
    textAlign: "justify",
  },
});

export default MainScreen;
