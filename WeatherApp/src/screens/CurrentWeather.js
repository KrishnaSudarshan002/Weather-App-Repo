import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";

import RowText from "../components/RowText";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utitilies/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },weather,} = weatherData;
  const weatherCondition = weather[0].main;

  const {
    wrapper,
    container,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        source={require("../../assets/pexels-benjamin-suter-3617500.jpg")}
        style={styles.coverImage}
      >
        <View style={container}>
          <Feather
            name={weatherType[weatherCondition]?.icon}
            size={100}
            color="white"
          />
          <Text style={highLow}>{`${temp}°`}</Text>
          <Text style={feels}>{`Feels like: ${feels_like}°`}</Text>

          <RowText
            style={highLow}
            messageOne={`High: ${temp_max}° `}
            messageTwo={`Low: ${temp_min}°`}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />
        </View>

        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
    fontWeight: "500",
  },
  highLow: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 5,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
    fontWeight: "400",
  },
  message: {
    fontSize: 25,
    fontWeight: "400",
  },
  coverImage: {
    flex: 1,
  },
});
export default CurrentWeather;
