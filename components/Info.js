import React from "react";
import { ScrollView, View } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Footer from "./Footer";
import FormInputs from "./FormInputs";

const InfoScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <View>
          <FormInputs />
        </View>
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
          title="Continue"
          onPress={() => navigation.navigate("Instructions & Tips")}
        />
        <Footer />
      </Card>
    </ScrollView>
  );
};

export default InfoScreen;
