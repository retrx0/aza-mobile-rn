import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import useColorScheme from '../../../../hooks/useColorScheme'
import CommonStyles from '../../../../common/styles/CommonStyles'
import {
  CheckIcon,
  DarkModeIcon,
  LightModeIcon,
  SystemModeIcon,
} from '../../../../../assets/svg'
import Divider from '../../../../components/divider/Divider'

const AppearanceScreen = ({ navigation }: CommonScreenProps<'Appearance'>) => {
  const colorScheme = useColorScheme()

  const [selectedAppearance, setSelectedAppearance] = useState('Dark Mode')

  const options = [
    {
      icon: <DarkModeIcon color={Colors[colorScheme].mainText} size={16} />,
      name: 'Dark Mode',
    },
    {
      icon: <LightModeIcon color={Colors[colorScheme].mainText} size={16} />,
      name: 'Light Mode',
    },
    {
      icon: <SystemModeIcon color={Colors[colorScheme].mainText} size={0} />,
      name: 'System Mode',
    },
  ]

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
          Appearance
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
      <View style={{ marginTop: hp(10) }}>
        <Divider />
        {options.map(({ icon, name }, i) => (
          <View key={i}>
            <TouchableOpacity
              onPress={() => setSelectedAppearance(name)}
              style={[
                CommonStyles.row,
                {
                  justifyContent: 'space-between',
                  alignSelf: 'stretch',
                  paddingVertical: 20,
                },
              ]}
            >
              <View>{icon}</View>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  marginRight: 'auto',
                  marginLeft: 15,
                  fontSize: 14,
                  fontFamily: 'Euclid-Circular-A-Medium',
                }}
              >
                {name}
              </Text>
              {selectedAppearance === name && (
                <CheckIcon size={20} color={'#2A9E17'} />
              )}
            </TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 0.6,
                borderBottomColor: Colors[colorScheme].separator,
              }}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

export default AppearanceScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
