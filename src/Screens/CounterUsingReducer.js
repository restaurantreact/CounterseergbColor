import React, {useReducer} from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'

const reducer = (type, payload)=>{

/*    if(payload=='add'){
        return type+1}
        //type 2
        //payload 5

    if(type=='sub'){
        return payload-1}*/

      //  console.log("type is",{type})
      //  console.log("payload is ",{payload})
 
        return type+payload

   
    
}


const CounterUsingReducer = (props)=>{

    const ChangeBy = 5

 const [counterrr,counterincrement] = useReducer(reducer, 2)

    return(
        <View>
             <Button style={styles.btn} title="Increment" onPress={()=>counterincrement(1*ChangeBy,counterrr)}/>
             <Button style={styles.btn} title="Decrement" onPress={()=>counterincrement(-1*ChangeBy, counterrr)}/>
             <Text style={{width:250, height:250, fontSize:30, alignSelf:'center'}}> the number is {counterrr} </Text>
        </View>

    );
}
const styles = StyleSheet.create({
    btn:{
         height:60,
         width:180,
         textAlign:'center',
         alignSelf:"center",
         fontSize:30, 
         marginTop:'5%'
 
     },
 }
 )

export default CounterUsingReducer
