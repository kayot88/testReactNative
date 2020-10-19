import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
const SingleItemScreen = ({ route, navigation }) => {
  const { imageUrl } = route.params;
  const [newImg, setNewImg] = useState("");
  useEffect(() => {
    return setNewImg({ imageUrl });
  }, [route.params.imageUrl]);
  const spinner = "spinner";
  if (newImg) {
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <Image
          resizeMode="contain"
          source={{ uri: newImg.imageUrl }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      </View>
    );
  } else {
    return (
      <View />
    );
  }
};

export default SingleItemScreen;
