import React from "react";
import {View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
import { Fonts, Metrics, Colors } from "../../theme";
import styles from "./styles";
import {Card, edit, deleteIcon, back_arrow} from "../../assets/images"
import {Button, CustomHeader} from "../../components";
import {proceedPayment} from "../../constant/stringConstants";


const BeneficiaryCardDetail = () => {
    const cardDetails = [
        {obj1: {type: "Name", value: "Ashley Farmer"},
        obj2: {type: "Number", value: "416 652 978 8439"},
        },
        {obj1: {type: "Bank", value: "Zenith Bank, Nigeria"},
        obj2: {type: "Mobile Number", value: "28920919820"},
        },
        {obj1: {type: "Email", value: "ashley@metal.com"},
        obj2: {},
        }
    ];
    const rednerCardDetails = () => {
        return(
            <ImageBackground 
                resizeMode="contain"
                style = {styles.cardContainer} 
                source={Card}>
                  <View style = {styles.cardHeader}>
                         <View style = {styles.avatarContainer}> 
                            <Text style = {styles.avatarText}>AS</Text>
                        </View>
                       
                      <View style = {{flexDirection: "row"}}> 
                        <TouchableOpacity style = {styles.editButtonContainer}>
                                <Image source={edit}/>     
                                <Text style = {{
                                    color: Colors.placeholderContent, 
                                    marginLeft: Metrics.ratio(10)
                                }}>Edit</Text>  
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.deleteBtn}>
                                <Image source={deleteIcon}/>     
                            </TouchableOpacity>
                      </View>
                  </View>
                  <View>
                      <Text style = {styles.userName}>Ashley</Text>
                     {cardDetails.map((item) => {
                         return(
                            <View style = {{flexDirection: "row", justifyContent: "space-between", marginTop: Metrics.ratio(8)}}>
                                <View>
                                    <Text style = {styles.detailHeadText}>{item?.obj1?.type}</Text>
                                    <Text style = {styles.detailValText}>{item?.obj1?.value}</Text>
                                </View>
                                <View>
                                    <Text style = {styles.detailHeadText}>{item?.obj2?.type}</Text>
                                    <Text style = {styles.detailValText}>{item?.obj2?.value}</Text>
                                </View>
                            </View>
                         )
                     })}
                  </View>
            </ImageBackground>
        )
    }
    return(
        <View style = {styles.container}> 
            <CustomHeader heading="Beneficiary" rightImage = {back_arrow}/>
            {rednerCardDetails()}
        </View>
    );
}

export default BeneficiaryCardDetail;