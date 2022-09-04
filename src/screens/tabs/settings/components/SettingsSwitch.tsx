import { Switch } from 'react-native'
import CommonStyles from '../../../../common/styles/CommonStyles'
import Divider from '../../../../components/divider/Divider'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'
import useColorScheme from '../../../../hooks/useColorScheme'

interface ISwitch {
    text: string
    isEnabled: boolean
    setIsEnabled: (enabled: boolean) => void;
}

const SettingsSwitch = ({ text, isEnabled, setIsEnabled }: ISwitch) => {
  const colorScheme = useColorScheme()
  const toggleSwitch = () => setIsEnabled(!isEnabled)
  const switchColor = Colors[colorScheme].backgroundSecondary
  const switchOnColor = Colors[colorScheme].success

  return (
    <>
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
          {text}
        </Text>
        <Switch
          trackColor={{ false: switchColor, true: switchOnColor }}
          thumbColor={isEnabled ? 'white' : 'grey'}
          ios_backgroundColor={switchColor}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Divider />
    </>
  )
}

export default SettingsSwitch
