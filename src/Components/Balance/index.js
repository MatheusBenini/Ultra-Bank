import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Balance () {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.cardReceita}>
            <FontAwesome name="arrow-up" size={24} color="green" />
            <View style={styles.textLabel}>
                <Text style={styles.label}>Receita</Text>
                <Text style={styles.value}>R$16.798</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardGastos}>
            <FontAwesome name="arrow-down" size={24} color="red" />
            <View style={styles.textLabel}>
                <Text style={styles.label}>Gastos</Text>
                <Text style={styles.value}>R$4.264</Text>
            </View>
        </TouchableOpacity>
        



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    
  },
  cardReceita: {
    backgroundColor: '#EDFFEB', 
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    width: '45%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    
  },
    cardGastos: {
        backgroundColor: '#FFEEED', 
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        width: '45%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flexDirection: 'row',
        
    },

  label: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
    paddingLeft: 10,
  },
  value: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 10,
  }
});
