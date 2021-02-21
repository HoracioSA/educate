import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import TeacherList from '../pages/TeacherList'
import Favorite from '../pages/Favorite';
const {Navigator, Screen}=createBottomTabNavigator();
export default function StudyTabs(){
return (
    <Navigator tabBarOptions={{
        style:{
            elevation:0,
            shadowOpacity:0,
            height:64,
            
        },
        tabStyle:{
            flexDirection:'row',
            alignItems:"center",
            justifyContent:'center'
        },
        iconStyle:{
            flex:0,
            width:20,
            height:20,
        },
        labelStyle:{
           fontFamily:'Archivo_700Bold',
            fontSize:13,
            marginLeft:16,  
        },
        inactiveBackgroundColor:'#fafafc',
        activeBackgroundColor:'#ebebf5',
        inactiveTintColor:'#c1bccc',
        activeTintColor:'#32264d'
    }}>
        
        <Screen
         name="TeacherList" 
         component={TeacherList}
         options={{
            tabBarLabel:'Teachers',
            tabBarIcon:({color,size, focused})=>{
                return (
                    <Ionicons size={size}  name="ios-easel" color={focused? '#8357e5': color}/>
                );
            }
         }}
         />
        <Screen 
        name="Favorite" 
        component={Favorite}
        options={{
            tabBarLabel:'Favorite',
            tabBarIcon:({color,size, focused})=>{
                return (
                    <Ionicons size={size} name="ios-heart" color={focused? '#8357e5': color}/>
                );
            }
         }}
        />

    </Navigator>
)
}