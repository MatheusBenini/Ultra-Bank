import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function User () {
  return (
    
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
        
        

        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: "https://i.pravatar.cc/100" }} // avatar de exemplo
            style={styles.avatar}
          />
          <View style={styles.card}>
            <Feather name="credit-card" size={16} color="#000" />
          </View>
        </View>

        <Text style={styles.username}>Matheus Benini</Text>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: "#F2F7FA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 25,
    borderRadius: 35,
    marginHorizontal: 15,
    marginTop: StatusBar.currentHeight || 60,
  },

   username: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },

  avatarContainer: {
    position: "relative",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  card: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 6,
    elevation: 3, // Android
    shadowColor: "#000", // iOS
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
});
