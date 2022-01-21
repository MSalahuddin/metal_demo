import {StyleSheet} from "react-native";
import { Fonts , Colors, Metrics} from "../../theme";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    filterBtn:  {
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
        },
   activeFilterBtn: {
    backgroundColor: Colors.activeFilter,
    borderRadius: Metrics.ratio(10),
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.14,
    shadowRadius: 1.27,
    elevation: 3,
    },
    filterBtnContainer: {
        width: "82%", 
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: Metrics.ratio(10),    
        backgroundColor: Colors.inactiveFilter},
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.14,
        shadowRadius: 1.27,
        elevation: 3,
    filterImageContainer :{
        width: "15%", 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Metrics.ratio(10),
        marginLeft: Metrics.ratio(8),
        backgroundColor: Colors.inactiveFilter,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.14,
        shadowRadius: 1.27,
        elevation: 3,},
    filters  : {
            flexDirection: "row", 
            width: Metrics.screenWidth * 0.9,
            height: Metrics.ratio(55),
            }

})