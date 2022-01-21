import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import DatePicker from 'react-native-datepicker'
import { Fonts, Metrics, Colors } from "../../theme";
import styles from "./styles";
import {Calendar, filter, back_arrow} from "../../assets/images"
import {Button, CustomHeader, CustomTextInput} from "../../components";
import {proceedPayment} from "../../constant/stringConstants";

const TransactionHistory = () => {
    const [activeFilterIndex, setActiveFilterIndex] = useState(0);
    const renderFilters = () => {
        const filters = ["All", "Send", "Pending", "Failed"];
        return(
            <View style = {styles.filters}>
                <View style = {styles.filterBtnContainer}>
                    {
                        filters.map((filter, index) => 
                            <TouchableOpacity style = {[
                               styles.filterBtn,
                                activeFilterIndex === index && styles.activeFilterBtn]}
                                onPress={() => setActiveFilterIndex(index)}>
                                <Text style = {{
                                    fontSize: Fonts.size.twelve,
                                    fontFamily: Fonts.type.RobotoRegular,
                                    color: Colors.placeholderContent
                                }}>{filter}</Text>
                            </TouchableOpacity>
                        
                            )
                    }
                </View>
                <View style = {styles.filterImageContainer}>
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