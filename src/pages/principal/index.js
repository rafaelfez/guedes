import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Principal extends Component {
    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.txtTitle}>G U E D E S</Text>
                    <View style={styles.btns}>
                        <TouchableOpacity 
                            style={styles.btnPedido}
                            onPress={() => navigate('Pedido')}
                        >
                            <Text style={styles.btnsTexto}>Fazer Pedido</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.btnChapa}
                            onPress={() => navigate('Chapa')}
                        >
                            <Text style={styles.btnsTexto}>Chapa</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.btnCozinha}
                            onPress={() => navigate('Cozinha')}
                        >
                            <Text style={styles.btnsTexto}>Cozinha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
