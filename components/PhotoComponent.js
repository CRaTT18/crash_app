import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as MailComposer from "expo-mail-composer";
import * as Linking from "expo-linking";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const PhotoScreen = ({ navigation }) => {
  const [vinImage, setVinImage] = useState(null);
  const [odoImage, setOdoImage] = useState(null);
  const [rfImage, setRfImage] = useState(null);
  const [rrImage, setRrImage] = useState(null);
  const [lrImage, setLrImage] = useState(null);
  const [lfImage, setLfImage] = useState(null);
  const [damageImage, setDamageImage] = useState(null);
  const [damageTopImage, setDamageTopImage] = useState(null);
  const [damageBottomImage, setDamageBottomImage] = useState(null);
  const [damageRightImage, setDamageRightImage] = useState(null);
  const [damageLeftImage, setDamageLeftImage] = useState(null);

  const getVinImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const vinImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!vinImage.cancelled) {
        console.log(vinImage);
        setVinImage(vinImage.uri);
      }
    }
  };

  const getOdoImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const odoImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!odoImage.cancelled) {
        console.log(odoImage);
        setOdoImage(odoImage.uri);
      }
    }
  };
  const getRfImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const rfImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!rfImage.cancelled) {
        console.log(rfImage);
        setRfImage(rfImage.uri);
      }
    }
  };

  const getRrImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const rrImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!rrImage.cancelled) {
        console.log(rrImage);
        setRrImage(rrImage.uri);
      }
    }
  };

  const getLrImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const lrImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!lrImage.cancelled) {
        console.log(lrImage);
        setLrImage(lrImage.uri);
      }
    }
  };

  const getLfImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const lfImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!lfImage.cancelled) {
        console.log(lfImage);
        setLfImage(lfImage.uri);
      }
    }
  };

  const getDamageImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const damageImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!damageImage.cancelled) {
        console.log(damageImage);
        setDamageImage(damageImage.uri);
      }
    }
  };

  const getDamageTopImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const damageTopImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!damageTopImage.cancelled) {
        console.log(damageTopImage);
        setDamageTopImage(damageTopImage.uri);
      }
    }
  };

  const getDamageBottomImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const damageBottomImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!damageBottomImage.cancelled) {
        console.log(damageBottomImage);
        setDamageBottomImage(damageBottomImage.uri);
      }
    }
  };

  const getDamageRightImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const damageRightImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!damageRightImage.cancelled) {
        console.log(damageRightImage);
        setDamageRightImage(damageRightImage.uri);
      }
    }
  };

  const getDamageLeftImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const damageLeftImage = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [2, 1],
      });
      if (!damageLeftImage.cancelled) {
        console.log(damageLeftImage);
        setDamageLeftImage(damageLeftImage.uri);
      }
    }
  };

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
      <Card>
        <Text>Press buttons to take photos:</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: vinImage }}
            loadingIndicatorSource={require("../assets/favicon.png")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="VIN Photo"
            onPress={getVinImageFromCamera}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: odoImage }}
            //loadingIndicatorSource={require("../assets/spinner-1.gif.jpg")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Odometer Photo"
            onPress={getOdoImageFromCamera}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: rfImage }}
            //loadingIndicatorSource={require("../assets/spinner-1.gif.jpg")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Right Front Photo"
            onPress={getRfImageFromCamera}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: rrImage }}
            //loadingIndicatorSource={require("../assets/spinner-1.gif.jpg")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Right Rear Photo"
            onPress={getRrImageFromCamera}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: lrImage }}
            //loadingIndicatorSource={require("../assets/spinner-1.gif.jpg")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Left Rear Photo"
            onPress={getLrImageFromCamera}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: lfImage }}
            //loadingIndicatorSource={require("../assets/spinner-1.gif.jpg")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Left Front Photo"
            onPress={getLfImageFromCamera}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: damageImage }}
            //loadingIndicatorSource={require("../assets/spinner-1.gif.jpg")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Damage Photo"
            onPress={getDamageImageFromCamera}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: damageTopImage }}
            //loadingIndicatorSource={require("../assets/spinner-1.gif.jpg")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Damage from Above Photo"
            onPress={getDamageTopImageFromCamera}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: damageBottomImage }}
            //loadingIndicatorSource={require("../assets/spinner-1.gif.jpg")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Damage from Below Photo"
            onPress={getDamageBottomImageFromCamera}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: damageRightImage }}
            //loadingIndicatorSource={require("../assets/spinner-1.gif.jpg")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Damage from Right Photo"
            onPress={getDamageRightImageFromCamera}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: damageLeftImage }}
            //loadingIndicatorSource={require("../assets/spinner-1.gif.jpg")}
            style={styles.image}
          />
          <Button
            style={styles.button}
            icon={
              <Icon
                name="camera"
                type="font-awesome"
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Damage from Left Photo"
            onPress={getDamageLeftImageFromCamera}
          />
        </View>
        <Button
          buttonStyle={styles.button}
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
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
  button: {
    marginTop: 10,
  },
});

export default PhotoScreen;
