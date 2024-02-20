import { useSelector } from "react-redux";
import { RootState } from "../reducers";

const useColorByMode = (darkModeColor: string, lightModeColor: string) => {
  const isDarkMode = useSelector(
    (state: RootState) => state.sidebar.isDarkMode
  );

  return isDarkMode ? darkModeColor : lightModeColor;
};

export default useColorByMode;
