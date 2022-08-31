import { StyleSheet, Switch } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import useColorScheme from '../../../../hooks/useColorScheme'
import CommonStyles from '../../../../common/styles/CommonStyles'

const NorificationSettingsScreen = ({
  navigation,
}: CommonScreenProps<'NotificationSettings'>) => {
  const [isEnabled, setIsEnabled] = useState(false)

  const colorScheme = useColorScheme()

  const toggleSwitch = () => setIsEnabled(!isEnabled)
  const switchColor = Colors[colorScheme].backgroundSecondary
  const switchOnColor = Colors[colorScheme].success

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: 'Euclid-Circular-A-Semi-Bold',
            fontSize: 16,
          }}
        >
          Notification Settings
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    })
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{ fontSize: 14, fontFamily: 'Euclid-Circular-A-Medium' }}
        >
          Do you want us to inform you about your account
        </Text>

        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 14,
            marginTop: hp(40),
          }}
        >
          You can receive notifications if you enable this setting.
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 14,
            marginTop: hp(10),
          }}
        >
          You can revoke this permission at any time.
        </Text>
      </View>
      <View style={{ marginTop: hp(50) }}>
        <View
          style={{
            borderBottomWidth: 0.6,
            borderBottomColor: Colors[colorScheme].separator,
          }}
        />
        <View
          style={[
            CommonStyles.row,
            {
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              paddingVertical: 30,
              alignItems: 'center',
            },
          ]}
        >
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{ fontSize: 14, fontFamily: 'Euclid-Circular-A-Medium' }}
          >
            Communication Permit
          </Text>
          <Switch
            trackColor={{ false: switchColor, true: switchOnColor }}
            thumbColor={isEnabled ? 'white' : 'grey'}
            ios_backgroundColor={switchColor}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 0.6,
            borderBottomColor: Colors[colorScheme].separator,
          }}
        />
      </View>
    </View>
  )
}

export default NorificationSettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
