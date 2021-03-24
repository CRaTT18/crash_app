import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as MailComposer from "expo-mail-composer";
import * as Linking from "expo-linking";

const Instruction = ({ navigation }) => {
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
        <Text>Required photos:</Text>
        <Text></Text>
        <Text>Four corners of the vehicle.</Text>
        <Text></Text>
        <Text>
          VIN Number decal located in drivers door jamb or door. OPTIONAL: Photo
          of registration or document with VIN number if decal not present.
        </Text>
        <Text></Text>
        <Text>Odometer or mileage photo.</Text>
        <Text></Text>
        <Text>Photos of damage from multiple angles.</Text>
        <Text></Text>
        <Text>
          Take photos from angles and height as shown in examples below.
        </Text>
        <Text></Text>
        <Text>Example photos:</Text>
        <Text></Text>
        <Image
          source={require("../assets/vin.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/odo.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/rightfront.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/rightrear.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/leftrear.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/leftfront.jpg")}
          style={{ width: 300, height: 200 }}
        />
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
          title="Continue to Photos"
          onPress={() => navigation.navigate("Take Photos")}
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
});

export default Instruction;
