import { StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import Divider from '../../../../components/divider/Divider'
import SettingsSwitch from '../components/SettingsSwitch'

const SplitAndMoneyRequestsScreen = ({
  navigation,
}: CommonScreenProps<'SplitAndMoneyRequests'>) => {
  const [isEnabled, setIsEnabled] = useState(false)

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
          Split and Money Requests
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
      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.mainText}
        style={{ fontSize: 14, fontFamily: 'Euclid-Circular-A-Medium' }}
      >
        You can disable this setting to reject all split and money requests from
        other users.
      </Text>
      <View style={{ marginTop: hp(50) }}>
        <Divider />
        <SettingsSwitch
          text={'Split and Money Requests'}
          isEnabled={isEnabled}
          setIsEnabled={setIsEnabled}
        />
      </View>
    </View>
  )
}

export default SplitAndMoneyRequestsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
