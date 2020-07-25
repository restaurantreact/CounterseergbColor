import React, {useState} from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


const Colorcounter = (props)=>{


    return(
        <View>
            <Text style={styles.txt1}>{props.ColorName}</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>props.OnIncrease()}> 
            <Text style={styles.txt}>{`Increase ${props.ColorName}`}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>props.OnDecrease()}> 
            <Text style={styles.txt}>{`Decrease ${props.ColorName}`}</Text>
            </TouchableOpacity>

         {/*   <Button style={styles.btn} title={`Increase ${props.ColorName}`} onPress={()=>props.OnIncrease()}></Button>*/}
         {/*<Button style={styles.btn} title={`Decrease ${props.ColorName}`} onPress={()=>props.OnDecrease()}></Button>*/}
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
         marginTop:'2%'
     },
     txt:{
         fontSize:30,
         alignSelf:'center',
         color:'white',

     },
     txt1:{
        fontSize:30,
        alignSelf:'center',
        color:'black'
     },
 }
 )

export default Colorcounter
