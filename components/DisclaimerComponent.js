import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as MailComposer from "expo-mail-composer";
import * as Linking from "expo-linking";

const MainScreen = ({ navigation }) => {
  const sendMail = () => {
    MailComposer.composeAsync({
      recipients: ["ratt18@hotmail.com"],
      subject: "Email from CrashApp",
      body:
        "Please include contact information and preferred method of contact.",
    });
  };

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
          icon={
            <Icon
              name="angle-right"
              type="font-awesome"
              color="white"
              iconStyle={{ marginRight: 10 }}
            />
          }
          title="Agree & Continue"
          onPress={() => navigation.navigate("Claim Information")}
        />
        <View style={styles.row}>
          <Button
            title="Email Shop"
            buttonStyle={{ backgroundColor: "lightgray", margin: 20 }}
            icon={
              <Icon
                name="envelope"
                type="font-awesome"
                color="gray"
                iconStyle={{ marginRight: 7 }}
              />
            }
            onPress={sendMail}
          ></Button>
          <Button
            title="Call Shop"
            buttonStyle={{
              backgroundColor: "lightgray",
              margin: 20,
            }}
            icon={
              <Icon
                name="phone"
                type="font-awesome"
                color="gray"
                iconStyle={{ marginRight: 10 }}
              />
            }
            onPress={() => navigation.navigate("Claim Information")}
          ></Button>
        </View>
      </Card>
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
  safety: {
    textAlign: "justify",
  },
});

export default MainScreen;
