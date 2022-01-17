import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    ImageBackground,
} from 'react-native';
import { Colors, Fonts, Metrics } from "../../../theme";

const HeadingText = ({text}) => {
    return (
        <Text style={
            {
                fontFamily: Fonts.type.RobotoBold,
                fontSize: Fonts.size.large,
                color: Colors.placeholderContent,
                marginTop: Metrics.ratio(25)
            }
        }>{text}</Text>
    )
}

export  {HeadingText};