import { View, Text } from 'react-native'
import React from 'react'
import SettingsListItem from './SettingsListItem'
import Colors from '../../../../constants/Colors'
import useColorScheme from '../../../../hooks/useColorScheme'

import { hp } from '../../../../common/util/LayoutUtil'
import { FaceIdIcon, HeartSlashIcon, MoonIcon, NotificationSettingsIcon } from '../../../../../assets/svg'

export default function ApplicationSettings() {
  const colorScheme = useColorScheme()
  const applicationSettings = [
    {
      icon: <MoonIcon size={36} color={Colors[colorScheme].mainText} />,
      name: 'Appearance',
      detail: 'Change appearance as light/dark/system',
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
    },
    {
      icon: <FaceIdIcon size={36} color={Colors[colorScheme].mainText} />,
      name: 'Face ID',
      detail: 'Login and confrim transactions with Face ID',
    },
    {
      icon: <HeartSlashIcon size={36} color={Colors[colorScheme].mainText} />,
      name: 'Close Aza account',
      detail: 'You can close your Aza account',
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

      {applicationSettings.map(({ icon, detail, name }, i) => (
        <SettingsListItem detail={detail} icon={icon} name={name} key={i} />
      ))}
    </View>
  )
}
