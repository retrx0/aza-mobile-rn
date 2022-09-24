import { ScrollView, StyleSheet } from 'react-native'
import { RootTabScreenProps } from '../../../../types'
import { View } from '../../../components/Themed'
import AccountSettings from './components/AccountSettings'
import ApplicationSettings from './components/ApplicationSettings'

const Settings = ({ navigation, route }: RootTabScreenProps<'Settings'>) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AccountSettings navigation={navigation} route={route} />
        <ApplicationSettings navigation={navigation} route={route} />
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
