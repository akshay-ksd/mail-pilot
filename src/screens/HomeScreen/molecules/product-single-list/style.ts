import { StyleSheet } from "react-native";
import ScreenRatio from "../../../../components/constants/ScreenRatio";
import colors from "../../../../components/constants/colors";

const styles = StyleSheet.create({
    container:{
        width:ScreenRatio.width,
        height:ScreenRatio.height/4,
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        width:"100%",
        height:"100%",
        borderRadius:5,
        backgroundColor:"#fff",
        borderBottomWidth:1,
        borderColor:"#d3d3d3",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:"2%"
    },
    image:{
        width:100,
        height:"50%",
        borderRadius:1
    },
    details:{
        height:"100%",
        paddingVertical:"5%",
        marginLeft:"5%",
        paddingRight:"5%",
        width:"70%"
    },
    brandName:{
        fontSize:16,
        fontWeight:"600",
        color:colors.black
    },
    description:{
        fontSize:12
    }
});

export default styles