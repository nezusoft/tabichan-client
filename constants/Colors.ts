/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
type inputStylesType = {
  borderColor:string,
  color:string,
  backgroundColor:string
  placeholderTextColor:string
}

type Colors = {
  accent: string,
  light: {
    text: string,
    background: string,
    tint: string,
    icon: string,
    tabIconDefault: string,
    tabIconSelected: string,
    inputStyles:inputStylesType
  },
  dark: {
    text: string,
    background: string,
    tint: string,
    icon: string,
    tabIconDefault: string,
    tabIconSelected: string,
  }
}

const tintColorLight = '#0a7ea4';
const tintColorDark = '#FFFFFF';

export const Colors:Colors = {
  accent: "#607FF9",
  light: {
    text: '#000000',
    background: '#FFFFFF',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    inputStyles: {
      borderColor:"#C8C8C8",
      color:"#727171",
      backgroundColor:"#ECECEC",
      placeholderTextColor:"#727171"
    }
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
