import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Pressable
} from 'react-native';

export default function Login() {
    return (
        <SafeAreaView style={styles.loginContainer}>
            <View style={styles.loginSubContainer}>
                <View style={styles.loginTitleContainer}>
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput style={styles.textInput} placeholder="Username" />
                    <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} />
                    <Pressable style={styles.primaryButton}>
                        <Text style={styles.text}>Login</Text>
                    </Pressable>
                    <Text style={styles.linkText}>Forgotten Password?</Text>
                </View>
                <View style={styles.orContainer}>
                    <View style={styles.hr} />
                    <Text style={styles.text}>Or</Text>
                    <View style={styles.hr} />
                </View>
                <View style={styles.socialLoginContainer}>
                    {/* Buttons */}
                    <Pressable style={styles.facebookLogin}>
                        <Text style={styles.text}>Sign In With Facebook</Text>
                    </Pressable>
                    <Pressable style={styles.googleLogin}>
                        <Text style={styles.text}>Sign In With Google</Text>
                    </Pressable>
                    <Text style={styles.text}>Don't Have an Account?</Text>
                    <Text style={styles.linkText}>Sign Up Here</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

// ------------ Login Styles ------------ //
const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 35
    },
    loginContainer: {
        minHeight: '100%',
        minWidth: '100%',
        backgroundColor: '#183059',
    },
    loginSubContainer: {
        maxHeight: '90%',
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center'
    },
    loginTitleContainer: {
        minWidth: '100%',
        alignItems: 'center'
    },
    formContainer: { alignItems: 'center' },
    textInput: {
        fontSize: 18,
        backgroundColor: 'white',
        minWidth: '85%',
        marginBottom: 15,
        borderRadius: 5,
        padding: 15
    },
    primaryButton: {
        minWidth: '85%',
        backgroundColor: '#366cc9',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15
    },
    linkText: {
        color: 'white',
        textDecorationLine: 'underline',
        marginTop: 5,
    },
    text: { color: 'white', fontSize: 18 },
    orContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    hr: {
        backgroundColor: 'white',
        width: '38%',
        height: StyleSheet.hairlineWidth
    },
    socialLoginContainer: { alignItems: 'center' },
    facebookLogin: {
        minWidth: '85%',
        backgroundColor: '#366cc9',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15
    },
    googleLogin: {
        minWidth: '85%',
        backgroundColor: '#1488dd',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15
    }
});