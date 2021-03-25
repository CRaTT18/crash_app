import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { Card, Button, Icon, CheckBox } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";
import * as MailComposer from "expo-mail-composer";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";

const InfoScreen = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();
  const [call, setCall] = useState();
  const [text, setText] = useState();
  const [sendEmail, setSendEmail] = useState();

  const handleCall = () => setCall(!call);
  const handleText = () => setText(!text);
  const handleSendEmail = () => setSendEmail(!sendEmail);

  const onSubmit = (data) => {
    console.log(
      JSON.stringify(data),
      `Call: ${call}, Text: ${text}, Send Email: ${sendEmail}`
    );
    SecureStore.setItemAsync("data", JSON.stringify(data)).catch((error) =>
      console.log("Could not save user info", error)
    );
    //console.log(userinfo);
  };

  useEffect(() => {
    SecureStore.getItemAsync("data").then((userdata) => {
      const data = JSON.parse(userdata);
      if (data) {
        data.claimNum;
        data.insurance;
        data.userAddress;
        data.userEmail;
        data.userName;
        data.userPhone;
        console.log(data);
      }
    });
  });

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
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <View>
          <Text style={styles.label}>Name</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="userName"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.userName && <Text>Name is required.</Text>}

          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="userEmail"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.userEmail && <Text>Email is required.</Text>}

          <Text style={styles.label}>Phone Number</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="userPhone"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.userEmail && <Text>Phone number is required.</Text>}

          <Text style={styles.label}>Address</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="userAddress"
            defaultValue=""
          />

          <Text style={styles.label}>Insurance Company</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="insurance"
            defaultValue=""
          />

          <Text style={styles.label}>Claim Number</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="claimNum"
            defaultValue=""
          />
          <Text></Text>
          <Text>Preferred Method of Contact:</Text>
          <CheckBox title="Phone Call" checked={call} onPress={handleCall} />
          <CheckBox title="Text Message" checked={text} onPress={handleText} />
          <CheckBox
            title="Email"
            checked={sendEmail}
            onPress={handleSendEmail}
          />

          <View>
            <Button
              style={styles.button}
              icon={
                <Icon
                  name="save"
                  type="font-awesome"
                  color="white"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              title="Save Claim Information"
              onPress={handleSubmit(onSubmit)}
            />
            <Button
              buttonStyle={styles.button}
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
          </View>
        </View>
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
  label: {
    color: "black",
    margin: 5,
    marginLeft: 0,
  },
  button: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "lightgray",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default InfoScreen;
