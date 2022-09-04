import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import useColorScheme from '../../../../hooks/useColorScheme'
import CommonStyles from '../../../../common/styles/CommonStyles'
import { CheckIcon } from '../../../../../assets/svg'
import Divider from '../../../../components/divider/Divider'

const AppLanguageScreen = ({
  navigation,
}: CommonScreenProps<'AppLanguage'>) => {
  const colorScheme = useColorScheme()

  const [selectedLanguage, setSelectedLanguage] = useState('English')

  const languages = [
    {
      icon: (
        <Image
          style={{ width: 36, height: 36, borderRadius: 50 }}
          source={require('../../../../../assets/images/icons/BritishFlag.png')}
        />
      ),
      name: 'English',
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
          App Language
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
    <View style={styles.container}>
      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.mainText}
        style={{ fontSize: 14, fontFamily: 'Euclid-Circular-A-Medium' }}
      >
        You can change the app language
      </Text>
      <View style={{ marginTop: hp(30) }}>
        <Divider />
        {languages.map(({ icon, name }, i) => (
          <View key={i}>
            <TouchableOpacity
              onPress={() => setSelectedLanguage(name)}
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
              {selectedLanguage === name && (
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

export default AppLanguageScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
