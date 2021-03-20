import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Button, Input, CheckBox } from "react-native-elements";
import Communications from "react-native-communications";

const InfoScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <View>
          <Input
            placeholder="Name"
            //onChangeText={(name) => this.setState({ name })}
            // value={this.state.name}
          />
          <Input
            placeholder="Email"
            //onChangeText={(email) => this.setState({ email })}
            // value={this.state.email}
          />
          <Input
            placeholder="Phone"
            //onChangeText={(phone) => this.setState({ phone })}
            // value={this.state.phone}
          />
          <Input
            placeholder="Address"
            //onChangeText={(address) => this.setState({ address })}
            // value={this.state.address}
          />
          <Input
            placeholder="Insurance Company"
            //onChangeText={(insurance) => this.setState({ insurance })}
            // value={this.state.insurance}
          />
          <Input
            placeholder="Claim Number"
            //onChangeText={(claimNumber) => this.setState({ claimNumber })}
            // value={this.state.claimNumber}
          />
          <Text>Preferred Method of Contact:</Text>
          <CheckBox
            title="Phone Call"
            //checked={this.state.call}
            //onPress={() => this.setState({ call: !this.state.call })}
          />
          <CheckBox
            title="Text Message"
            //checked={this.state.text}
            //onPress={() => this.setState({ text: !this.state.text })}
          />
          <CheckBox
            title="Email"
            //checked={this.state.email}
            //onPress={() => this.setState({ email: !this.state.email })}
          />
          <View>
            <Button
              title="Save & Continue"
              onPress={() => navigation.navigate("Instructions & Tips")}
            />
          </View>
        </View>
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

export default InfoScreen;
