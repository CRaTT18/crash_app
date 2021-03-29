import React from "react";
import { Text, ScrollView, Image } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Footer from "./Footer";

const Instruction = ({ navigation }) => {
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
          loadingIndicatorSource={require("../assets/spinner-1.gif")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/odo.jpg")}
          loadingIndicatorSource={require("../assets/spinner-1.gif")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/rightfront.jpg")}
          loadingIndicatorSource={require("../assets/spinner-1.gif")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/rightrear.jpg")}
          loadingIndicatorSource={require("../assets/spinner-1.gif")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/leftrear.jpg")}
          loadingIndicatorSource={require("../assets/spinner-1.gif")}
          style={{ width: 300, height: 200 }}
        />
        <Text></Text>
        <Image
          source={require("../assets/leftfront.jpg")}
          loadingIndicatorSource={require("../assets/spinner-1.gif")}
          style={{ width: 300, height: 200 }}
        />
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
          title="Continue to Photos"
          onPress={() => navigation.navigate("Take Photos")}
        />
        <Footer />
      </Card>
    </ScrollView>
  );
};

export default Instruction;
