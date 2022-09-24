import CommonStyles from '../../../../common/styles/CommonStyles'
import Divider from '../../../../components/divider/Divider'
import CustomSwitch from '../../../../components/switch/CustomSwitch'
import { Text, View } from '../../../../components/Themed'
import Colors from '../../../../constants/Colors'

interface ISwitch {
    text: string
    isEnabled: boolean
    setIsEnabled: (enabled: boolean) => void;
}

const SettingsSwitch = ({ text, isEnabled, setIsEnabled }: ISwitch) => {

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
        <CustomSwitch isEnabled={isEnabled} setIsEnabled={setIsEnabled}/>
      </View>
      <Divider />
    </>
  )
}

export default SettingsSwitch
