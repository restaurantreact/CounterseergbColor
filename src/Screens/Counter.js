import React, {useState} from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'


const Counter = (props)=>{

    const [counterrr, counterincrement] = useState(0)

    return(
        <View>
             <Button style={styles.btn} title="Increment" onPress={()=>counterincrement(counterrr+1)}/>
             <Button style={styles.btn} title="Decrement" onPress={()=>counterincrement(counterrr-1)}/>
             <Text style={{width:250, height:250, fontSize:30}}> the number is {counterrr} </Text>


        </View>

    );
}
const styles = StyleSheet.create({
    btn:{
         height:60,
         width:180,
         textAlign:'center',
         alignSelf:"center",
         fontSize:30
 
     },
 }
 )

export default Counter
