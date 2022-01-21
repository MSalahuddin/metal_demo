import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import { AuthString } from '../../constant/stringConstants';
import { Colors, Metrics, Fonts } from '../../theme';
import { share, Success_icon } from '../../assets/images';

const Details = ({ title, subTitle, isBold }) => {
    return (
        <View style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: Metrics.ratio(20),
            paddingVertical:  Metrics.ratio(10),
        }}>
            <Text style={{
                fontFamily: Fonts.type.RobotoRegular,
                fontSize: Fonts.size.fourteen,
                color: isBold ? Colors.placeholderContent : Colors.placeholderContentWithOpacity,
            }}>{title}</Text>
            <Text style={{
                fontFamily: isBold ? Fonts.type.RobotoBold : Fonts.type.RobotoRegular,
                fontSize: Fonts.size.fourteen,
                color: Colors.placeholderContent
            }}>{subTitle}</Text>

        </View>
    )
};

const TransferProcessed = () => {
    const DetailsItems = [
        { title: "Beneficiary Name", subTitle: "Ashley Farmer", isBold: false },
        { title: "Account Number", subTitle: "416 512 978 4562", isBold: false },
        { title: "Bank", subTitle: "Zenith Bank, Nigeria", isBold: false },
        { title: "Paid Amount", subTitle: "USD 503.00", isBold: true }
    ];
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Congratulations</Text>
                <Text style={styles.text}>Your transfer has been processed</Text>
            </View>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: Metrics.ratio(20)
            }}>
                <Image style={styles.image} source={Success_icon} />
            </View>
            <View style={styles.amounts}>
                <Text style={styles.sentAmount}>USD 500.00</Text>
                <Text style={styles.sentAmountText}>Sent Amount</Text>
            </View>
            <View style={styles.amounts}>
                <Text style={styles.sentAmount}>NGN 205,402.02</Text>
                <Text style={styles.sentAmountText}>Transfer Amount</Text>
            </View>


            <FlatList
                data={DetailsItems}
                renderItem={({ item }) => {
                    return (
                        <Details
                            title={item.title}
                            subTitle={item.subTitle}
                            isBold={item.isBold}
                        />
                    )
                }}
            />

            <View style={styles.buttonContainer} >
                <Button
                    customBtnStyle={{
                         width: Metrics.screenWidth * 0.8,
                         marginBottom: Metrics.ratio(20) }}
                    textStyle={{ 
                        fontFamily: Fonts.type.RobotoRegular, 
                        fontSize: Fonts.size.large }}
                    leftIcon={share}
                    customLeftIcon={{ 
                        marginLeft: Metrics.ratio(70), 
                        marginVertical: Metrics.ratio(2) }}
                    btnText={AuthString.ButtonText.share} />
            </View>


        </View>
    );
}

export default TransferProcessed;