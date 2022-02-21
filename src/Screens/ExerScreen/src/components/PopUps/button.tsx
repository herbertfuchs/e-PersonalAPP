import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from '../../../../../global/styles/theme';

export type ButtonProps = {
  title: string;
  onPress: () => void;
};
export const OpenExerc = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, styles.shadowProp]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.temaColor,
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 15,
    width: "97%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    color: "black",
    fontWeight: "700",
    fontSize: 18,
  },
});