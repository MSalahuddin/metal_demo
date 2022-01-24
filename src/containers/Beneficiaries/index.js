import React from 'react';
import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Metrics, Fonts } from '../../theme';
import {
    back_arrow,
    side_line,
    add_favorites,
    next_icon,
    side_line2,
    home_selected,
    profile_icon,
    help_icon
} from '../../assets/images';
import styles from './styles';
import { CustomHeader } from "../../components";
import { SCREENS } from "../../constant/constant";

const FavoriteBeneficiaries = ({ title, subTitle, icon, isIcon }) => {
    return (
        <View style={{
            // flex: 1,
            // flexDirection: 'row',
            width: Metrics.ratio(100),
            height: "75%",
            backgroundColor: Colors.white,
            borderRadius: Metrics.ratio(10),
            alignItems: 'center',
            marginRight: Metrics.ratio(9),
            elevation: 3,
        }}>
            <View style={{
                width: Metrics.ratio(50),
                height: Metrics.ratio(50),
                backgroundColor: isIcon ? Colors.light_blue : Colors.primaryBtn,
                borderRadius: Metrics.ratio(30),
                marginTop: Metrics.ratio(15),
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {isIcon ? <Image source={add_favorites} /> : <Text style={{ fontFamily: Fonts.type.RobotoRegular, fontSize: Fonts.size.eighteen, color: Colors.white, }}>{icon}</Text>}
            </View>

            <View style={{
                marginTop: "auto",
                alignItems: "center",
            }}>
                <Text style={{
                    color: Colors.placeholderContent,
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.thirteen,
                    marginTop: Metrics.ratio(10)
                }}>{title}</Text>
                <Text style={{
                    color: Colors.mantle_grey,
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.thirteen,
                    marginVertical: Metrics.ratio(7)
                }}>{subTitle}</Text>
            </View>

        </View>
    )
};

const AllBeneficiaries = ({ image, title, subTitle, others, handleNavigate }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: Colors.white,
                height: Metrics.screenHeight * 0.12,
                borderBottomColor: Colors.greyContent,
                borderBottomWidth: Metrics.ratio(1),
                flexDirection: "row",
                alignItems: 'center',
                paddingHorizontal: Metrics.ratio(20)
            }}
            onPress={() => handleNavigate()}
        >
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={image}
                    style={{
                        top: Metrics.ratio(15)
                    }} />

                <View style={{
                    left: Metrics.ratio(25),
                    marginVertical: Metrics.ratio(8),
                }}>
                    <Text style={{
                        fontFamily: Fonts.type.RobotoRegular,
                        fontSize: Fonts.size.eighteen,
                        color: Colors.primaryBtn,
                    }}>{title}</Text>

                    <Text style={{
                        color: Colors.placeholderContent,
                        fontSize: Fonts.size.twelve,
                    }}>{subTitle}</Text>

                    <Text style={{
                        color: Colors.mantle_grey,
                        fontSize: Fonts.size.twelve,
                    }}>{others}</Text>

                </View>
            </View>
            <Image
                source={next_icon}
                style={{
                    marginLeft: "auto"
                }} />
        </TouchableOpacity>
    )
};

const Beneficiaries = ({ navigation }) => {
    const favBenificiaries = [
        { title: "Ashley", subTitle: "Bank Transfer", icon: "AS", isIcon: false },
        { title: "Kwasi", subTitle: "Cash Pick Up", icon: "KW", isIcon: false },
        { title: "Add", isIcon: true }
    ];

    // handle navigation
    const handleNavigate = () => {
        navigation.navigate(SCREENS.BENEFICIARY_CARD_DETAIL)
    };



    const allBeneficiaries = [
        {
            title: "Ernie Hudson",
            subTitle: "416 652 978 8439",
            others: "Zenith Bank, Nigeria",
            image: side_line,
        },
        {

            title: "Ashley Farmer",
            subTitle: "416 652 978 8439",
            others: "Zenith Bank, Nigeria",
            image: side_line,
        },
        {
            title: "Phylicia Rashad",
            subTitle: "416 652 978 8439",
            others: "Zenith Bank, Nigeria",
            image: side_line2,
        },
        {
            title: "Cedric the Entertainer",
            subTitle: "416 652 978 8439",
            others: "Zenith Bank, Nigeria",
            image: side_line,
        },
    ];

    const renderBottom = () => {
        const tabs = [
            { icon: home_selected, name: "Home" },
            { icon: profile_icon, name: "Profile" },
            { icon: help_icon, name: "Help" },
        ];
        return (
            <View style={{
                height: Metrics.screenHeight * 0.1,
                width: Metrics.screenWidth,
                backgroundColor: Colors.white,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: Metrics.screenWidth * 0.1,
                marginTop: "auto",
                borderTopLeftRadius: Metrics.ratio(10),
                borderTopRightRadius: Metrics.ratio(10),
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.14,
                shadowRadius: 1.27,
                elevation: 3,
            }}>
                {tabs.map((item) => (
                    <View style={{ alignItems: "center", }}>
                        <Image
                            style={{
                                // width: Metrics.ratio(10),
                                // height: Metrics.ratio(10),
                            }}
                            resizeMethod='auto'
                            resizeMode='contain'
                            source={item.icon}
                        />
                        <Text style={{
                            fontFamily: Fonts.type.RobotoRegular,
                            fontSize: Fonts.size.thirteen,
                            color: Colors.mantle_grey
                        }}>{item.name}</Text>
                    </View>
                ))}
            </View>
        )
    };


    return (
        <View style={styles.container}>
            <CustomHeader heading="Beneficiaries" rightImage={back_arrow} />
            <Text style={styles.favorites}>Favorites</Text>
            <FlatList
                contentContainerStyle={{
                    flex: 1,
                    height: Metrics.screenHeight * 0.26,
                    justifyContent: "center",
                }}
                horizontal
                data={favBenificiaries}
                renderItem={({ item }) =>
                    <FavoriteBeneficiaries
                        title={item?.title}
                        subTitle={item?.subTitle}
                        icon={item?.icon}
                        isIcon={item?.isIcon} />
                }
            />

            <Text style={styles.subHeading}>ALL</Text>

            <FlatList
                data={allBeneficiaries}
                renderItem={({ item }) => {
                    return (
                        <AllBeneficiaries
                            title={item.title}
                            subTitle={item.subTitle}
                            others={item.others}
                            image={item.image}
                            handleNavigate={handleNavigate}
                        />
                    )
                }}
            />
            {renderBottom()}
        </View>
    );
}


Beneficiaries.propTypes = {
    navigation: PropTypes.shape({
        replace: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
        dispatch: PropTypes.bool
    }).isRequired
};

export default Beneficiaries;

