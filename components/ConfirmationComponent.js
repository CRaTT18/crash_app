import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const Confirmation = ({ navigation }) => {
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
          style={{ marginTop: 20 }}
          icon={
            <Icon
              name="retweet"
              type="font-awesome"
              color="white"
              iconStyle={{ marginRight: 10 }}
            />
          }
          title="Start Over"
          onPress={() => navigation.navigate("Vehicle Safety Disclaimer")}
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
            onPress={() => navigation.navigate("Claim Information")}
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

export default Confirmation;
