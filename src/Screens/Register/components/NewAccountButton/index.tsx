import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps;

export function NewAccountButton({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Text>Criar Conta</Text>
    </TouchableOpacity>
  );
}
