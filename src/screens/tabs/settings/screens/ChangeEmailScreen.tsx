import { StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import Button from '../../../../components/buttons/Button'
import useColorScheme from '../../../../hooks/useColorScheme'
import BoxTextInput from '../../../../components/input/BoxTextInput'

const ChangeEmailScreen = ({
  navigation,
}: CommonScreenProps<'ChangeEmail'>) => {
  const colorScheme = useColorScheme()
  const [currentEmail, _] = useState('chiazo@examplemail.com')
  const [newEmail, setNewEmail] = useState('')

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
          New Email
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
        Change your email
      </Text>
      <View style={{ marginBottom: 10, marginTop: 10 }}>
        <BoxTextInput
          placeHolder="Current Email"
          required={false}
          value={currentEmail}
          onChange={() => {}}
        />
        <BoxTextInput
          placeHolder="New Email"
          required={false}
          value={newEmail}
          onChange={(e) => setNewEmail(e.nativeEvent.text)}
        />
      </View>
      <Button
        title="Continue"
        onPressButton={() => navigation.getParent()?.navigate('Settings')}
        styleText={{
          color: Colors[colorScheme].buttonText,
          fontFamily: 'Euclid-Circular-A-Medium',
          fontSize: 14,
        }}
        style={{
          width: '100%',
          marginTop: 10,
          backgroundColor: Colors[colorScheme].button,
        }}
      />
    </View>
  )
}

export default ChangeEmailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
