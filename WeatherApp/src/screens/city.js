{/* < last moded version > */}
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData

  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
    imageBg,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/nyc.jpg")}
        style={imageBg}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"white"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  cityName: {
    fontSize: 40,
  },

  countryName: {
    fontSize: 30,
  },

  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 20,
    marginLeft: 7.5,
    color: "white",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageBg:{
    flex:1,
  }
});

export default City;

//     <SafeAreaView style={container}>
//       <ImageBackground
//         source={require("../../assets/nyc.jpg")}
//         style={styles.image}
//       >
//         <Text style={[cityName, cityText]}>London</Text>
//         <Text style={[countryName, cityText]}>UK</Text>
//         <View style={[populationWrapper, rowLayout]}>
//           <IconText
//             iconName={"user"}
//             iconColor={"white"}
//             bodyText={"8000"}
//             bodyTextStyles={populationText}
//           />
//         </View>

//         <View style={[riseSetWrapper, rowLayout]}>
//           <IconText
//             iconName={"sunrise"}
//             iconColor={"white"}
//             bodyText={"06:56:48 AM"}
//             bodyTextStyles={riseSetText}
//           />

//           <IconText
//             iconName={"sunset"}
//             iconColor={"white"}
//             bodyText={"07:15:30 PM"}
//             bodyTextStyles={riseSetText}
//           />
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight || 0,
//   },
//   image: {
//     flex: 1,
//   },
//   cityName: {
//     fontSize: 40,
//   },
//   countryName: {
//     fontSize: 30,
//   },
//   cityText: {
//     justifyContent: "center",
//     alignSelf: "center",
//     fontWeight: "bold",
//     color: "white",
//   },
//   cityName: {
//     fontSize: 40,
//   },

//   countryName: {
//     fontSize: 30,
//   },

//   cityText: {
//     justifyContent: "center",
//     alignSelf: "center",
//     fontWeight: "bold",
//     color: "white",
//   },
//   populationWrapper: {
//     justifyContent: "center",
//     marginTop: 30,
//   },
//   populationText: {
//     fontSize: 20,
//     marginLeft: 7.5,
//     color: "white",
//   },
//   riseSetWrapper: {
//     justifyContent: "space-around",
//     marginTop: 30,
//   },
//   riseSetText: {
//     fontSize: 20,
//     color: "white", 
//   },
//   rowLayout: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
// });

// export default City;
