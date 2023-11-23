import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:100,
        backgroundColor:"blue",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    helpText:{
        fontSize:20,
        fontWeight:"800",
        color:"white"
    }
});

export default styles