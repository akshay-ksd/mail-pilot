import { StyleSheet } from "react-native";
import ScreenRatio from "../../../../components/constants/ScreenRatio";
const styles = StyleSheet.create({
    container:{
        width:ScreenRatio.width,
        height:"8%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%"
    }
});

export default styles