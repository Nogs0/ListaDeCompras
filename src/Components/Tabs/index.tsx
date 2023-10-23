
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../Perfil';
import Historico from '../Historico';
import Home from '../Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, View } from 'react-native';
import { Header } from '../Header';
import ButtonAdd from '../ButtonAdd';

export default function Tabs(){

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{ 
                tabBarStyle: { 
                    backgroundColor: '#800000',
                    borderColor: 'transparent',
                    paddingTop: 5,
                    paddingBottom: 5
                },
                header: ({}) => (
                    <Header/>
                )
            }}>
            <Tab.Screen 
            name="Perfil" 
            component={Perfil}
            options={{
                tabBarLabelStyle:{
                    color: '#F0E68C'
                },
                tabBarIcon: ({size}) => (
                    <Icon
                    name='human-child'
                    size={size}
                    color={'#F0E68C'}/>
                )
            }}/>
            <Tab.Screen
            name="Home" 
            component={Home}
            options={{                
                tabBarLabel: '',            
                tabBarIcon: ({size}) => (
                    <ButtonAdd size={size} color={'#B22222'} />
                )
            }}/>
            <Tab.Screen
            name="Histórico" 
            component={Historico}
            options={{
                tabBarLabelStyle:{
                    color: '#F0E68C'
                },
                tabBarIcon: ({size}) => (
                    <Icon
                    name='history'
                    size={size}
                    color={'#F0E68C'}/>
                )
            }}/>
        </Tab.Navigator>
    )
}