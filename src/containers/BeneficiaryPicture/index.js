import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from "./styles";
import { Button, CustomHeader,} from '../../components';
import { Fonts, Metrics, Colors } from "../../theme";
import { add_avatar, avatar1, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, back_arrow, bar2, } from '../../assets/images';
import Modal from '../../components/Modal';
const BeneficiaryPicture = () => {
    return (
        <View style={styles.container}>
            <CustomHeader heading="Beneficiary Picture" rightImage={back_arrow} />
            <View style={styles.subContainer}>
                <Image source={bar2} />
                <Text style={styles.text}>Add Beneficiary Picture</Text>
                <View style={styles.addAvatar}>
                    <Image source={add_avatar} />
                </View>
                <Text style={styles.text}>Or Select Avatar</Text>
                <View style={styles.avatarContainer}>
                    <Image source={avatar1} />
                    <Image source={avatar4} />
                    <Image source={avatar5} />
                    <Image source={avatar6} />
                </View>
                <View style={styles.avatarContainer}>
                    <Image source={avatar7} />
                    <Image source={avatar8} />
                    <Image source={avatar9} />
                    <View style={styles.viewAll}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                height: Metrics.ratio(6),
                                width: Metrics.ratio(6),
                                borderRadius: Metrics.ratio(3),
                                marginRight: 2,
                                backgroundColor: Colors.placeholderContent}} />
                            <View style={{
                                height: Metrics.ratio(6),
                                width: Metrics.ratio(6),
                                borderRadius: Metrics.ratio(3),
                                marginRight: 2,
                                backgroundColor: Colors.placeholderContent}} />
                            <View style={{
                                height: Metrics.ratio(6),
                                width: Metrics.ratio(6),
                                borderRadius: Metrics.ratio(3),
                                backgroundColor: Colors.placeholderContent}} />
                        </View>
                        <Text style={{
                            fontSize: Fonts.size.ten,
                            color: Colors.primaryBtn
                        }}>View All</Text>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                <Button
                    customBtnStyle={{ width: '70%', marginBottom: Metrics.ratio(35) }}
                    btnText={"Continue"}
                    onPress={() => handleNavigate()} />
            </View>
            </View>
            <Modal />
        </View>
    )}
export default BeneficiaryPicture;
