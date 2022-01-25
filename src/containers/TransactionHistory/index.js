import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker'
import { Fonts, Metrics, Colors } from "../../theme";
import styles from "./styles";
import { Calendar, filter, back_arrow, side_line2 } from "../../assets/images"
import { Button, CustomHeader, CustomTextInput } from "../../components";
import { proceedPayment } from "../../constant/stringConstants";

const Details = ({ title, subTitle, others }) => {
    return (
        <View style={styles.detailsContainer}>
                <Text style={styles.detailsContainerTitle}>{title}</Text>
                <Text style={styles.detailsContainerSubtitle}>{subTitle}</Text>
                <Text style={styles.detailsContainerSubtitle}>{others}</Text>
        </View>
    )
};

const TransactionID = ({ title, subTitle, image, id, num, month, date, year }) => {
    return (
        <View style={styles.transactionIdContainer}>
            <View style={styles.dateContainer}>
                <Text style={styles.month}>{month}</Text>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.year}>{year}</Text>
            </View>
            <View style={{
                marginVertical: Metrics.ratio(15),
            }}>
                <Text style={styles.transactionIdTitle}>{title}</Text>
                <Text style={styles.transactionIdsubTitle}>{subTitle}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{
                        height: Metrics.ratio("90%"),
                        marginRight: Metrics.ratio(5),
                    }} source={image} />
                    <View>
                        <Text style={styles.transactionID}>{id}</Text>
                        <Text style={styles.transactionID}>{num}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const TransactionHistory = () => {
    const [activeFilterIndex, setActiveFilterIndex] = useState(0);
    const renderFilters = () => {
        const filters = ["All", "Send", "Pending", "Failed"];
        return (
            <View style={styles.filters}>
                <View style={styles.filterBtnContainer}>
                    {
                        filters.map((filter, index) =>
                            <TouchableOpacity style={[
                                styles.filterBtn,
                                activeFilterIndex === index && styles.activeFilterBtn]}
                                onPress={() => setActiveFilterIndex(index)}>
                                <Text style={{
                                    fontSize: Fonts.size.twelve,
                                    fontFamily: Fonts.type.RobotoRegular,
                                    color: Colors.placeholderContent
                                }}>{filter}</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
                <View style={styles.filterImageContainer}>
                    <Image source={filter} />
                </View>
            </View>
        )}
    return (
        <View style={styles.container}>
            <CustomHeader heading="Transaction History" rightImage={back_arrow} />
            <Details
                title="Ashley Farmer"
                subTitle="416 652 978 8439"
                others="Zenith Bank, Nigeria" />
            <View style={{ alignItems: "center" }}>
                {renderFilters()}
            </View>
            <ScrollView>
                <TransactionID
                    month="Aug"
                    date="23"
                    year="2021"
                    title="USD 503.00"
                    subTitle="USD 500.00 ~ NGN 205,404.02"
                    image={side_line2}
                    id="Transaction ID"
                    num="100659886033154" />
                <TransactionID
                    month="Aug"
                    date="03"
                    year="2021"
                    title="USD 503.00"
                    subTitle="USD 500.00 ~ NGN 205,404.02"
                    image={side_line2}
                    id="Transaction ID"
                    num="100659886033154" />
            </ScrollView>
        </View>
    );
}
export default TransactionHistory;