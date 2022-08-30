import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ChevronRightIcon } from '../../../../../assets/svg'
import CommonStyles from '../../../../common/styles/CommonStyles'
import { hp } from '../../../../common/util/LayoutUtil'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import useColorScheme from '../../../../hooks/useColorScheme'

const SettingsListItem = ({
  icon,
  detail,
  name,
}: {
  name: string
  detail: string
  icon: JSX.Element
}) => {
  const colorScheme = useColorScheme()
  return (
    <>
      <TouchableOpacity style={[CommonStyles.col, { alignSelf: 'stretch' }]}>
        <View
          style={[
            CommonStyles.row,
            {
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              marginVertical: hp(20),
            },
          ]}
        >
          <View>{icon}</View>
          <View
            style={[CommonStyles.col, { marginRight: 'auto', marginLeft: 20 }]}
          >
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontFamily: 'Euclid-Circular-A-Medium',
                fontSize: 14,
              }}
            >
              {name}
            </Text>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{ fontSize: 12, marginTop: hp(4) }}
            >
              {detail}
            </Text>
          </View>
          <ChevronRightIcon color="#2A9E17" size={20} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: 'transparent',
          borderBottomWidth: 0.6,
          borderBottomColor: Colors[colorScheme].separator,
        }}
      />
    </>
  )
}

export default SettingsListItem
