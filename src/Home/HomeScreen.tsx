import * as React from "react";
import {View, StyleSheet, Text, ViewStyle} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle
});

class HomeScreen extends React.Component {
    render() {
        return <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    }
}

export default HomeScreen;