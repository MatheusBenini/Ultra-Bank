import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Card () {
  return (

    <ScrollView style= {styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.cardContainer}>
         
        <View style={styles.logo}>
          <Text style={styles.ultraLogo}>Ultra</Text>
          <View style={styles.card}>
            <FontAwesome name="cc-visa" size={28} color="#fff" />
          </View>
        </View>

      
        <View style={styles.dataCard}>
          <Text style={styles.numCard}>0000 8888 2222 3333</Text>
          <Text style={styles.valueCard}>Val 08/35 CVV  **9</Text>
        </View>
      </View>

      
      <View style={styles.cardContainer1}>
         
        <View style={styles.logo}>
          <Text style={styles.ultraLogo}>Ultra</Text>
          <View style={styles.card}>
          <FontAwesome name="cc-visa" size={28} color="#fff" />
          </View>
        </View>

      
        <View style={styles.dataCard}>
          <Text style={styles.numCard}>0000 8888 2222 3333</Text>
          <Text style={styles.valueCard}>Val 07/29 CVV  **1</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
  },


  cardContainer: {
    backgroundColor: "#000",   // fundo preto
    borderRadius: 35,
    padding: 30,
    marginHorizontal: 20,
    marginTop: 25,
  },

  cardContainer1: {
    backgroundColor: "#4d00ddff",   // fundo preto
    borderRadius: 35,
    padding: 30,
    marginHorizontal: 20,
    marginTop: 25,
  },

  logo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },

  ultraLogo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "transparent",
  },

  dataCard: {
    marginTop: 10,
  },

  numCard: {
    color: "#fff",
    fontSize: 22,
    letterSpacing: 2,
    marginBottom: 15,
  },

  valueCard: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
  },
});
