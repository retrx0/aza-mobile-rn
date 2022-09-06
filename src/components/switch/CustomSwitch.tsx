import React from 'react'
import { Switch } from 'react-native'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

interface IProps {
  isEnabled: boolean
  setIsEnabled: (enabled: boolean) => void
}

const CustomSwitch = ({ isEnabled, setIsEnabled }: IProps) => {
  const colorScheme = useColorScheme()

  const switchColor = Colors[colorScheme].backgroundSecondary
  const switchOnColor = Colors[colorScheme].success
  const toggleSwitch = () => setIsEnabled(!isEnabled)

  return (
    <Switch
      trackColor={{ false: switchColor, true: switchOnColor }}
      thumbColor={isEnabled ? 'white' : 'grey'}
      ios_backgroundColor={switchColor}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

export default CustomSwitch
