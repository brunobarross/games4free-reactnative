import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function Tabs({ tabActive, handlelickTabs }) {
    return (
        <View style={styles.tabs}>
            <TouchableOpacity
                style={{
                    ...styles.tab,
                    borderRightWidth: 1,
                    borderRightColor: 'rgba(0,0,0,0.1)',
                }}
                onPress={() => handlelickTabs('all')}
            >
                <Text
                    style={{
                        ...styles.tabText,
                        color:
                            tabActive === 'all' ? 'rgba(39, 70, 144,1)' : 'rgba(0,0,0,1)',
                    }}
                >
                    Todos
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => handlelickTabs('games')}
            >
                <Text
                    style={{
                        ...styles.tabText,
                        color:
                            tabActive === 'games' ? 'rgba(39, 70, 144,1)' : 'rgba(0,0,0,1)',
                    }}
                >
                    Games
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...styles.tab,
                    borderLeftWidth: 1,
                    borderLeftColor: 'rgba(0,0,0,0.1)',
                }}
                onPress={() => handlelickTabs('expansoes')}
            >
                <Text
                    style={{
                        ...styles.tabText,
                        color:
                            tabActive === 'expansoes'
                                ? 'rgba(39, 70, 144,1)'
                                : 'rgba(0,0,0,1)',
                    }}
                >
                    DLC's
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        marginTop: 48
    },
    tab: {
        flex: 1,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,1)',
    },
    tabText: {
        color: 'rgba(0,0,0,1)',
        fontWeight: 'bold',
    },

});