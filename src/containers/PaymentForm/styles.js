import {StyleSheet} from "react-native";
import { Fonts , Colors, Metrics} from "../../theme";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        width: '90%',
        borderWidth: Metrics.ratio(1),
        borderColor: Colors.inputBorder,
        borderRadius: Metrics.ratio(5),
        paddingHorizontal: Metrics.ratio(15),
        paddingTop: Metrics.ratio(15),
        marginBottom: Metrics.ratio(20)
    },
    customDateIcon: {
        // top: 15,
        // left: 10,
        // position: 'absolute',
        // backgroundColor: "red"
      },
})