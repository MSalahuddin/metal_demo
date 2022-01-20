import React from 'react';
import { Image, Text, View } from 'react-native';

import { Colors, Fonts, Metrics } from '../../theme';
import { Back_icon, side_line2, up, wallet, share } from '../../assets/images';
import { AuthString } from '../../constant/stringConstants';
import Button from '../../components/Button';
import styles from './styles';


const PersonalDetails = ({ title, subTitle, others }) => {
    return (
        <View style={{
            backgroundColor: Colors.silver,
            marginHorizontal: Metrics.ratio(20),
            borderRadius: Metrics.ratio(15),
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
            height: Metrics.ratio(180),
            marginTop: Metrics.ratio(5),
        }}>
            <View style={{
                width: Metrics.ratio(50),
                height: Metrics.ratio(50),
                backgroundColor: Colors.placeholderContentWithOpacity,
                borderRadius: Metrics.ratio(30),
                alignItems: 'center',
                justifyContent: 'center',
                position: "absolute",
                top: Metrics.ratio(9),
                left: Metrics.ratio(20),
            }} >
                <Image style={{
                    width: Metrics.ratio("50%"),
                    height: Metrics.ratio("50%")
                }} source={wallet} />
            </View>

            <Text style={{
                fontFamily: Fonts.type.RobotoMedium,
                fontSize: Fonts.size.large,
                color: Colors.placeholderContent,
                position: 'absolute',
                top: Metrics.ratio(15),
                left: Metrics.ratio(90),
            }}>{title}</Text>

            <Text style={{
                fontFamily: Fonts.type.RobotoRegular,
                fontSize: Fonts.size.fourteen,
                color: Colors.placeholderContent,
                position: 'absolute',
                top: Metrics.ratio(45),
                left: Metrics.ratio(90),
            }}>{subTitle}</Text>

            <Text style={{
                fontFamily: Fonts.type.RobotoRegular,
                fontSize: Fonts.size.fourteen,
                color: Colors.placeholderContent,
                position: 'absolute',
                top: Metrics.ratio(65),
                left: Metrics.ratio(90),
            }}>{others}</Text>

            <View style={{
                backgroundColor: Colors.white,
                width: Metrics.ratio("100%"),
                height: Metrics.ratio(80),
                position: 'absolute',
                top: Metrics.ratio(100),
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomLeftRadius: Metrics.ratio(15),
                borderBottomRightRadius: Metrics.ratio(15),
            }}>
                <View style={{
                    width: Metrics.ratio(50),
                    height: Metrics.ratio(50),
                    backgroundColor: Colors.primaryBtn,
                    borderRadius: Metrics.ratio(30),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: Metrics.ratio(20),
                }}>
                    <Image source={up} />
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
            backgroundColor: Colors.white,
            borderRadius: Metrics.ratio(25),
            elevation: 5,
            height: Metrics.ratio(350),
            marginTop: Metrics.ratio(30),
            marginBottom: Metrics.ratio(60),
            marginHorizontal: Metrics.ratio(20),
        }}>

            <View style={{
                width: Metrics.ratio(70),
                height: Metrics.ratio(100),
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
                justifyContent: 'space-between',
                position: 'absolute',
                left: Metrics.ratio(110),
                top: Metrics.ratio(10),
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

                <View style={{
                    position: 'absolute',
                    top: Metrics.ratio(60),
                    left: Metrics.ratio(10)
                }}>

                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        color: Colors.placeholderContent,
                        fontSize: Fonts.size.sixteen,
                    }}>{id}</Text>

                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.sixteen,
                        color: Colors.placeholderContentWithOpacity
                    }}>{num}</Text>
                </View>
                <Image style={{height: Metrics.ratio("70%"), top: Metrics.ratio(10),}} source={image} />

            </View>

            <View style={{
                justifyContent: 'space-evenly',
                marginVertical: Metrics.ratio(25),
                
            }}>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: Metrics.ratio(20),
                marginBottom: Metrics.ratio(5),
            }}>
                <Text style={{
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.sixteen,
                    color: Colors.placeholderContentWithOpacity,
                }}>{info}</Text>

                <Text style={{
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.sixteen,
                    color: Colors.placeholderContent,
                }}>{detail}</Text>
            </View>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: Metrics.ratio(20),
                marginBottom: Metrics.ratio(5),
            }}>
                <Text style={{
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.sixteen,
                    color: Colors.placeholderContentWithOpacity,
                }}>{email}</Text>

                <Text style={{
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.sixteen,
                    color: Colors.placeholderContent,
                }}>{emailID}</Text>
            </View>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: Metrics.ratio(20),
                marginBottom: Metrics.ratio(5),
            }}>
                <Text style={{
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.sixteen,
                    color: Colors.placeholderContent,
                }}>{paidAmount}</Text>

                <Text style={{
                    fontFamily: Fonts.type.RobotoMedium,
                    fontSize: Fonts.size.sixteen,
                    color: Colors.placeholderContent,
                }}>{amount}</Text>
            </View>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: Metrics.ratio(20),
                marginBottom: Metrics.ratio(5),
            }}>
                <Text style={{
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.sixteen,
                    color: Colors.placeholderContent,
                }}>{sentAmount}</Text>

                <Text style={{
                    fontFamily: Fonts.type.RobotoMedium,
                    fontSize: Fonts.size.sixteen,
                    color: Colors.placeholderContent,
                }}>{sendedAmount}</Text>
            </View>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: Metrics.ratio(20),
                marginBottom: Metrics.ratio(5),
            }}>
                <Text style={{
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.sixteen,
                    color: Colors.placeholderContent,
                }}>{transferAmount}</Text>

                <Text style={{
                    fontFamily: Fonts.type.RobotoMedium,
                    fontSize: Fonts.size.sixteen,
                    color: Colors.placeholderContent,
                }}>{transferdAmount}</Text>
            </View>

            </View>


        </View>
    )
};

const TransactionDetails = () => {

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.heading}>Transaction Details</Text>
                <Image source={Back_icon} />
            </View>

            <PersonalDetails
                title="Ashley Farmer"
                subTitle="416 652 978 8439"
                others="Zenith Bank, Nigeria" />

            <TransferDetails
            title= "Transfer"
            subTitle= "NGN 205,402.02"
            image= { side_line2 }
            id= "Transaction ID"
            num= "1006598860356462"
            info= "Mobile Number"
            detail= "28920919820"
            email= "Email"
            emailID= "ashley@metal.com"
            paidAmount= "Paid Amount"
            amount= "USD 503.00"
            sentAmount= "Sent Amount"
            sendedAmount= "USD 500.00"
            transferAmount= "Transfer Amount"
            transferdAmount= "NGN 205,402.02"
            />

            <View style={styles.buttonContainer} >

                <Button
                    customBtnStyle={{ width: Metrics.ratio("70%")}}
                    textStyle={{ fontFamily: Fonts.type.RobotoRegular, fontSize: Fonts.size.large }}
                    leftIcon={share}
                    customLeftIcon={{ marginLeft: Metrics.ratio(60), width: Metrics.ratio("70%"), height: Metrics.ratio("80%"), marginVertical: Metrics.ratio(2) }}
                    btnText={AuthString.ButtonText.share} />
            </View>

        </View>
    )
}

export default TransactionDetails;