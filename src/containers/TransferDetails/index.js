import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import { Fonts, Metrics, Colors } from "../../theme";
import styles from "./styles";
import {
    Card,
    edit,
    deleteIcon,
    back_arrow,
    transfer,
    chevron_right,
    home_selected,
    profile_icon,
    help_icon,
    credit_card,
    interview
} from "../../assets/images"
import { Button, CustomHeader } from "../../components";
import { proceedPayment, home } from "../../constant/stringConstants";
import { SCREENS } from "../../constant/constant";


const TransferDetail = ({ navigation }) => {

    const cardDetails = [
        {
            obj1: { type: "Name", value: "Ashley Farmer" },
            obj2: { type: "Number", value: "416 652 978 8439" },
        },
        {
            obj1: { type: "Bank", value: "Zenith Bank, Nigeria" },
            obj2: { type: "Mobile Number", value: "28920919820" },
        },
        {
            obj1: { type: "Email", value: "ashley@metal.com" },
            obj2: {},
        }
    ];

    // handle navigation
    const handleNavigate = () => {
        navigation.navigate(SCREENS.PROCEED_PAYMENT)
    };

    const rednerCardDetails = () => {
        return (
            <ImageBackground
                resizeMode="contain"
                style={styles.cardContainer}
                source={Card}>
                <View style={styles.cardHeader}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatarText}>AS</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.editButtonContainer}>
                            <Image source={edit} />
                            <Text style={{
                                color: Colors.placeholderContent,
                                marginLeft: Metrics.ratio(10)
                            }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteBtn}>
                            <Image source={deleteIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.userName}>Ashley</Text>
                    {cardDetails.map((item) => {
                        return (
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: Metrics.ratio(8) }}>
                                <View>
                                    <Text style={styles.detailHeadText}>{item?.obj1?.type}</Text>
                                    <Text style={styles.detailValText}>{item?.obj1?.value}</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={styles.detailHeadText}>{item?.obj2?.type}</Text>
                                    <Text style={styles.detailValText}>{item?.obj2?.value}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ImageBackground>
        )
    }

    const renderButtons = () => {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Button
                    customBtnStyle={{
                        width: '90%',
                        marginTop: Metrics.ratio(30),
                        backgroundColor: Colors.dardBlue
                    }}
                    btnText={"Select Purpose"}
                    // leftIcon={transfer}
                    rightIcon={chevron_right}
                    customRightIcon={{
                        width: Metrics.ratio(15),
                        height: Metrics.ratio(15),
                    }}
                    customRightIconContainer={{
                        width: Metrics.ratio(15),
                        height: Metrics.ratio(15),
                    }}
                    onPress={() => { }} />
                {/* <Button
                    customBtnStyle={{
                        width: '70%',
                        marginBottom: Metrics.ratio(35),
                    }}
                    btnText={proceedPayment.btnText}
                    onPress={() => handleNavigate()} /> */}
            </View>
        )
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
    };

    const renderSelection = () => {
        return (
            <View style={{
                marginHorizontal: Metrics.screenWidth * 0.05,
                marginBottom: Metrics.screenHeight * 0.1
            }}>
                <Text style=
                    {{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.eighteen,
                        color: Colors.secondaryBtnText,
                        marginTop: Metrics.ratio(10)
                    }}>
                    {"How do you want to pay?"}
                </Text>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: Metrics.ratio(20)
                }}>
                    <TouchableOpacity style={styles.selectButon} onPress={() => { handleNavigate() }}>
                        <Image style={{
                            // width: Metrics.ratio(27), height: Metrics.ratio(27)
                        }} source={credit_card} />
                        <Text style={
                            {
                                fontFamily: Fonts.type.RobotoMedium,
                                fontSize: Fonts.size.thirteen,
                                color: Colors.mantle_grey,
                                marginTop: Metrics.ratio(8)
                            }
                        }>{"Pay by Card"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectButon}>
                        <Image style={{
                            // width: Metrics.ratio(27), height: Metrics.ratio(27)
                        }} source={interview} />
                        <Text style={
                            {
                                fontFamily: Fonts.type.RobotoMedium,
                                fontSize: Fonts.size.thirteen,
                                color: Colors.mantle_grey,
                                marginTop: Metrics.ratio(8)
                            }
                        }>{"Cash at Agent"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <CustomHeader heading="Transfer" rightImage={back_arrow} />
            {rednerCardDetails()}
            {renderButtons()}
            {renderSelection()}
            {renderBottom()}
        </View>
    );
}

TransferDetail.propTypes = {
    navigation: PropTypes.shape({
        replace: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
        dispatch: PropTypes.bool
    }).isRequired
};


export default TransferDetail;