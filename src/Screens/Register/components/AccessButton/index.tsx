import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps;

export function AccessButton({ ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} {...rest}>
      <Text style={styles.title}>Acessar</Text>
    </TouchableOpacity>
  );
}
