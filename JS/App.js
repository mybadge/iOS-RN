
class MyHomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
    }
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
          title="Go to Lucy's profile"
        />
      );
    }
  }
  
  const ModalStack = StackNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Profile: {
      path: 'people/:name',
      screen: MyProfileScreen,
    },
  });