import { StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import Divider from '../../../../components/divider/Divider'
import SettingsSwitch from '../components/SettingsSwitch'

const LoginWithFaceIdScreen = ({ navigation }: CommonScreenProps<'FaceId'>) => {
  const [isLoginWithFaceId, setLoginWithFaceId] = useState(false)
  const [
    isConfirmTransactionWithFaceId,
    setConfirmTransactionWithFaceId,
  ] = useState(false)

  const toggleLoginWithFaceId = () => setLoginWithFaceId(!isLoginWithFaceId)
  const toggleConfirmTransactionWithFaceId = () =>
    setConfirmTransactionWithFaceId(!isConfirmTransactionWithFaceId)

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
          Login with Face ID
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
          You can access your account without entering a password by signing in
          with Face ID
        </Text>
      </View>
      <View style={{ marginTop: hp(100) }}>
        <Divider />
        <SettingsSwitch
          text={'Login with Face ID'}
          isEnabled={isLoginWithFaceId}
          setIsEnabled={toggleLoginWithFaceId}
        />
        <SettingsSwitch
          text={'Confirm transactions with Face ID'}
          isEnabled={isConfirmTransactionWithFaceId}
          setIsEnabled={toggleConfirmTransactionWithFaceId}
        />
      </View>
    </View>
  )
}

export default LoginWithFaceIdScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
