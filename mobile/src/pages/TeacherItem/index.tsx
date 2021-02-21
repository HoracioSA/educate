import React from 'react'
import {View, Image, Text, Linking} from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

export interface Teacher{
    id:number
    avatar:string;
    bio:string;
    price:number;
    name:string;
    subject:string;
    whatsapp:string
}
interface TeacherItemProps{
    teacherr:Teacher
}
const TeacherItem:React.FC<TeacherItemProps> =({teacherr})=>{

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${teacherr.whatsapp}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                style={styles.avatar} 
                source={{uri:teacherr.avatar}}/>
                <View style={styles.profileInfo}>
                <Text style={styles.name}>{teacherr.name}</Text> 
                <Text style={styles.subject}>{teacherr.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>           
                {teacherr.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price/Hour {'   '}
            <Text style={styles.priceValue}>{teacherr.price}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>
                    <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
                        <Image source={whatsappIcon}/>
    <Text style={styles.contactButtonText}>{teacherr.whatsapp}</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    )
}
export default TeacherItem