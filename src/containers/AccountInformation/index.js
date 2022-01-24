import React, {useState, useRef} from 'react';
import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Metrics, Fonts } from '../../theme';
import {
    back_arrow,
   
} from '../../assets/images';
import styles from './styles';
import { CustomHeader, CustomTextInput } from "../../components";
import { SCREENS } from "../../constant/constant";
import {beneficiaryForm} from "../../constant/stringConstants";

const AccountInformation = ({navigation}) => {
// this will be attached with each input onChangeText
const [textValue, setTextValue] = useState(''); 

// all our input fields are tracked with this array
const refInputs = useRef([textValue]);

 const setInputValue = (index, value, fieldName) => {
    const inputs = refInputs.current;
    inputs[index] = {[fieldName] : value};
    setTextValue(value);
 };

    const renderInput = ({
        topLabelText,
        inputRightIcon,
        placeholder,
        value,
        setValue,
        containerWidth,
        index,
        fieldName
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
               onChangeInput={(value) => setValue(index, value, fieldName)}

           />
        )
    }

    let inputNumber = [4,5,6,7]
       console.log(refInputs)
    return (
        <View style={styles.container}>
            <CustomHeader heading= {beneficiaryForm.accountInformation} rightImage={back_arrow} />
            <View style = {{marginHorizontal: Metrics.screenWidth * 0.05}}>
                {inputNumber.map((item, index) => renderInput({
                    topLabelText: "CVV Code",
                    inputRightIcon: null,
                    placeholder: "226",
                    value: refInputs.current[index],
                    setValue: setInputValue,
                    containerWidth: "100%",
                    index,
                    fieldName: "bankAccountNumber"
                }))}
            </View>
        </View>
    );
}


AccountInformation.propTypes = {
    navigation: PropTypes.shape({
        replace: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
        dispatch: PropTypes.bool
    }).isRequired
};

export default AccountInformation;

