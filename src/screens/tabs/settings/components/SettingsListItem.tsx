import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ChevronRightIcon } from '../../../../../assets/svg'
import CommonStyles from '../../../../common/styles/CommonStyles'
import { hp } from '../../../../common/util/LayoutUtil'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import useColorScheme from '../../../../hooks/useColorScheme'

interface SettingsListItemsProps {
  name: string
  icon?: JSX.Element
  detail?: string
  handleNavigation: () => void
}

const SettingsListItem = ({
  icon,
  detail,
  name,
  handleNavigation,
}: SettingsListItemsProps) => {
  const colorScheme = useColorScheme()
  return (
    <>
      <TouchableOpacity
        onPress={handleNavigation}
        style={[CommonStyles.col, { alignSelf: 'stretch' }]}
      >
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
            style={[
              CommonStyles.col,
              { marginRight: 'auto', marginLeft: icon ? 20 : 0 },
            ]}
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
            {detail && (
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.secondaryText}
                style={{ fontSize: 12, marginTop: hp(4) }}
              >
                {detail}
              </Text>
            )}
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
