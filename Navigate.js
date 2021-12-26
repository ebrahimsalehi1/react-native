import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import { NavigationContainer } from '@react-navigation/native';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function Navigate(props){
    return (<NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen 
                name="Approle"
                component={Home}
                options={{title:'نقش های کاربردی'}}
                />
                <Tabs.Screen 
                name="SubjectArea"
                component={Home}
                options={{title:'Subject Area'}}
                />        
                <Tabs.Screen 
                name="Report"
                component={Home}
                options={{title:'منوی گزارشات'}}
                />         
            </Tabs.Navigator>   
            {/* <AuthStack.Navigator>
                <AuthStack.Screen
                name="home 1"
                component={Home}
                options={{title:'home 1'}}
                />
                <AuthStack.Screen
                name="home 2"
                component={Home}
                options={{title:'home 2'}}
                />
            </AuthStack.Navigator> */}
        </NavigationContainer>);
}
