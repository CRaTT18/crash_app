import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Button, Input, CheckBox } from "react-native-elements";
import Communications from "react-native-communications";

const customerInfo = {
  userName: "Name",
  email: "",
  phone: "",
  address: "",
  insurance: "",
  claimNum: "",
};

const InfoScreen = ({ navigation }) => {
  const [infoState, setInfoState] = useState(customerInfo);

  const saveHandler = (event) => {
    console.log(customerInfo);
  };

  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <View>
          <Input
            placeholder="Name"
            onChangeText={(userName) => setInfoState(userName)}
            value={infoState.userName}
          />
          <Input
            placeholder="Email"
            onChangeText={(email) => setInfoState(email)}
            value={infoState.email}
          />
          <Input
            placeholder="Phone"
            onChange={(e) => {
              setInfoState({ ...infoState, phone: e.target.value });
            }}
            value={infoState.phone}
          />
          <Input
            placeholder="Address"
            onChange={(e) => {
              setInfoState({ ...infoState, address: e.target.value });
            }}
            value={infoState.address}
          />
          <Input
            placeholder="Insurance Company"
            onChange={(e) => {
              setInfoState({ ...infoState, insurance: e.target.value });
            }}
            value={infoState.insurance}
          />
          <Input
            placeholder="Claim Number"
            onChange={(e) => {
              setInfoState({ ...infoState, claimNum: e.target.value });
            }}
            value={infoState.claimNum}
          />
          <Text>Preferred Method of Contact:</Text>
          <CheckBox
            title="Phone Call"
            //checked={call}
            //onPress={() => setInfoState({ call: !call })}
          />
          <CheckBox
            title="Text Message"
            //checked={infoState.text}
            //onPress={() => setInfoState({ text: !text })}
          />
          <CheckBox
            title="Email"
            //checked={infoState.sendEmail}
            //onPress={() => setInfoState({ sendEmail: !sendEmail })}
          />
          <View>
            <Button
              title="Save & Continue"
              onPress={() => {
                saveHandler();
                navigation.navigate("Instructions & Tips");
              }}
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
