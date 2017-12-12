import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#58s687F'
    },

    title: {
        flex: 2,
    },

    txtTitle: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline',
    },

    btns: {
        flex: 8,
        padding: 20,
    },

    btnsTexto: {
        fontSize: 30,
        color: '#FFFFFF'
    },

    btnPedido: {
        flex: 1,
        backgroundColor: '#1254FF',
        alignSelf: 'stretch',
        height: 44,
        borderRadius: 3,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnChapa: {
        flex: 1,
        backgroundColor: '#29417F',
        alignSelf: 'stretch',
        height: 44,
        borderRadius: 3,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnCozinha: {
        flex: 1,
        backgroundColor: '#0E43CC',
        alignSelf: 'stretch',
        height: 44,
        borderRadius: 3,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },              
});

export default styles;