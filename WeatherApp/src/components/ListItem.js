import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from 'moment'
import { weatherType } from "../utitilies/weatherType";


const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={styles.item}>
      <Feather name={weatherType[condition].icon} size={50} color={"white"} />
      <View style={styles.dateTextWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={styles.date}>{moment(dt_txt).format("h:mm A")}</Text>
      </View>
      <Text style={styles.temp}>{`${Math.round(min)}° / ${Math.round(
        max
      )}°`}</Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 3,
    backgroundColor: "transparent",
  },
  temp: {
    color: "white",
    fontSize: 22,
  },
  date: {
    color: "white",
    fontSize: 18,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
  condition: {
    color: "white",
    fontSize: 16,
  },
});

export default ListItem;