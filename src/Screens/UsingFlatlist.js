import React, {useState} from 'react'
import { View, Button, FlatList, StyleSheet} from 'react-native'


const USingFlatlist = (props)=>{
    const [colors, nxtcolors] = useState([])
    return(
        <View>
            <Button style={styles.btn}r title="add color" onPress={()=>{
                nxtcolors([...colors, randomrgb()]);
            }}/>
            <FlatList 
             keyExtractor={(item)=>item}
            data={colors}
            renderItem={({item})=>{
                return <View style={{height:100, width:100, backgroundColor:item}}/>
            }}
           
            />
            
        </View>

    );
}
const randomrgb = ()=>{

    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`
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

export default USingFlatlist
