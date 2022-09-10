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

const NewPasswordScreen = ({
  navigation,
}: CommonScreenProps<'NewPassword'>) => {
  const colorScheme = useColorScheme()
  const [newPassword, setNewPassword] = useState('')

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
          New Password
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
        Please enter your new password
      </Text>
      <View style={{ marginBottom: 100, marginTop: 80, marginLeft: -20 }}>
        <SegmentedInput
          value={newPassword}
          secureInput
          headerText="Password"
          onValueChanged={(pass) => setNewPassword(pass)}
        />
      </View>
      <Button
        title="Continue"
        onPressButton={() =>
          navigation.navigate('StatusScreen', {
            statusIcon: 'Success',
            status: 'Successful',
            statusMessage: 'We have successfully updated your password',
            navigateTo: 'Settings'
          })
        }
        styleText={{
          color: Colors[colorScheme].buttonText,
          fontFamily: 'Euclid-Circular-A-Medium',
          fontSize: 14,
        }}
        style={{
          width: '100%',
          backgroundColor: Colors[colorScheme].button,
        }}
      />
    </View>
  )
}

export default NewPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
