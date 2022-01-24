import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';

import { Fonts, Metrics, Colors } from "../../theme";
import styles from "./styles";
import { Calendar, next_icon, back_arrow } from "../../assets/images"
import { Button, CustomHeader, CustomTextInput } from "../../components";
import { proceedPayment } from "../../constant/stringConstants";
import { SCREENS } from "../../constant/constant";

const PaymentForm = ({ navigation }) => {
    const [visa, setVisa] = useState(null);
    const [name, setName] = useState(null);
    const [cardNumber, setCardNumber] = useState(null);
    const [date, setDate] = useState(null);
    const [cvc, setCVC] = useState(null);

    // handle navigation
    const handleNavigate = () => {
        navigation.navigate(SCREENS.TRANSFER_PROCESSED)
    };


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
                       width: containerWidth ? containerWidth : "90%",
                   }
               ]}
               customInputStyle={{
                   height: Metrics.ratio(40),
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
    }

    const renderDatePicker = () => {
        return (
            <View style={{
                borderWidth: Metrics.ratio(1),
                borderColor: Colors.inputBorder,
                borderRadius: Metrics.ratio(5),
                paddingHorizontal: Metrics.ratio(15),
                paddingTop: Metrics.ratio(15),
                height: Metrics.ratio(70),
                marginRight: Metrics.screenWidth * 0.05
            }}>
                <Text style={{
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.twelve,
                    color: Colors.mantle_grey
                }}>
                    Expiry Date
                </Text>
                <DatePicker
                    confirmBtnText={'Confirm'}
                    cancelBtnText={'Cancel'}
                    date={date}
                    mode={'date'}
                    format={'YYYY-MM-DD'}
                    maxDate={new Date()}
                    iconComponent={
                        <Image style={styles.customDateIcon} source={Calendar} />
                    }
                    onDateChange={(date) => setDate(date)}
                    style={{
                        width: Metrics.screenWidth * 0.36,
                    }}
                    placeholder="Date of Birth"
                    customStyles={{
                        placeholderText: {
                            color: '#BBBBBB',
                            fontFamily: Fonts.type.RobotoRegular,
                        },
                        dateInput: {
                            borderWidth: 0,
                            left: -27,
                        },
                    }}
                />
            </View>
        )
    }

    const renderFields = () => {
        return (
            <View style={{ alignItems: "center" }}>
                {renderInput({
                    topLabelText: "Select Payment Gateway",
                    inputRightIcon: next_icon,
                    placeholder: "VISA",
                    value: visa,
                    setValue: setVisa
                })}
                {renderInput({
                    topLabelText: "Name",
                    inputRightIcon: null,
                    placeholder: "John",
                    value: name,
                    setValue: setName
                })}
                {renderInput({
                    topLabelText: "Card Number",
                    inputRightIcon: null,
                    placeholder: "4678 1234 8765 0056",
                    value: cardNumber,
                    setValue: setCardNumber
                })}
                <View style={{ flexDirection: "row" }}>
                    {renderDatePicker()}
                    {renderInput({
                        topLabelText: "CVV Code",
                        inputRightIcon: null,
                        placeholder: "226",
                        value: cvc,
                        setValue: setCVC,
                        containerWidth: "40%"
                    })}
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <CustomHeader heading="Payment" rightImage={back_arrow} />
            {renderFields()}
            <View style={{ flex: 1, alignItems: "center", }}>
                <Button
                    customBtnStyle={{ width: '70%', marginBottom: Metrics.ratio(35) }}
                    btnText={"Confirm"}
                    onPress={() => handleNavigate()}
                />
            </View>
        </View>
    );
}


PaymentForm.propTypes = {
    navigation: PropTypes.shape({
        replace: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
        dispatch: PropTypes.bool
    }).isRequired
};


export default PaymentForm;