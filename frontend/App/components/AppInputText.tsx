import { View, Text, TextInput } from "react-native";
import type { KeyboardType } from "react-native";

import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

interface ITextInputProps {
  Classes: string;
  placeHolder: string;
  keyBoardType: KeyboardType;
}

const customFonts = {
  vzr: require("../../assets/fonts/Vazirmatn-Bold.ttf"),
  vzr_bold: require("../../assets/fonts/Vazirmatn-Bold.ttf"),
  vzr_semiBold: require("../../assets/fonts/Vazirmatn-SemiBold.ttf"),
};

const AppTextInput = ({
  Classes,
  placeHolder,
  keyBoardType,
}: ITextInputProps) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(customFonts);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsFontLoaded(true);
      }
    }
    prepare();
  }, []);
  return (
    <TextInput
      className={Classes}
      textAlign="right"
      placeholder={placeHolder}
      keyboardType={keyBoardType}
    />
  );
};

export default AppTextInput;
