import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function TransactionCard( data ) {

    const [showValue, setShowValue] = useState(false);

  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Image 
            source={{ uri: "https://i.pravatar.cc/100" }} style={styles.image} />
                     
            <View style={styles.cardContent}>
                <Text style={styles.amount}>R$560.00</Text>
                <Text style={styles.sender}>De Brenda</Text>
            </View>
            
            <Text style={styles.status}>A Receber </Text>
        </View>

        <Text style={styles.title}>Últimas Transações</Text>
        

    </View>
  );
}




export function TransactionItem({ data }){
    return(
        <View style={styles.card}>
            <Image 
            source={{ uri: data.img }} style={styles.image} />
                     
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{data.name}</Text>
                <Text style={styles.sender}>{data.date}</Text>
            </View>
            
            <Text style={styles.amount}>R${data.amount}</Text>
        </View>
    );
} 






const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#ebf9ebff',
        padding: 16,
        borderRadius: 35,
        marginBottom: 20,
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginRight: 16,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardContent: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 2,
        flex: 1,
    },
    amount: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    sender: {
        fontSize: 14,
        color: '#555',
        marginBottom: 20,
    },
    status: {
        fontSize: 14,
        color: 'green',
        alignSelf: 'flex-start',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 50,
    },
});
