import React, {useState} from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import Colorcounter from '../components/Colorcounter'
import { color } from 'react-native-reanimated'


const GetNewColor = (props)=>{

    const [red, setred] = useState(0)
    const [green, setgreen] = useState(0)
    const [blue, setblue] = useState(0)

    const colorincrement = 15

    function colorlimit(limit){
        if(limit>255){
            return 255;
        }
        else if (limit<0){
            return 0;
        }
        else{
            return limit
        }

    }

    return(
        <View>
            <Colorcounter 
             OnIncrease={()=>setred(colorlimit(red+colorincrement))}
             OnDecrease={()=>setred(colorlimit(red-colorincrement))} 
             ColorName="red">
             </Colorcounter>

            <Colorcounter 
             OnIncrease={()=>setgreen(colorlimit(green+colorincrement))} 
             OnDecrease={()=>setgreen(colorlimit(green-colorincrement))}
             ColorName="green">
             </Colorcounter>

            <Colorcounter
             OnIncrease={()=>setblue(colorlimit(blue+colorincrement))} 
             OnDecrease={()=>setblue(colorlimit(blue-colorincrement))}
             ColorName="blue">
            </Colorcounter>   

            <View style={{height:100, width:100, marginTop:'5%' ,alignSelf:'center' ,backgroundColor:`rgb(${red}, ${green}, ${blue})`}}></View>
            <Text style={{fontSize:30 ,marginTop:'.3%', alignSelf:'center'}}>{`rgb(${red}, ${green}, ${blue})`}</Text>
        </View>

    );
}
const styles = StyleSheet.create({

 }
 )

export default GetNewColor
