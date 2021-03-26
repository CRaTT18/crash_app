import React, { useEffect, useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { CheckBox, Button, Icon } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";
import * as SecureStore from "expo-secure-store";

const FormInputs = () => {
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
    SecureStore.setItemAsync(
      "data",
      JSON.stringify({
        claimNum: data.claimNum,
        insurance: data.insurance,
        userAddress: data.userAddress,
        userEmail: data.userEmail,
        userName: data.userName,
        userPhone: data.userPhone,
      })
    ).catch((error) => console.log("Could not save user info", error));
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
        console.log(data.userName, data.insurance, data.claimNum);
      }
    });
  }, []);

  return (
    <>
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
            value={text}
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
            value={text}
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
            value={text}
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
            value={text}
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
            value={text}
          />
        )}
        name="claimNum"
        defaultValue=""
      />
      <Text></Text>
      <Text>Preferred Method of Contact:</Text>
      <CheckBox title="Phone Call" checked={call} onPress={handleCall} />
      <CheckBox title="Text Message" checked={text} onPress={handleText} />
      <CheckBox title="Email" checked={sendEmail} onPress={handleSendEmail} />
      <Button
        style={{ marginTop: 20 }}
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
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "black",
    margin: 5,
    marginLeft: 0,
  },
  input: {
    backgroundColor: "lightgray",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default FormInputs;
