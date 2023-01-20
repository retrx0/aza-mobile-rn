/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";
import { selectAppTheme, setAppTheme } from "../redux/slice/themeSlice";
import RootNavigator from "./RootNavigator";
import { useAppDispatch, useAppSelector } from "../redux";
import { getDeviceTheme } from "../theme";
import useCachedResources from "../hooks/useCachedResources";
import { ISettings } from "../hooks/useAsyncStorage";

const Navigation = ({
  colorScheme,
  loadedPreference,
}: {
  colorScheme: ColorSchemeName;
  loadedPreference: ISettings | undefined;
}) => {
  const _selectedTheme = useAppSelector(selectAppTheme);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (loadedPreference?.appearance)
      dispatch(
        setAppTheme({
          theme:
            loadedPreference.appearance === "dark"
              ? "dark"
              : loadedPreference.appearance === "light"
              ? "light"
              : "system",
        })
      );
  }, []);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={getDeviceTheme(_selectedTheme)}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
