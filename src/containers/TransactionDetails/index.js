import React from 'react';
import { Image, Text, View } from 'react-native';

import { Colors, Fonts, Metrics } from '../../theme';
import { Back_icon, side_line2, up, wallet, share } from '../../assets/images';
import { AuthString } from '../../constant/stringConstants';
import Button from '../../components/Button';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const PersonalDetails = ({ title, subTitle, others }) => {
    return (
        <View style={{
            flex: 1,
            elevation: 5,
            marginHorizontal: Metrics.ratio(20),
            borderRadius: Metrics.ratio(20),
            marginBottom: Metrics.ratio(5),
        }}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: Colors.silver,
                borderTopLeftRadius: Metrics.ratio(20),
                borderTopRightRadius: Metrics.ratio(20),
                paddingVertical: Metrics.screenHeight * 0.02,
            }}>
                <View style={{
                    backgroundColor: Colors.placeholderContentWithOpacity,
                    width: Metrics.ratio(45),
                    height: Metrics.ratio(45),
                    borderRadius: Metrics.ratio(30),
                    marginHorizontal: Metrics.ratio(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{
                        width: Metrics.ratio("45%"),
                        height: Metrics.ratio("45%"),
                    }} source={wallet} />
                </View>
                <View style={{
                    marginVertical: Metrics.ratio(8),
                }}>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoMedium,
                        fontSize: Fonts.size.xLarge,
                        color: Colors.placeholderContent,
                    }}>{title}</Text>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContent,
                    }}>{subTitle}</Text>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.fourteen,
                        color: Colors.placeholderContent,
                    }}>{others}</Text>
                </View>
            </View>
            <View style={{
                backgroundColor: Colors.white,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomLeftRadius: Metrics.ratio(20),
                borderBottomRightRadius: Metrics.ratio(20),

            }}>
                <View style={{
                    backgroundColor: Colors.primaryBtn,
                    width: Metrics.ratio(45),
                    height: Metrics.ratio(45),
                    borderRadius: Metrics.ratio(30),
                    marginHorizontal: Metrics.ratio(20),
                    marginVertical: Metrics.ratio(10),
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{
                    }} source={up} />
                </View>
                <Text style={{
                    fontFamily: Fonts.type.RobotoMedium,
                    fontSize: Fonts.size.large,
                    color: Colors.placeholderContent,
                }}>Lola Eniolorunda</Text>
            </View>
        </View>
    )
};

const TransferDetails = ({
    title,
    subTitle,
    image,
    id,
    num,
    info,
    detail,
    email,
    emailID,
    paidAmount,
    amount,
    sentAmount,
    sendedAmount,
    transferAmount,
    transferdAmount }) => {
    return (
        <View style={{
            flex: 2,
            backgroundColor: Colors.white,
            elevation: 5,
            borderRadius: Metrics.ratio(20),
            marginHorizontal: Metrics.ratio(20),
            marginVertical: Metrics.ratio(15),
            marginBottom: Metrics.ratio(20),
        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{
                    width: Metrics.ratio(70),
                    height: Metrics.ratio(90),
                    borderRadius: Metrics.ratio(10),
                    marginHorizontal: Metrics.ratio(20),
                    marginVertical: Metrics.ratio(15),
                    backgroundColor: Colors.primaryBtn,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.white,
                    }}>Aug</Text>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoMedium,
                        fontSize: Fonts.size.eighteen,
                        color: Colors.white,
                    }}>23</Text>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.white,
                    }}>2021</Text>
                </View>
                <View style={{
                    marginVertical: Metrics.ratio(15),
                }}>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContentWithOpacity,
                    }}>{title}</Text>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoMedium,
                        fontSize: Fonts.size.large,
                        color: Colors.placeholderContent,
                    }}>{subTitle}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{
                            height: Metrics.ratio("93%"),
                            marginRight: Metrics.ratio(5),
                        }} source={image} />
                        <View>
                            <Text style={{
                                fontFamily: Fonts.type.RobotoRegular,
                                color: Colors.placeholderContent,
                                fontSize: Fonts.size.sixteen,
                            }}>{id}</Text>
                            <Text style={{
                                fontFamily: Fonts.type.RobotoRegular,
                                color: Colors.placeholderContentWithOpacity,
                                fontSize: Fonts.size.sixteen,
                            }}>{num}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: Metrics.ratio(20),
                marginBottom: Metrics.ratio(10),
            }}>
                <View>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContentWithOpacity,
                        marginBottom: Metrics.ratio(5),
                    }}>{info}</Text>

                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContentWithOpacity,
                        marginBottom: Metrics.ratio(5),
                    }}>{email}</Text>

                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContent,
                        marginBottom: Metrics.ratio(5),
                    }}>{paidAmount}</Text>

                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContent,
                        marginBottom: Metrics.ratio(5),
                    }}>{sentAmount}</Text>

                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContent,
                        marginBottom: Metrics.ratio(5),
                    }}>{transferAmount}</Text>
                </View>

                <View style={{ alignItems: 'flex-end', }}>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContent,
                        marginBottom: Metrics.ratio(5),
                    }}>{detail}</Text>

                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContent,
                        marginBottom: Metrics.ratio(5),
                    }}>{emailID}</Text>

                    <Text style={{
                        fontFamily: Fonts.type.RobotoMedium,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContent,
                        marginBottom: Metrics.ratio(5),
                    }}>{amount}</Text>

                    <Text style={{
                        fontFamily: Fonts.type.RobotoMedium,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContent,
                        marginBottom: Metrics.ratio(5),
                    }}>{sendedAmount}</Text>

                    <Text style={{
                        fontFamily: Fonts.type.RobotoMedium,
                        fontSize: Fonts.size.fourteen,
                        color: Colors.placeholderContent,
                        marginBottom: Metrics.ratio(5),
                    }}>{transferdAmount}</Text>
                </View>
            </View>
        </View>
    )
}

const TransactionDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.heading}>Transaction Details</Text>
                <Image source={Back_icon} />
            </View>
            <ScrollView>
                <PersonalDetails
                    title="Ashley Farmer"
                    subTitle="416 652 978 8439"
                    others="Zenith Bank, Nigeria"
                />
                <TransferDetails
                    title="Transfer"
                    subTitle="NGN 205,402.02"
                    image={side_line2}
                    id="Transaction ID"
                    num="1006598860356462"
                    info="Mobile Number"
                    detail="28920919820"
                    email="Email"
                    emailID="ashley@metal.com"
                    paidAmount="Paid Amount"
                    amount="USD 503.00"
                    sentAmount="Sent Amount"
                    sendedAmount="USD 500.00"
                    transferAmount="Transfer Amount"
                    transferdAmount="NGN 205,402.02"
                />
                <View style={styles.buttonContainer} >
                    <Button
                        customBtnStyle={{ width: Metrics.ratio("70%") }}
                        textStyle={{ fontFamily: Fonts.type.RobotoRegular, fontSize: Fonts.size.large }}
                        leftIcon={share}
                        customLeftIcon={{ marginLeft: Metrics.ratio(60), width: Metrics.ratio("70%"), height: Metrics.ratio("80%"), marginVertical: Metrics.ratio(2) }}
                        btnText={AuthString.ButtonText.share} />
                </View>
            </ScrollView>
        </View>
    )
}

export default TransactionDetails;