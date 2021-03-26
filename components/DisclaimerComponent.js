import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Footer from "./Footer";

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
          buttonStyle={{ marginTop: 20 }}
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
        <Footer />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safety: {
    textAlign: "justify",
  },
});

export default MainScreen;
