import React from 'react'
import {View, ScrollView} from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../TeacherItem'

export default function Favorite(){
return (
    <View style={styles.container}>
            <PageHeader title="My favorites Teachers"/>
            <ScrollView 
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:24
            }}
            >
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>

            </ScrollView>
        </View>
)
}