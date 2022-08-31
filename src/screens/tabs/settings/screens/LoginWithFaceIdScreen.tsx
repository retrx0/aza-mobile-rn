import { StyleSheet, Switch } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import useColorScheme from '../../../../hooks/useColorScheme'
import CommonStyles from '../../../../common/styles/CommonStyles'

const LoginWithFaceIdScreen = ({ navigation }: CommonScreenProps<'FaceId'>) => {
  const [isLoginWithFaceId, setLoginWithFaceId] = useState(false)
  const [isConfirmTransactionWithFaceId, setConfirmTransactionWithFaceId] = useState(false)

  const colorScheme = useColorScheme()

  const toggleLoginWithFaceId = () => setLoginWithFaceId(!isLoginWithFaceId)
  const toggleConfirmTransactionWithFaceId = () => setConfirmTransactionWithFaceId(!isConfirmTransactionWithFaceId)
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
            Login with Face ID
          </Text>
          <Switch
            trackColor={{ false: switchColor, true: switchOnColor }}
            thumbColor={isLoginWithFaceId ? 'white' : 'grey'}
            ios_backgroundColor={switchColor}
            onValueChange={toggleLoginWithFaceId}
            value={isLoginWithFaceId}
          />
        </View>
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
            Confirm transactions with Face ID
          </Text>
          <Switch
            trackColor={{ false: switchColor, true: switchOnColor }}
            thumbColor={isConfirmTransactionWithFaceId ? 'white' : 'grey'}
            ios_backgroundColor={switchColor}
            onValueChange={toggleConfirmTransactionWithFaceId}
            value={isConfirmTransactionWithFaceId}
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

export default LoginWithFaceIdScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
