import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { Card, Button, CheckBox } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";

const InfoScreen = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();
  const [call, setCall] = useState();
  const [text, setText] = useState();
  const [sendEmail, setSendEmail] = useState();

  const handleCall = () => setCall(!call);
  const handleText = () => setText(!text);
  const handleSendEmail = () => setSendEmail(!sendEmail);

  const onSubmit = (data) => {
    console.log(data, call, text, sendEmail);
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
              title="Save Claim Information"
              onPress={handleSubmit(onSubmit)}
            />
            <Button
              style={styles.button}
              title="Continue"
              onPress={() => navigation.navigate("Instructions & Tips")}
            />
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "black",
    margin: 5,
    marginLeft: 0,
  },
  button: {
    marginTop: 20,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
  },
  input: {
    backgroundColor: "lightgray",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default InfoScreen;
