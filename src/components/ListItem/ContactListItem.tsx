import React from 'react'
import { Image } from 'react-native'
import { AZALightningLogo } from '../../../assets/svg'
import CommonStyles from '../../common/styles/CommonStyles'
import { hp } from '../../common/util/LayoutUtil'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import { Text, View } from '../Themed'

const ContactListItem = () => {
    const colorScheme = useColorScheme()
  
    return (
      <View
              style={[
                CommonStyles.row,
                {
                  alignSelf: 'stretch',
                  justifyContent: 'space-between',
                  marginTop: hp(25),
                },
              ]}
            >
              <Image
                style={{ borderRadius: 50, width: 45, height: 45 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s',
                }}
              />
              <View
                style={[
                  CommonStyles.col,
                  { marginLeft: 20, marginRight: 'auto' },
                ]}
              >
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
              <AZALightningLogo size={25} color={Colors[colorScheme].text} />
            </View>
    )
  }

export default ContactListItem