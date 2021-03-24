import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const PhotoScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Card>
        <Text>Press buttons to take photos:</Text>
        <Button
          style={{ marginTop: 20 }}
          title="VIN Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Odometer Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Right Front Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Right Rear Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Left Rear Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Left Front Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Damage Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Damage from Above Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Damage from Below Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Damage from Right Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="Damage from Left Photo"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
        />
        <Button
          style={{ marginTop: 20 }}
          icon={
            <Icon
              name="share-square"
              type="font-awesome"
              color="white"
              iconStyle={{ marginRight: 10 }}
            />
          }
          title="Press to Submit to Shop"
          onPress={() => navigation.navigate("Thank you for using CrashApp!")}
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

export default PhotoScreen;
