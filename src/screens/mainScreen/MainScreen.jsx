import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { getPhotosThunkCreator } from "../../redux/duck";
import { styles } from "./styles";

const MainScreen = ({
  getPhotosThunkCreator,
  storeItems,
  isFetching,
  navigation,
}) => {
  useEffect(() => {
    getPhotosThunkCreator();
  }, []);
  const spinner = "spinner";
  const renderFlatListItem = (item) => {
    const { navigate } = navigation;
    return (
      <TouchableOpacity
        onPress={() =>
          navigate("FullSize", {
            imageUrl: item.urls.full,
          })
        }
      >
        <View style={styles.photoView}>
          <ActivityIndicator
            size="small"
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          />
          <Text
            style={{
              display: "flex",
              fontWeight: "bold",
              fontSize: 15,
              textTransform: "uppercase",
              textAlign: "center",
              paddingBottom: 5,
            }}
          >
            {item.alt_description || "noname"}
          </Text>
          <Image
            style={styles.photo}
            source={{ uri: item.urls.thumb }}
            id={item.id}
          />
          <Text style={styles.userName}>{item.user.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (isFetching) {
    return (
      <View>
        <Text>{spinner}</Text>
      </View>
    );
  } else {
    return (
      <>
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item) => {
              return item.id;
            }}
            data={storeItems}
            renderItem={({ item }) => renderFlatListItem(item)}
          />
        </View>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  storeItems: state.mainScreenState.api,
  isFetching: state.mainScreenState.isFetching,
});

export default connect(mapStateToProps, { getPhotosThunkCreator })(MainScreen);
