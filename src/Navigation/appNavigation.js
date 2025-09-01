import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Card from 'pages/Cards';

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" options= {{headerShown:false}} component={Home} />
                <Stack.Screen name="Profile" options= {{headerShown:false}} component={Profile} />
                <Stack.Screen name="Card" options= {{headerShown:false}} component={Card} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}