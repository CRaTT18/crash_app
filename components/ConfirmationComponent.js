import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Footer from "./Footer";
import * as Linking from "expo-linking";

const Confirmation = ({ navigation }) => {
  const openWeb = () => {
    const url = "https://cratt18.github.io";
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Text>
          We will email you a copy of your estimate within 8 business hours. We
          may call or email you if we have any questions or need additional
          information. Have a great day!
        </Text>
        <Text></Text>
        <Image
          source={require("../assets/shop.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          icon={
            <Icon
              name="desktop"
              type="font-awesome"
              color="white"
              iconStyle={{ marginRight: 10 }}
            />
          }
          title="Visit Our Website"
          onPress={openWeb}
        />
        <Footer />
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
});

export default Confirmation;
