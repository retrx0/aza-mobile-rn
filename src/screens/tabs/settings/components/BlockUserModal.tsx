import Modal from 'react-native-modal'
import { CommonScreenProps } from '../../../../common/navigation/types'
import { hp } from '../../../../common/util/LayoutUtil'
import Button from '../../../../components/buttons/Button'
import ButtonWithUnderline from '../../../../components/buttons/ButtonWithUnderline'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import useColorScheme from '../../../../hooks/useColorScheme'

interface IProps {
  toggleModal: () => void
  isModalVisible: boolean
  user: string
}

export default function BlockUserModal({
  toggleModal,
  isModalVisible,
  navigation,
  user,
}: CommonScreenProps<'BlockNewUser'> & IProps) {
  const colorScheme = useColorScheme()
  return (
    <Modal isVisible={isModalVisible}>
      <View
        style={{
          backgroundColor: Colors[colorScheme].backgroundSecondary,
          borderRadius: 20,
          paddingHorizontal: 25,
          paddingBottom: 20,
          paddingTop: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: 'Euclid-Circular-A-Semi-Bold',
            fontSize: 16,
          }}
        >
          Block User
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 14,
            marginVertical: 15,
            textAlign: 'center',
          }}
        >
          The user{' '}
          <Text
            style={{
              fontFamily: 'Euclid-Circular-A-Semi-Bold',
              fontSize: 15,
            }}
          >
            {user}
          </Text>{' '}
          will be blocked. Do you confirm?
        </Text>
        <Button
          title="Confirm"
          onPressButton={() => {
            toggleModal()
            navigation.navigate('StatusScreen', {
              statusIcon: 'Success',
              status: 'Successful',
              statusMessage: `The user ${user} has been successfully blocked.`,
            })
          }}
          styleText={{
            color: Colors[colorScheme].buttonText,
            fontFamily: 'Euclid-Circular-A-Medium',
            fontSize: 14,
          }}
          style={{
            marginTop: hp(40),
            backgroundColor: Colors[colorScheme].button,
          }}
        />
        <ButtonWithUnderline
          color="#FF361A"
          title="Cancel"
          onPressButton={toggleModal}
        />
      </View>
    </Modal>
  )
}
