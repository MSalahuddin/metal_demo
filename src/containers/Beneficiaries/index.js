import React from 'react';
import { Image, Text, View, StyleSheet, FlatList } from 'react-native';

import { Colors, Metrics, Fonts } from '../../theme';
import { Back_icon, side_line, add_favorites, next_icon, side_line2 } from '../../assets/images';
import styles from './styles';


const FavoriteBeneficiaries = ({ title, subTitle, icon, isIcon }) => {
    return (
        <View style={{
            width: Metrics.ratio(100),
            height: Metrics.ratio(130),
            backgroundColor: Colors.white,
            borderRadius: Metrics.ratio(10),
            alignItems: 'center',
            marginRight: Metrics.ratio(9),
            elevation: 3,
        }}>
            <View style={{
                width: Metrics.ratio(60),
                height: Metrics.ratio(60),
                backgroundColor: isIcon ? Colors.light_blue : Colors.primaryBtn,
                borderRadius: Metrics.ratio(30),
                marginTop: Metrics.ratio(5),
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {isIcon ? <Image source={add_favorites} /> : <Text style={{ fontFamily: Fonts.type.RobotoRegular, fontSize: Fonts.size.eighteen, color: Colors.white, }}>{icon}</Text>}
            </View>

            <Text style={{
                marginVertical: Metrics.ratio(8),
                fontFamily: Fonts.type.RobotoMedium,
            }}>{title}</Text>

            <Text style={{
                fontFamily: Fonts.type.RobotoRegular,
                fontSize: Fonts.size.thirteen,
            }}>{subTitle}</Text>
        </View>
    )
};

const AllBeneficiaries = ({ image, title, subTitle, others }) => {
    return (
        <View style={{
            width: Metrics.ratio("100%"),
            height: Metrics.ratio(70),
            backgroundColor: Colors.white,
            alignItems: 'center',
        }}>
            <Image
                source={image}
                style={{
                    position: 'absolute',
                    left: Metrics.ratio(15),
                    top: Metrics.ratio(10),
                }} />

            <View style={{
                position: 'absolute',
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
                    fontSize: Fonts.size.twelve,
                }}>{others}</Text>
            </View>
            <Image
                source={next_icon}
                style={{
                    position: 'absolute',
                    right: Metrics.ratio(20),
                    top: Metrics.ratio(25)
                }} />

        </View>
    )
};

const Beneficiaries = () => {
    const favBenificiaries = [
        { title: "Ashley", subTitle: "Bank Transfer", icon: "AS", isIcon: false },
        { title: "Kwasi", subTitle: "Cash Pick Up", icon: "KW", isIcon: false },
        { title: "Add", isIcon: true }
    ];

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
    ]


    return (
        <View style={styles.container}>
            <View style={styles.beneficiariesContainer}>
                <Text style={styles.headingText}>Beneficiaries</Text>
                <Image source={Back_icon}></Image>
            </View>
            <Text style={styles.favorites}>Favorites</Text>
            <FlatList
                contentContainerStyle={{ flex: 1, height: Metrics.screenHeight * 0.25, justifyContent: "center" }}
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
                        />
                    )
                }}
            />
        </View>
    );
}

export default Beneficiaries;

