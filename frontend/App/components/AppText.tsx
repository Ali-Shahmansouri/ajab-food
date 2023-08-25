import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

interface ITextProps {
  children: React.ReactNode;
  Classes: string;
}

const customFonts = {
  vzr: require("../../assets/fonts/Vazirmatn-Bold.ttf"),
  vzr_bold: require("../../assets/fonts/Vazirmatn-Bold.ttf"),
  vzr_semiBold: require("../../assets/fonts/Vazirmatn-SemiBold.ttf"),
};

const AppText = ({ children, Classes }: ITextProps) => {
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

  if (!isFontLoaded) {
    return null;
  }
  return <Text className={Classes}>{children}</Text>;
};

export default AppText;

// const styles = StyleSheet.create({
//   font: {
//     fontFamily: "vzr",
//   },
// });
