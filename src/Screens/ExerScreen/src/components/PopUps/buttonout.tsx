import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from '../../../../../global/styles/theme';

export type ButtonProps = {
  title: string;
  onPress: () => void;
};
export const ButtonOut = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.temaColor,
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 25,
    width: "90%",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
});