import { ActivityIndicator, View, StyleSheet } from 'react-native';


export default function loadingArea() {
    return (
        <View style={styles.loadingArea}>
            <ActivityIndicator size="large" color="#274690" />
        </View>
    )
}


const styles = StyleSheet.create({
    loadingArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});