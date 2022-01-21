import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { CustomHeader } from "../../components";
import { back_arrow } from "../../assets/images"
import styles from './styles';
import { Fonts, Metrics, Colors } from '../../theme';

function RadioButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={[{
            height: 23,
            width: 23,
            borderRadius: 13,
            borderWidth: 2,
            borderColor: Colors.placeholderContentWithOpacity,
            alignItems: 'center',
            justifyContent: 'center',
        }, props.style]}>
            {
                props.selected ?
                    <View style={{
                        height: 15,
                        width: 15,
                        borderRadius: 8,
                        backgroundColor: "blue",
                    }} />
                    : null
            }
        </TouchableOpacity>
    );
}
const SelectPurpose = () => {
    const [selectedPurpose, setSelectedPurpose] = useState("");

    return (
        <View style={styles.container}>
            <CustomHeader heading="Select Purpose" rightImage={back_arrow} />
            <View >
                <View style={styles.innerContent}>
                    <Text style={styles.text}>Family Support</Text>
                    <RadioButton onPress={() => { setSelectedPurpose("Family Support") }} selected={selectedPurpose === "Family Support"} />
                </View>
                <View style={styles.innerContent}>
                    <Text style={styles.text}>Bussiness</Text>
                    <RadioButton onPress={() => { setSelectedPurpose("Bussiness") }} selected={selectedPurpose === "Bussiness"} />
                </View>
                <View style={styles.innerContent}>
                    <Text style={styles.text}>Investment</Text>
                    <RadioButton onPress={() => { setSelectedPurpose("Investment") }} selected={selectedPurpose === "Investment"} />
                </View>
                <View style={styles.innerContent}>
                    <Text style={styles.text}>Others</Text>
                    <RadioButton onPress={() => { setSelectedPurpose("Others") }} selected={selectedPurpose === "Others"} />
                </View>
            </View>
        </View>
    )
}
export default SelectPurpose;