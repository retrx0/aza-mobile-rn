import { Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import CommonStyles from '../../../../common/styles/CommonStyles'
import Divider from '../../../../components/divider/Divider'
import SettingsSwitch from '../components/SettingsSwitch'

const NameVisibilityScreen = ({
  navigation,
}: CommonScreenProps<'NameVisibility'>) => {
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
          Name Visibility
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
        You can disable this setting if you want your name to appear masked when
        others send or receive money from you
      </Text>
      <View style={{ marginTop: hp(80) }}>
        <Divider />
        <SettingsSwitch
          text={'Name Visibility'}
          isEnabled={isEnabled}
          setIsEnabled={setIsEnabled}
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
          <View style={[CommonStyles.col]}>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{ fontSize: 14, marginBottom: 10 }}
            >
              With whom?
            </Text>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{ fontSize: 16, fontFamily: 'Euclid-Circular-A-Medium' }}
            >
              Chiazondu Joseph
            </Text>
          </View>
          <Image
            style={{ borderRadius: 50, width: 45, height: 45 }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s',
            }}
          />
        </View>
        <Divider />
      </View>
    </View>
  )
}

export default NameVisibilityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
