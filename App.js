import {StatusBar} from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyButton = ({icon, onPress, size}) => (
  <TouchableOpacity onPress={onPress} style={styles.menuButton}>
    <Icon iconStyle={{marginRight: 0}} size = {size} name = {icon} style={styles.menuButtonImage}/>
  </TouchableOpacity>
);

const AppButton = ({ onPress, icon, title, backgroundColor }) => (
  <View >
    <Icon.Button
      name={icon}
      backgroundColor={backgroundColor}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </Icon.Button>
  </View>
);

export default function App() {
    return (
        <View style={{height: "100%", display: "flex"}}>
            <StatusBar  backgroundColor="#2a2a2a" animated={true}/>
            <View style={{height: 50, backgroundColor: '#2a2a2a'}}/>
            <View style={styles.menu}>
                {/*<AppButton icon="list-ul" title="Login with password" backgroundColor="#777"/>*/}
                <MyButton icon="list-ul" size={40}>
                </MyButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        backgroundColor: '#2a2a2a',
        width: "100%",
        height: 80,
        justifyContent: "center",
    },
    menuButton: {
        justifyContent: "center",
        backgroundColor: '#2a2a2a',
        width: 40,
        height: 40,
        borderRadius: 10,
        margin: 15,
    },
    menuButtonImage: {
        // backgroundColor: 'blue',
        width: "100%",
        height: "100%",
        // textAlign: "center",
    }
});
