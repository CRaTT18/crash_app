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

class Confirmation extends Component {
  render() {
    return (
      <ScrollView>
        <Card wrapperStyle={{ margin: 20 }}>
          <Text>
            We will email you a copy of your estimate within 8 business hours.
            We may call or email you if we have any questions or need additional
            information. Have a great day!
          </Text>
          <Button title="Close App" />
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
  }
}

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

export default Confirmation;
