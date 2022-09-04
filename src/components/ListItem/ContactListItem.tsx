import React from 'react'
import { Image } from 'react-native'
import CommonStyles from '../../common/styles/CommonStyles'
import { hp } from '../../common/util/LayoutUtil'
import Colors from '../../constants/Colors'
import { Text, View } from '../Themed'

interface IContact {
  image: string
  name: string
  phoneNumber: string
  suffixIcon?: JSX.Element
}

const ContactListItem = ({
  name,
  phoneNumber,
  suffixIcon,
  image ,
}: IContact) => {
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
          uri: image,
        }}
      />
      <View style={[CommonStyles.col, { marginLeft: 20, marginRight: 'auto' }]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{ fontSize: 16, fontFamily: 'Euclid-Circular-A-Medium' }}
        >
          {name}
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.secondaryText}
          style={{ fontSize: 12, marginTop: 5 }}
        >
          {phoneNumber}
        </Text>
      </View>
      {suffixIcon}
    </View>
  )
}

export default ContactListItem
