import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome name="user-circle" size={80} color="black" style={styles['user']} />
                <Text style={styles.texto}>DEV Junior</Text>
                <Text style={styles.texto}>Full Stack Developer</Text>
                <View style={styles.icons}>
                    <AntDesign name="github" size={20} color="black" style={styles['github']} />
                    <FontAwesome5
                        name="linkedin"
                        size={20}
                        color="black"
                        style={styles['linkedin']}
                    />
                    <MaterialIcons name="email" size={20} color="black" style={styles['email']} />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242835',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: '#fff',
        width: '80%',
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
    },
    user: {
        marginTop: 20,
        marginBottom: 10,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        gap: 16,
    },
    github: {},
    linkedin: {},
    email: {},
});
