import React from 'react'
import { View, Button, StyleSheet, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Main  = (props)=>{
    return(
        <View>
            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('count')}>
            <Text style={styles.txt}>press to COUNTER </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('flat')}>
            <Text style={styles.txt}>press to Flat </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('newcolor')}>
            <Text style={styles.txt}>press to get new color </Text>
            </TouchableOpacity>

           {/* <Button style={styles.btn} title="press->COUNTER" onPress={()=>props.navigation.navigate('count')}/>
            <Button style={styles.btn} title="press->Flat" onPress={()=>props.navigation.navigate('flat')}/>
    <Button style={styles.btn} title="press->get new color" onPress={()=>props.navigation.navigate('newcolor')}/>*/}
        
        </View>

    ); 
}

const styles = StyleSheet.create({

    btn:{
        height:50,
        width:"70%",
        borderRadius:10,
        textAlign:'center',
        alignSelf:"center",
        fontSize:0, 
        backgroundColor:'black',
        marginTop:'10%',
        paddingTop:'2%'

    },
    txt:{
        fontSize:20,
        alignSelf:'center',
        color:'white',

    },
}
)

export default Main
