import { StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import useColorScheme from '../../../../hooks/useColorScheme'
import CommonStyles from '../../../../common/styles/CommonStyles'
import { UndrawCancelIcon } from '../../../../../assets/svg'
import Button from '../../../../components/buttons/Button'
import ButtonWithUnderline from '../../../../components/buttons/ButtonWithUnderline'
import SpacerWrapper from '../../../../common/util/SpacerWrapper'

const BlockUsersScreen = ({ navigation }: CommonScreenProps<'BlockUsers'>) => {
  const colorScheme = useColorScheme()

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
          Block Users
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
    <SpacerWrapper>
      <View style={[styles.container, { justifyContent: 'space-between' }]}>
        <View>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{ fontSize: 14, fontFamily: 'Euclid-Circular-A-Medium' }}
          >
            Blocked users won't be able to send you money, request money from
            you or split payments with you.
          </Text>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: 14,
              marginTop: hp(30),
            }}
          >
            You can unblock these users anytime
          </Text>
        </View>
        <View style={[CommonStyles.col]}>
          <UndrawCancelIcon
            color={colorScheme === 'dark' ? '#2AD168' : '#000000'}
            size={30}
          />
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: 16,
              fontFamily: 'Euclid-Circular-A-Semi-Bold',
              marginTop: 30,
            }}
          >
            You have not blocked anyone
          </Text>
        </View>
        <View style={[CommonStyles.col]}>
          <Button
            title="Block New User"
            onPressButton={() => navigation.navigate('BlockNewUser')}
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: 'Euclid-Circular-A-Medium',
              fontSize: 14,
            }}
            style={{
              marginTop: 10,
              backgroundColor: Colors[colorScheme].button,
            }}
          />
          <ButtonWithUnderline
            title="Cancel"
            color="#FF361A"
            onPressButton={() => navigation.goBack()}
          />
        </View>
      </View>
    </SpacerWrapper>
  )
}

export default BlockUsersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
