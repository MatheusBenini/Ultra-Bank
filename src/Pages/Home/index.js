import { View } from 'react-native';

import User from '../../Components/User';
import Card from '../../Components/Card';
import Balance from '../../Components/Balance';
import TransactionCard from '../../Components/Transaction';
import Nav from '../../Components/Nav';

export default function Home() {
 return (
    <View>   
        <User/>
        <Card/>
        <Balance/>
        <TransactionCard/>
        <Nav/>

    </View>
  );
}


