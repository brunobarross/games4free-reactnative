import { TouchableOpacity, Text, StyleSheet } from "react-native"

export default function Button({ children }) {
    return (
        <TouchableOpacity style={styles.button}>
            {children}
        </TouchableOpacity>
    )
}

