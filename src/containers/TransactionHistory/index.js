import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import DatePicker from 'react-native-datepicker'
import { Fonts, Metrics, Colors } from "../../theme";
import styles from "./styles";
import {Calendar, filter, back_arrow} from "../../assets/images"
import {Button, CustomHeader, CustomTextInput} from "../../components";
import {proceedPayment} from "../../constant/stringConstants";

const TransactionHistory = () => {
    const renderFilters = () => {
        const filters = ["All", "Send", "Pending", "Failed"];

        return(
            <View style = {{flexDirection: "row", width: Metrics.screenWidth * 0.9}}>
                <View style = {{
                    width: "82%", 
                    flexDirection: "row",
                    backgroundColor: "red"}}>
                    {
                        filters.map((filter) => 
                            <TouchableOpacity style = {{
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "green"
                                }}>
                                <Text>{filter}</Text>
                            </TouchableOpacity>
                        
                            )
                    }
                </View>
                <View style = {{
                    width: "15%", 
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "green"}}>
                        <Image source={filter}/>
                </View>
            </View>
        )
    }
    return(
        <View style = {styles.container}> 
            <CustomHeader heading="Transaction History" rightImage = {back_arrow}/>
            <View style = {{flex: 1, alignItems: "center"}}>
                {renderFilters()}
            </View>
        </View>
    );
}

export default TransactionHistory;