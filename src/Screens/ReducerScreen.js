import React, {useReducer  } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import Colorcounter from '../components/Colorcounter'
import { color } from 'react-native-reanimated'


function colorlimit(limit){

    if(limit>255){ return 255 }

    else if (limit<0) { return 0 }

    else { return limit }

}

const reducer = (state, action)=>{

    switch(action.ColorToChange){
        case 'red':
            return {...state, red:colorlimit(state.red+action.amount)};  
        case 'green':
            return {...state, green:colorlimit(state.green+action.amount)};  
        case 'blue':
            return {...state, blue:colorlimit(state.blue+action.amount)};  
        default:
            return state
    }  
};

const ReducerScreen = (props)=>{

      const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0 });


    const colorincrement = 15


    return(
        <View>
            <Colorcounter 
             OnIncrease={()=>dispatch({ColorToChange:'red', amount:colorincrement})}
             OnDecrease={()=>dispatch({ColorToChange:'red', amount:-1*colorincrement})} 
             ColorName="red">
             </Colorcounter>

            <Colorcounter 
             OnIncrease={()=>dispatch({ColorToChange:'green', amount:colorincrement})}   
             OnDecrease={()=>dispatch({ColorToChange:'green', amount:-1*colorincrement})}
             ColorName="green">
             </Colorcounter>

            <Colorcounter
             OnIncrease={()=>dispatch({ColorToChange:'blue', amount:colorincrement})}   
             OnDecrease={()=>dispatch({ColorToChange:'blue', amount:-1*colorincrement})}
             ColorName="blue">
            </Colorcounter>   

            <View style={{height:100, width:100, marginTop:'5%' ,alignSelf:'center' ,backgroundColor:`rgb(${state.red}, ${state.green}, ${state.blue})`}}></View>
            <Text style={{fontSize:30 ,marginTop:'.3%', alignSelf:'center'}}>{`rgb(${state.red}, ${state.green}, ${state.blue})`}</Text>
        </View>

    );

}

const styles = StyleSheet.create({

 }
 )

export default ReducerScreen
