//TODO: Fix types

export const getColorByMode = (
  isDarkMode: boolean,
  darkModeColor: any,
  lightModeColor: any
) => {
  if (isDarkMode) {
    return darkModeColor;
  } else {
    return lightModeColor;
  }
};
