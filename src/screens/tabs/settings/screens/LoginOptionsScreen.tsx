import { StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import ButtonLg from '../../../../components/buttons/ButtonLg'
import SpacerWrapper from '../../../../common/util/SpacerWrapper'

const LoginOptionsScreen = ({
  navigation,
}: CommonScreenProps<'LoginOptions'>) => {
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
          Login Options
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerLeft: () => (
        <View style={{ marginLeft: -25 }}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
      ),
    })
  }, [])

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{ fontSize: 14, fontFamily: 'Euclid-Circular-A-Medium' }}
          >
            Login quickly by connecting your Aza account to your social media
            account.
          </Text>
        </View>
        <View>
          <ButtonLg
            iconName="apple"
            title="Connect with Apple"
            color={Colors.general.apple}
            onPress={() => console.log('connecting with apple...')}
            alt={false}
          />
          <ButtonLg
            iconName={'facebook'}
            title="Connect with Facebook"
            color={Colors.general.facebook}
            onPress={() => console.log('connecting with facebook...')}
            alt={false}
          />
          <ButtonLg
            iconName={'google'}
            title="Connect with Google"
            color={Colors.general.google}
            onPress={() => console.log('connecting with google...')}
            alt={false}
          />
        </View>
      </View>
    </SpacerWrapper>
  )
}

export default LoginOptionsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
