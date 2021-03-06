import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';

import { Fonts, Metrics, Colors } from "../../theme";
import styles from "./styles";
import {
    flip,
    united_states_circle,
    nigeria_circle,
    back_arrow,
    home_selected,
    profile_icon,
    help_icon
} from "../../assets/images"
import { Button, CustomHeader } from "../../components";
import { proceedPayment } from "../../constant/stringConstants";
import { SCREENS } from "../../constant/constant";

const ProceedPayment = ({ navigation }) => {

    // handle navigation
    const handleNavigate = () => {
        navigation.navigate(SCREENS.PAYMENT_FORM)
    };

    const renderPaymentConversion = () => {
        const conversionData = [
            {
                amount: "500",
                flag: united_states_circle,
                country: "USA"
            },
            {
                amount: "205,404.02",
                flag: nigeria_circle,
                country: "NGN"
            }
        ];

        return (
            <View>
                <View style={{
                    backgroundColor: Colors.white,
                    marginHorizontal: Metrics.ratio(20),
                    borderRadius: Metrics.ratio(20),
                }}>
                    {conversionData.map((item, i) => {
                        return (
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                borderBottomColor: Colors.greyContent,
                                borderBottomWidth: i == conversionData.length - 1 ? Metrics.ratio(0) : Metrics.ratio(1),
                                paddingVertical: Metrics.ratio(15),
                                paddingHorizontal: Metrics.ratio(20)
                            }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={item.flag} />
                                    <Text style={{
                                        fontSize: Fonts.size.sixteen,
                                        fontFamily: Fonts.type.RobotoMedium,
                                        color: Colors.mineShaft,
                                        marginLeft: Metrics.ratio(10)
                                    }}>{item.amount}</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{
                                        fontSize: Fonts.size.fourteen,
                                        fontFamily: Fonts.type.RobotoRegular,
                                        color: Colors.mineShaft,
                                    }}>{item.country}</Text>
                                    <Text style={{
                                        fontSize: Fonts.size.fourteen,
                                        fontFamily: Fonts.type.RobotoRegular,
                                        color: Colors.mineShaft,
                                        marginLeft: Metrics.ratio(10)
                                    }}>{">"}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: Metrics.ratio(10)
                }}>
                    <Text style={[
                        styles.exchangeRateText,
                        { color: Colors.placeholderContent }
                    ]}>Exchange Rate: </Text>
                    <Text style={[
                        styles.exchangeRateText,
                        { color: Colors.primaryBtn }]}>USD 1 = NGN 410.81</Text>
                </View>
            </View>
        )
    }

    const renderFeeButton = () => {
        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: Metrics.ratio(10),
                marginTop: Metrics.screenHeight * 0.06,
                justifyContent: "space-between"
            }}>
                <Text style={{
                    fontSize: Fonts.size.sixteen,
                    fontFamily: Fonts.type.RobotoMedium,
                    color: Colors.mineShaft,
                    marginLeft: Metrics.ratio(10)
                }}>{"Fee"}</Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: Metrics.ratio(20),
                            backgroundColor: Colors.white,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: Metrics.ratio(10),
                            paddingVertical: Metrics.ratio(7)
                        }}>
                        <View style={{
                            backgroundColor: Colors.underlineColor,
                            borderRadius: Metrics.ratio(44),
                            width: Metrics.ratio(20),
                            height: Metrics.ratio(20)
                        }}>
                        </View>
                        <Text style={{
                            fontSize: Fonts.size.ten,
                            fontFamily: Fonts.type.RobotoRegular,
                            color: Colors.primaryBtn,
                            marginLeft: Metrics.ratio(7)
                        }}>Included</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderRadius: Metrics.ratio(20),
                            backgroundColor: Colors.primaryBtn,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: Metrics.ratio(10),
                            paddingVertical: Metrics.ratio(7),
                            marginLeft: Metrics.ratio(10)
                        }}>
                        <View style={{
                            borderWidth: Metrics.ratio(2),
                            borderColor: Colors.white,
                            backgroundColor: Colors.primaryBtn,
                            borderRadius: Metrics.ratio(44),
                            width: Metrics.ratio(20),
                            height: Metrics.ratio(20)
                        }}>
                        </View>
                        <Text style={{
                            fontSize: Fonts.size.ten,
                            fontFamily: Fonts.type.RobotoRegular,
                            color: Colors.white,
                            marginLeft: Metrics.ratio(7)
                        }}>Separate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderPaymentDetails = () => {
        const paymentDetails = [
            {
                type: "Pay by",
                value: "Card"
            },
            {
                type: "Transfer Fees",
                value: "USD 1.00"
            },
            {
                type: "Card Fee",
                value: "USD 2.00"
            },
            {
                type: "Total Payment",
                value: "USD 503.00"
            },
        ]
        return (
            <View style={styles.paymentDetails}>
                <Text style={styles.paymentDetailsHeading}>Payment Details</Text>
                {paymentDetails.map((item, index) => {
                    return (
                        <View style={styles.paymentDetailRow}>
                            <Text style={[
                                styles.detailType,
                                index === paymentDetails.length - 1 &&
                                styles.totalPayment
                            ]}>{item.type}</Text>
                            <Text style={[
                                styles.detailValue,
                                index === paymentDetails.length - 1 &&
                                styles.totalPayment
                            ]}>{item.value}</Text>
                        </View>
                    )
                })}
                <View style={{ alignItems: "center", justifyContent: "center", marginTop: Metrics.ratio(20) }}>
                    <Button
                        customBtnStyle={{
                            width: "80%",
                            backgroundColor: Colors.primaryBtn
                        }}
                        textStyle={{ color: Colors.white }}
                        btnText={proceedPayment.btnText}
                        onPress={() => handleNavigate()} />
                </View>
            </View>
        );
    }

    const renderBottom = () => {
        const tabs = [
            { icon: home_selected, name: "Home" },
            { icon: profile_icon, name: "Profile" },
            { icon: help_icon, name: "Help" },
        ];
        return (
            <View style={{
                height: Metrics.screenHeight * 0.1,
                width: Metrics.screenWidth,
                backgroundColor: Colors.white,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: Metrics.screenWidth * 0.1,
                marginTop: "auto",
                borderTopLeftRadius: Metrics.ratio(10),
                borderTopRightRadius: Metrics.ratio(10),
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.14,
                shadowRadius: 1.27,
                elevation: 3,
            }}>
                {tabs.map((item) => (
                    <View style={{ alignItems: "center", }}>
                        <Image
                            style={{
                                // width: Metrics.ratio(10),
                                // height: Metrics.ratio(10),
                            }}
                            resizeMethod='auto'
                            resizeMode='contain'
                            source={item.icon}
                        />
                        <Text style={{
                            fontFamily: Fonts.type.RobotoRegular,
                            fontSize: Fonts.size.thirteen,
                            color: Colors.mantle_grey
                        }}>{item.name}</Text>
                    </View>
                ))}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <CustomHeader heading="Payment" rightImage={back_arrow} />
            {renderPaymentConversion()}
            {renderFeeButton()}
            {renderPaymentDetails()}
            {renderBottom()}
        </View>
    );
}

ProceedPayment.propTypes = {
    navigation: PropTypes.shape({
        replace: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
        dispatch: PropTypes.bool
    }).isRequired
};


export default ProceedPayment;