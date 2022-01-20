import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Button, CustomHeader } from "../../components";
import styles from './styles';
import { Card, edit, deleteIcon, back_arrow, transfer, chevron_right } from "../../assets/images";

const selectPurpose = [
    { label: 'Family Support', value: 0 },
    { label: 'Bussiness', value: 1 },
    { label: 'Investment', value: 2 },
    { label: 'Other', value: 3 },
];

class SelectPurpose extends Component {

    constructor() {
        super();
        this.state = {
            selectedPurpose: -1,
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <CustomHeader heading="Select Purpose" rightImage={back_arrow} />
                <RadioForm style={styles.subContainer}
                    formHorizontal={false}
                    animation={true}
                >
                    {/* To create radio buttons, loop through your array of options */}
                    {
                        selectPurpose.map((obj, i) => (

                            <RadioButton style={styles.innerContent} labelHorizontal={true} key={i} >

                                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                <RadioButtonLabel
                                    obj={obj}
                                    index={i}
                                    labelHorizontal={true}
                                    onPress={(value) => { this.setState({ selectPurpose: value }) }}
                                    labelStyle={{ fontSize: 20, padding: 25, }}
                                    labelWrapStyle={{ paddingLeft: 20, }}
                                />
                                <RadioButtonInput
                                    obj={obj}
                                    index={i}
                                    isSelected={this.state?.selectPurpose === i}
                                    onPress={(value) => { this.setState({ selectPurpose: value }) }}
                                    borderWidth={2}
                                    buttonInnerColor={'#2196f3'}
                                    buttonOuterColor={this.state?.selectPurpose === i ? '#2196f3' : '#94959B'}
                                    buttonSize={15}
                                    buttonOuterSize={21.5}
                                    buttonStyle={{}}
                                    buttonWrapStyle={{ position: 'absolute', top: 25, left: 330, paddingRight: 50, }}
                                />

                            </RadioButton>
                        ))
                    }
                </RadioForm>


            </View>
        );
    }
}

export default SelectPurpose;