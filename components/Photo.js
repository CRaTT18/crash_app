import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Footer from "./Footer";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

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
      await MediaLibrary.saveToLibraryAsync(vinImage.uri);
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
      await MediaLibrary.saveToLibraryAsync(odoImage.uri);
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
      await MediaLibrary.saveToLibraryAsync(rfImage.uri);
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
      await MediaLibrary.saveToLibraryAsync(rrImage.uri);
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
      await MediaLibrary.saveToLibraryAsync(lrImage.uri);
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
      await MediaLibrary.saveToLibraryAsync(lfImage.uri);
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
      await MediaLibrary.saveToLibraryAsync(damageImage.uri);
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
      await MediaLibrary.saveToLibraryAsync(damageTopImage.uri);
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
      await MediaLibrary.saveToLibraryAsync(damageBottomImage.uri);
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
      await MediaLibrary.saveToLibraryAsync(damageRightImage.uri);
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
      await MediaLibrary.saveToLibraryAsync(damageLeftImage.uri);
      if (!damageLeftImage.cancelled) {
        console.log(damageLeftImage);
        setDamageLeftImage(damageLeftImage.uri);
      }
    }
  };

  return (
    <ScrollView
      style={{ contentContainer: "alignItemsCenter, justifyContent" }}
    >
      <Card>
        <Text>
          Press buttons to take photos. Be sure to hold your phone
          sideways(landscape) while taking photos. Preview images will populate
          as you take required photos:
        </Text>
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: vinImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: odoImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: rfImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: rrImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: lrImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: lfImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: damageImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: damageTopImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: damageBottomImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: damageRightImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <ImageBackground
          source={require("../assets/take_photo.png")}
          style={styles.image}
        >
          <Image
            source={{ uri: damageLeftImage }}
            loadingIndicatorSource={require("../assets/spinner-1.gif")}
            style={styles.image}
          />
        </ImageBackground>
        <Button
          buttonStyle={styles.button}
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
        <Button
          buttonStyle={{ marginTop: 20, backgroundColor: "green" }}
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
        <Footer />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    margin: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default PhotoScreen;
