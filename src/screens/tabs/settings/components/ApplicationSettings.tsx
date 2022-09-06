import { View, Text } from 'react-native'
import React from 'react'
import SettingsListItem from './SettingsListItem'
import Colors from '../../../../constants/Colors'
import useColorScheme from '../../../../hooks/useColorScheme'

import { hp } from '../../../../common/util/LayoutUtil'
import {
  FaceIdIcon,
  HeartSlashIcon,
  MoonIcon,
  NotificationSettingsIcon,
  AppLanguageIcon,
} from '../../../../../assets/svg'
import { RootTabScreenProps } from '../../../../../types'

export default function ApplicationSettings({
  navigation,
}: RootTabScreenProps<'Settings'>) {
  const colorScheme = useColorScheme()
  const applicationSettings = [
    {
      icon: <MoonIcon size={36} color={Colors[colorScheme].mainText} />,
      name: 'Appearance',
      detail: 'Change appearance as light/dark/system',
      disabled: false,
      disabledIcon: <MoonIcon size={36} color={Colors[colorScheme].disabled} />,
      handleNavigation: () =>
        navigation.navigate('Common', { screen: 'Appearance' }),
    },
    {
      icon: (
        <NotificationSettingsIcon
          size={36}
          color={Colors[colorScheme].mainText}
        />
      ),
      name: 'Notification Settings',
      detail: 'Change your notification preferences',
      disabled: false,
      disabledIcon: (
        <NotificationSettingsIcon
          size={36}
          color={Colors[colorScheme].disabled}
        />
      ),
      handleNavigation: () =>
        navigation.navigate('Common', { screen: 'NotificationSettings' }),
    },
    {
      icon: <AppLanguageIcon size={36} color={Colors[colorScheme].mainText} />,
      name: 'App Language',
      detail: 'Change the app language',
      disabled: false,
      disabledIcon: (
        <AppLanguageIcon size={36} color={Colors[colorScheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate('Common', { screen: 'AppLanguage' }),
    },
    {
      icon: <FaceIdIcon size={36} color={Colors[colorScheme].mainText} />,
      name: 'Face ID',
      detail: 'Login and confrim transactions with Face ID',
      disabled: false,
      disabledIcon: (
        <FaceIdIcon size={36} color={Colors[colorScheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate('Common', { screen: 'FaceId' }),
    },
    {
      icon: <HeartSlashIcon size={36} color={Colors[colorScheme].mainText} />,
      name: 'Close Aza account',
      detail: 'You can close your Aza account',
      disabled: false,
      disabledIcon: (
        <HeartSlashIcon size={36} color={Colors[colorScheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate('Common', {
          screen: 'StatusScreen',
          params: {
            status: 'Do you want to close your Aza account?',
            statusIcon: 'Warning',
            statusMessage:
              'Are you sure you want to go back to a life without Aza?',
            cancelButton: true,
            handleContinueButtonClick: () => navigation.navigate('Settings'),
          },
        }),
    },
  ]

  return (
    <View style={{ marginTop: hp(25) }}>
      <View>
        <Text
          style={{
            color: Colors[colorScheme].secondaryText,
            fontSize: 14,
          }}
        >
          Application Settings
        </Text>
        <View
          style={{
            backgroundColor: 'transparent',
            marginTop: hp(10),
            borderBottomWidth: 0.6,
            borderBottomColor: Colors[colorScheme].separator,
          }}
        />
      </View>

      {applicationSettings.map(
        (
          { icon, detail, name, handleNavigation, disabled, disabledIcon },
          i,
        ) => (
          <SettingsListItem
            detail={detail}
            disabled={disabled}
            icon={icon}
            name={name}
            disabledIcon={disabledIcon}
            handleNavigation={handleNavigation}
            key={i}
          />
        ),
      )}
    </View>
  )
}
