import { View, Text } from 'react-native'
import React from 'react'
import SettingsListItem from './SettingsListItem'
import Colors from '../../../../constants/Colors'
import useColorScheme from '../../../../hooks/useColorScheme'
import {
  ChangeEmailIcon,
  ChangePasswordIcon,
  ChangePhoneNumberIcon,
  LoginOptionsIcon,
  PrivacySettingsIcon,
} from '../../../../../assets/svg'
import { hp } from '../../../../common/util/LayoutUtil'

export default function AccountSettings() {
  const colorScheme = useColorScheme()

  const accountSettings = [
    {
      icon: (
        <ChangePasswordIcon size={36} color={Colors[colorScheme].mainText} />
      ),
      name: 'Change Password',
      detail: 'Change your Aza account password',
    },
    {
      icon: (
        <ChangePhoneNumberIcon size={36} color={Colors[colorScheme].mainText} />
      ),
      name: 'Change Mobile Phone Number',
      detail: 'Change your mobile number',
    },
    {
      icon: <ChangeEmailIcon size={36} color={Colors[colorScheme].mainText} />,
      name: 'Change Email Address',
      detail: 'Change your email address',
    },
    {
      icon: (
        <PrivacySettingsIcon size={36} color={Colors[colorScheme].mainText} />
      ),
      name: 'Privacy Settings',
      detail: 'Change your privacy settings',
    },
    {
      icon: <LoginOptionsIcon size={36} color={Colors[colorScheme].mainText} />,
      name: 'Login Options',
      detail: 'Connect your social media accounts',
    },
  ]

  return (
    <View>
      <View>
        <Text
          style={{
            color: Colors[colorScheme].secondaryText,
            fontSize: 14,
          }}
        >
          Account Settings
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

      {accountSettings.map(({ icon, detail, name }, i) => (
        <SettingsListItem detail={detail} icon={icon} name={name} key={i} />
      ))}
    </View>
  )
}
