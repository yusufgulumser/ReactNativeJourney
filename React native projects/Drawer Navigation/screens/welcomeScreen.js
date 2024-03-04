import { StyleSheet, View, Text } from "react-native";

export default WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Welcome</Text>
            <Text style={styles.innerText}>How are you doing</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333"
    },
    headerText: {
        color: "white",
        fontSize: 40
    },
    innerText: {
        color: "gray",
        fontSize: 30
    }
});
