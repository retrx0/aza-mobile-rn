import { Image, StyleSheet, Switch } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CommonScreenProps } from '../../../../common/navigation/types'
import BackButton from '../../../../components/buttons/BackButton'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import useColorScheme from '../../../../hooks/useColorScheme'
import CommonStyles from '../../../../common/styles/CommonStyles'

const ContactsVisibilityScreen = ({
  navigation,
}: CommonScreenProps<'ContactVisibility'>) => {
  const [isEnabled, setIsEnabled] = useState(false)

  const colorScheme = useColorScheme()

  const toggleSwitch = () => setIsEnabled(!isEnabled)
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
          Contacts Visibility
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
        You can disable this setting if you want to prevent other users from
        seeing you labeled as an Aza user in their contacts.
      </Text>

      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.mainText}
        style={{
          fontSize: 14,
          fontFamily: 'Euclid-Circular-A-Medium',
          marginTop: hp(30),
        }}
      >
        In turn, Aza users in your contact won't be labeled as such.
      </Text>
      <View style={{ marginTop: hp(50) }}>
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
            Contact Visibility
          </Text>
          <Switch
            trackColor={{ false: switchColor, true: switchOnColor }}
            thumbColor={isEnabled ? 'white' : 'grey'}
            ios_backgroundColor={switchColor}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 0.6,
            borderBottomColor: Colors[colorScheme].separator,
          }}
        />

        <View style={[CommonStyles.col, { alignSelf: 'flex-start', marginTop: 30 }]}>
          <View
            style={[
              CommonStyles.row,
              { alignItems: 'flex-end', alignSelf: 'flex-start' },
            ]}
          >
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{ fontSize: 14 }}
            >
              Contacts using Aza
            </Text>
            <Text
              lightColor={'#753FF6'}
              darkColor={'#2A9E17'}
              style={{
                marginLeft: 10,
                fontSize: 12,
                fontFamily: 'Euclid-Circular-A-Light',
              }}
            >
              +18
            </Text>
          </View>
          <View
            style={[
              CommonStyles.row,
              { alignSelf: 'flex-start', marginTop: hp(25) },
            ]}
          >
            <Image
              style={{ borderRadius: 50, width: 45, height: 45 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s',
              }}
            />
            <View style={[CommonStyles.col, { marginLeft: 20 }]}>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{ fontSize: 16, fontFamily: 'Euclid-Circular-A-Medium' }}
              >
                Adewale Adeyesufu
              </Text>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.secondaryText}
                style={{ fontSize: 12, marginTop: 5 }}
              >
                8012345678
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ContactsVisibilityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
