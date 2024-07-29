import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../assets/types';
import { login,logout } from '../features/users/userSlice';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home kyu Screen</Text>
            <Button title="Login" onPress={() => {
                dispatch(login());
                navigation.navigate('Login');
            }} />
            <Button title="Register" onPress={() => navigation.navigate('Register', { origin: 'RegisterName' })} />
            <Button title="Logout" onPress={() => dispatch(logout())} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;
