import { View,StyleSheet,Text } from "react-native";

function GameOverScreen() {
    return (<View style={styles.container}>
        <Text>Game is Over</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

export default GameOverScreen;