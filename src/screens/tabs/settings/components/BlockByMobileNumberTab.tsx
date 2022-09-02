import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../../constants/Colors'
import { hp } from '../../../../common/util/LayoutUtil'
import useColorScheme from '../../../../hooks/useColorScheme'
import { Text, View } from '../../../../components/Themed'
import ContactListItem from '../../../../components/ListItem/ContactListItem'

interface IProps {
  toggleModal: () => void
}

const BlockByMobileNumberTab = ({ toggleModal = () => {} }: IProps) => {
  const colorScheme = useColorScheme()

  return (
    <View style={[styles.container, { justifyContent: 'space-between' }]}>
      <View>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{ fontSize: 14, fontFamily: 'Euclid-Circular-A-Medium' }}
        >
          Blocked users won't be able to send you money, request money from you
          or split payments with you.
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
        <View style={{ marginTop: hp(50) }}>
          <Text
            style={{
              color: Colors[colorScheme].secondaryText,
              fontFamily: 'Euclid-Circular-A-Medium',
              fontSize: 16,
            }}
          >
            Mobile Number
          </Text>
          <View
            style={{
              backgroundColor: 'transparent',
              marginTop: hp(10),
              borderBottomWidth: 0.6,
              borderBottomColor: Colors[colorScheme].separator,
            }}
          />
        </View>
        <Text
          style={{
            color: Colors[colorScheme].secondaryText,
            marginTop: hp(40),
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          Your Aza Contacts
        </Text>
        <ScrollView
          contentContainerStyle={{ paddingBottom: hp(250) }}
          showsVerticalScrollIndicator={false}
        >
          {Array(20)
            .fill('')
            .map((_, i) => (
              <TouchableOpacity key={i} onPress={toggleModal}>
                <ContactListItem  />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  )
}
export default BlockByMobileNumberTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
})
