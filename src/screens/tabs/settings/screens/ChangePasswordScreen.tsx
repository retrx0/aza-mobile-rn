import { StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import SegmentedInput from '../../../../components/input/SegmentedInput'
import Button from '../../../../components/buttons/Button'
import useColorScheme from '../../../../hooks/useColorScheme'

const ChangePasswordScreen = ({
  navigation,
}: CommonScreenProps<'ChangePassword'>) => {
  const colorScheme = useColorScheme();
  const [password, setPassword] = useState('')

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
          Current Password
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
        Please enter your current password
      </Text>
      <View style={{marginBottom: 100, marginTop: 100}}>

      <SegmentedInput value={password} secureInput headerText="Password" onValueChanged={(pass) => setPassword(pass)} />
      </View>
      <Button
            title="Continue"
            onPressButton={() => navigation.navigate('NewPassword')}
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              backgroundColor: Colors[colorScheme].button,
            }}
          />
    </View>
  )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
