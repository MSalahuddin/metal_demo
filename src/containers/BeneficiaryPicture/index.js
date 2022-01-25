import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import styles from "./styles";
import { AuthString } from '../../constant/stringConstants';
import { Button, CustomHeader, } from '../../components';
import { Fonts, Metrics, Colors } from "../../theme";
import {
    add_avatar, avatar1, avatar4, avatar5, avatar6,
    avatar7, avatar8, avatar9, avatar10, avatar11,
    avatar12, avatar13, avatar14, avatar15, avatar16,
    avatar17, avatar18, avatar19, avatar20, avatar21,
    avatar22, avatar23, back_arrow, bar2,
} from '../../assets/images';
import ModalTemplate from '../../components/ModalTemplate';
const BeneficiaryPicture = () => {

    const renderAvatar = (avatar) => {
        return <Image source={avatar} />
    }

    const renderRow = (avatars) => {
        return (
            <View style={styles.avatarContainer}>
                {avatars.map((avatar) => avatar === "viewAll" ? <TouchableOpacity style={styles.viewAll}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Text style={{
                        fontSize: Fonts.size.ten,
                        color: Colors.primaryBtn
                    }}>View All</Text>
                </TouchableOpacity> : renderAvatar(avatar))}
            </View>
        )}
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
                {renderRow([avatar1, avatar4, avatar5, avatar6,])}
                {renderRow([avatar7, avatar8, avatar9, "viewAll"])}
                <View style={styles.btnContainer}>
                    <Button
                        customBtnStyle={{ width: '70%', marginBottom: Metrics.ratio(35) }}
                        btnText={"Continue"}
                        onPress={() => handleNavigate()} />
                </View>
                <ModalTemplate>
                    <View style={{
                        height: Metrics.screenHeight * 0.8,
                        backgroundColor: 'white',
                        marginHorizontal: Metrics.ratio(20),
                        marginVertical: Metrics.screenHeight * 0.1,
                        paddingHorizontal: Metrics.ratio(20),
                        elevation: 50,
                        borderRadius: Metrics.ratio(20)
                    }} >
                        <ScrollView>
                            {renderRow([avatar1, avatar4, avatar5, avatar6,])}
                            {renderRow([avatar7, avatar8, avatar9, avatar10,])}
                            {renderRow([avatar11, avatar12, avatar13, avatar14,])}
                            {renderRow([avatar15, avatar16, avatar17, avatar18,])}
                            {renderRow([avatar19, avatar20, avatar21, avatar22,])}
                            {renderRow([avatar13, avatar7, avatar1, avatar23,])}
                            {renderRow([avatar7, avatar8, avatar9, avatar10,])}
                        </ScrollView>
                        <Button
                            customBtnStyle={{
                                backgroundColor: Colors.primaryBtn,
                                marginHorizontal: Metrics.ratio(20),
                            }}
                            textStyle={{ color: Colors.white }}
                            btnText={AuthString.ButtonText.continue}
                            onPress={() => handleNavigation()}
                        />
                    </View>
                </ModalTemplate>
            </View>
        </View>
    )
}
export default BeneficiaryPicture;
