import React, { useState, useReducer } from "react";
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
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      userName: "",
      email: "",
      phone: "",
      address: "",
      insurance: "",
      claimNum: "",
    }
  );
  const [call, setCall] = useState();
  const [text, setText] = useState();
  const [sendEmail, setSendEmail] = useState();

  const handleCall = () => setCall(!call);
  const handleText = () => setText(!text);
  const handleSendEmail = () => setSendEmail(!sendEmail);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserInput({ [name]: value });
  };

  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <View>
          <Input
            placeholder="Name"
            onChangeText={handleChange}
            value={userInput.userName}
          />
          <Input
            placeholder="Email"
            onChangeText={handleChange}
            value={userInput.email}
          />
          <Input
            placeholder="Phone"
            onChangeText={handleChange}
            value={userInput.phone}
          />
          <Input
            placeholder="Address"
            onChangeText={handleChange}
            value={userInput.address}
          />
          <Input
            placeholder="Insurance Company"
            onChangeText={handleChange}
            value={userInput.insurance}
          />
          <Input
            placeholder="Claim Number"
            onChangeText={handleChange}
            value={userInput.claimNum}
          />
          <Text>Preferred Method of Contact:</Text>
          <CheckBox title="Phone Call" checked={call} onPress={handleCall} />
          <CheckBox title="Text Message" checked={text} onPress={handleText} />
          <CheckBox
            title="Email"
            checked={sendEmail}
            onPress={handleSendEmail}
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
