import React, { useState } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { CustomHeader, CustomTextInput } from '../../components';
import { back_arrow, bank_transfer, bar1, map, next_icon, smartphone, transfer_money } from '../../assets/images';
import { Fonts, Metrics, Colors } from "../../theme";
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
            <View style={{
                marginHorizontal: Metrics.screenWidth * 0.05,
                marginBottom: Metrics.screenHeight * 0.06
            }}>
                <Text style=
                    {{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.eighteen,
                        color: Colors.secondaryBtnText,
                        marginTop: Metrics.ratio(15)
                    }}>
                    {"How do you want to pay?"}
                </Text>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: Metrics.ratio(20)
                }}>
                    <TouchableOpacity style={styles.selectButon} onPress={() => { handleNavigate() }}>
                        <Image style={{
                            // width: Metrics.ratio(27), height: Metrics.ratio(27)
                        }} source={bank_transfer} />
                        <Text style={
                            {
                                fontFamily: Fonts.type.RobotoRegular,
                                fontSize: Fonts.size.twelve,
                                color: Colors.mantle_grey,
                                marginTop: Metrics.ratio(5)
                            }
                        }>{"Bank Transfer"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectButon}>
                        <Image style={{
                            // width: Metrics.ratio(27), height: Metrics.ratio(27)
                        }} source={smartphone} />
                        <Text style={
                            {
                                fontFamily: Fonts.type.RobotoRegular,
                                fontSize: Fonts.size.twelve,
                                color: Colors.mantle_grey,
                                marginTop: Metrics.ratio(5)
                            }
                        }>{"Mobile Wallet Transfer"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectButon}>
                        <Image style={{
                            // width: Metrics.ratio(27), height: Metrics.ratio(27)
                        }} source={transfer_money} />
                        <Text style={
                            {
                                fontFamily: Fonts.type.RobotoRegular,
                                fontSize: Fonts.size.twelve,
                                color: Colors.mantle_grey,
                                marginTop: Metrics.ratio(5),
                            }
                        }>{"Cash Transfer"}</Text>
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