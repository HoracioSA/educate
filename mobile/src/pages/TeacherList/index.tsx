import React, { useState } from 'react'
import { View , ScrollView, Text} from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../TeacherItem'
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import api from '../../services/api'

export default function TeacherList(){
    const [teachers, setTeachers]=useState([]);
    console.log(teachers)
    const [isFilterVisible, setIsFilterVisible] =useState(false);

    const [subject, setSubject]=useState('');
    const [week_day, setWeekDay]= useState('');
    const [hour, setHour]= useState('');

    
    function handleFilterIsVisible(){
        setIsFilterVisible(!isFilterVisible)
    }
   async function handleFiltersSubmit(){
        const response= await api.get('classes',{
            params:{
                subject,
                week_day,
                hour
            }
        });
        setTeachers(response.data) 
    }
    return (
        <View style={styles.container}>
            <PageHeader title="Avelueble Teachers now" 
            headerRight={
            <BorderlessButton onPress={handleFilterIsVisible}>
                <Feather name="filter" size={20} color="#fff"/>
            </BorderlessButton>}
            >
                {isFilterVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Subject</Text>
                    <TextInput
                    style={styles.input}
                    value={subject}
                    onChangeText={text => setSubject(text)}
                    placeholder="Your interested subject"
                    placeholderTextColor="#c1bccc"
                    />
                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Week Day</Text>
                        <TextInput style={styles.input
                        }
                        value={week_day}
                        onChangeText={text=>setWeekDay(text)}
                        placeholder="Choose a Day`"
                        placeholderTextColor="#c1bccc"
                        >
                        </TextInput>
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Time</Text>
                        <TextInput style={styles.input
                        }
                        value={hour}
                        onChangeText={text => setHour(text)}
                        placeholder="Which time"
                        placeholderTextColor="#c1bccc"
                        >
                        </TextInput>
                    </View>
                </View>
                <RectButton onPress={handleFiltersSubmit} style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </RectButton>
                </View>
                )}
            </PageHeader>
            <ScrollView 
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:24
            }}
            >
            {teachers.map((teacher:Teacher)=>{
                return  <TeacherItem teacherr={teacher}/>
            })}
            </ScrollView>

        </View>
    )
}