import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import { CustomHeader, CustomTextInput } from '../../components';
import { back_arrow, bank_transfer, bar1, map, next_icon, smartphone, transfer_money } from '../../assets/images';
import { Metrics, Colors } from "../../theme";
import styles from "./styles";

const AddBeneficiary = () => {
    const [Country, setCountry] = useState(null);
    const renderInput = ({
        topLabelText,
        inputRightIcon,
        placeholder,
        value,
        setValue,
        containerWidth
    }) => {
        return (
            <CustomTextInput
                placeholderTextColor={Colors.greyContent}
                customContainerStyle={[
                    styles.inputContainer,
                    {
                        width: containerWidth ? containerWidth : "100%",
                    }
                ]}
                customInputStyle={{
                    height: Metrics.ratio(30),
                    borderBottomWidth: 0,
                    borderBottomColor: Colors.transparent,
                }}
                topLabelText={topLabelText}
                inputRightIcon={inputRightIcon}
                enablesReturnKeyAutomaticallly={true}
                placeholder={placeholder}
                editable={true}
                value={value}
                onChangeInput={(value) => setValue(value)}
            />
        )
    };
    const renderSelection = () => {
        return (
            <View style={styles.selectOptionContainer}>
                <Text style={styles.selectOptionHeading}>
                    {"How do you want to pay?"}
                </Text>
                <View style={styles.selectOption}>
                    <TouchableOpacity style={styles.selectButon} onPress={() => { handleNavigate() }}>
                        <Image source={bank_transfer} />
                        <Text style={styles.text}>
                            {"Bank Transfer"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectButon}>
                        <Image source={smartphone} />
                        <Text style={styles.text}>
                            {"Mobile Wallet Transfer"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectButon}>
                        <Image source={transfer_money} />
                        <Text style={styles.text}>
                            {"Cash Transfer"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
    return (
        <View style={styles.container}>
            <CustomHeader heading="Add Beneficiaries" rightImage={back_arrow} />
            <View style={styles.subContainer}>
                <Image style={styles.image} source={bar1} />
                <Image style={styles.image} source={map} />
                {renderInput({
                    topLabelText: "Select Country",
                    inputRightIcon: next_icon,
                    placeholder: "Nigeria",
                    value: Country,
                    setValue: setCountry
                })}
                {renderSelection()}
            </View>
        </View>
    )
}

export default AddBeneficiary;