import React from "react";
import {View, Text, Image} from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles";

const CustomHeader = (props) => {
    let {
       heading,
       rightImage
      } = props;
    return(
     <View style = {styles.container}>
         <Text style = {styles.leftText}>{heading}</Text>
         <Image source = {rightImage}/>
     </View>
    )
 }


 CustomHeader.defaultProps = {
   heading: undefined,
   rightImage: undefined
  };
  
  CustomHeader.propTypes = {
    heading: PropTypes.string,
    rightImage: PropTypes.string
  };
  
  export default CustomHeader;