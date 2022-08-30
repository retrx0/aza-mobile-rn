import { ScrollView, StyleSheet } from 'react-native'
import { RootTabScreenProps } from '../../../../types'
import { View } from '../../../components/Themed'
import useColorScheme from '../../../hooks/useColorScheme'
import AccountSettings from './components/AccountSettings'
import ApplicationSettings from './components/ApplicationSettings'

const Settings = ({ navigation }: RootTabScreenProps<'Settings'>) => {
  const colorScheme = useColorScheme()

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AccountSettings />
        <ApplicationSettings />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
})

export default Settings
