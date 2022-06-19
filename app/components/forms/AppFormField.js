import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ErrorMessage from "./ErrorMessage";
import AppText from "../AppText";
import colors from "../../config/colors";
export default function AppFormField({ title, name, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <View style={styles.InputContainer}>
      <AppText size={4} style={{ color: colors.black }}>
        {title}
      </AppText>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage message={errors[name]} visible={touched[name]} />
    </View>
  );
}
const styles = StyleSheet.create({
  InputContainer: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
});
