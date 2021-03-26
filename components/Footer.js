import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import * as MailComposer from "expo-mail-composer";
import * as Linking from "expo-linking";

const Footer = () => {
  const sendMail = () => {
    MailComposer.composeAsync({
      recipients: ["ratt18@hotmail.com"],
      subject: "Email from CrashApp",
      body:
        "Please include contact information and preferred method of contact.",
    });
  };

  const callShop = () => {
    const url = "tel://12086973888";
    Linking.openURL(url);
  };

  return (
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
        onPress={callShop}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
});

export default Footer;
