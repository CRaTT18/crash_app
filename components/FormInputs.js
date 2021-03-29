import React, { useEffect, useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { CheckBox, Button, Icon } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";
import * as SecureStore from "expo-secure-store";

const FormInputs = () => {
  const { control, handleSubmit, errors, setValue } = useForm();
  const [call, setCall] = useState();
  const [sendText, setSendText] = useState();
  const [sendEmail, setSendEmail] = useState();

  const handleCall = () => setCall(!call);
  const handleSendText = () => setSendText(!sendText);
  const handleSendEmail = () => setSendEmail(!sendEmail);

  const onSubmit = async (data) => {
    console.log(data);
    await SecureStore.setItemAsync(
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
    fetchUser();
  }, []);

  const fetchUser = async () => {
    SecureStore.getItemAsync("data").then((userdata) => {
      const data = JSON.parse(userdata);
      try {
        setValue("claimNum", data.claimNum);
        setValue("insurance", data.insurance);
        setValue("userAddress", data.userAddress);
        setValue("userEmail", data.userEmail);
        setValue("userName", data.userName);
        setValue("userPhone", data.userPhone);
      } catch (error) {
        console.log("Could not save user info", error);
      }
    });
  };

  return (
    <>
      <Text style={styles.label}>Name</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
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
            onChangeText={(text) => onChange(text)}
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
            onChangeText={(text) => onChange(text)}
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
            onChangeText={(text) => onChange(text)}
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
            onChangeText={(text) => onChange(text)}
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
            onChangeText={(text) => onChange(text)}
            value={value}
          />
        )}
        name="claimNum"
        defaultValue=""
      />
      <Text></Text>
      <Text>Preferred Method of Contact:</Text>
      <CheckBox title="Phone Call" checked={call} onPress={handleCall} />
      <CheckBox
        title="Text Message"
        checked={sendText}
        onPress={handleSendText}
      />
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
