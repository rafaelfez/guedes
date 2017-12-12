import { StackNavigator } from 'react-navigation';

import Chapa from './pages/chapa';
import Cozinha from './pages/cozinha';
import Pedido from './pages/pedido';
import Principal from './pages/principal';

const RootNavigator = StackNavigator({
	Chapa: {
		screen: Chapa,
		navigationOptions: {
			headerTitle: 'Chapa',
		},
	},
	Cozinha: {
		screen: Cozinha,
		navigationOptions: {
			headerTitle: 'Cozinha',
		},
	},
	Pedido: {
		screen: Pedido,
		navigationOptions: {
			headerTitle: 'Pedido',
		},
	},
	Principal: {
		screen: Principal,
		navigationOptions: {
			headerTitle: 'Inicio',
		},
	},
}, {
		initialRouteName: 'Principal',
});

export default RootNavigator;