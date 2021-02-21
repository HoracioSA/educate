import React,{useEffect,useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import styles from './styles'
import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassIcon from '../../assets/images/icons/give-classes.png'
import heartIcom from '../../assets/images/icons/heart.png'
import api from '../../services/api'


function Landing(){

   const [totalconections, setTotalconections]= useState(0)
useEffect(()=>{
    api.get('/connections').then(response=>{
       const {total} =response.data;
       console.log(total)
       setTotalconections(total)
    })
},[])
   const {navigate} = useNavigation();
   function handleNavigateToGiveClassesPage(){
navigate('GiveClasses')
   }
   function handleNavegateToStudyPage(){
      navigate('Study')
   }
    return (
    
    <View style={styles.container}>
        <Image source={landingImg} style={styles.banner}/>
        <Text style={styles.title}>Wellcome,{'\n'} 
        <Text style={styles.titleBold}>What you want to do?</Text>           
         </Text>
         <View style={styles.buttonsContainer}>
             <RectButton 
             onPress={handleNavegateToStudyPage}
             style={[styles.button ,styles.buttonPrimary]}>
                <Image source={studyIcon}/>
                <Text style={styles.buttonText}>Study</Text>
             </RectButton>
             <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button ,styles.buttonSecondary]}>
                <Image source={giveClassIcon}/>
                <Text style={styles.buttonText}>Give class</Text>
             </RectButton>
         </View>
         <Text style={styles.totalConections}>
            Total of {totalconections} connections already made {' '}
            <Image source={heartIcom}/> 
         </Text>
         
    </View>
    )
}
export default Landing