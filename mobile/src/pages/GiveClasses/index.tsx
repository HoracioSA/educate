import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import styles from './styles'
import giveclassesBgImg from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
export default function GiveClasses(){
    const {goBack} = useNavigation();
    function handleNavigateBack(){
        goBack();
    }
    return <View style={styles.container}>
        <ImageBackground 
        source={giveclassesBgImg} 
        resizeMode="contain" 
        style={styles.content} 
        >
            <Text style={styles.title}> Do you want to be Teacher?</Text>
            <Text style={styles.description}> To start, teaching you need register in our platform</Text>
        </ImageBackground>
        <RectButton onPress={handleNavigateBack} style={styles.okButton}>
            <Text style={styles.okText}>Ok</Text>
        </RectButton>
    </View>
}
