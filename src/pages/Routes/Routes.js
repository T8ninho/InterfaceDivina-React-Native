import * as React from 'react';
import { BottomNavigation, withTheme, Text } from 'react-native-paper';

import Inicio from '../Inicio/inicio';
import Contador from '../Contador/Contador';

function Rotas(props){

  const {colors} = props.theme;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'inicio', title: 'Página Inicial', icon: 'fire' },
    { key: 'contador', title: 'Contador', icon: 'heart' },
    { key: 'terceiraTela', title: 'Terceira Tela', icon: 'cat' },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'inicio':
        return <Inicio jumpTo={jumpTo} />;
      case 'contador':
        return <Contador />;
      case 'terceiraTela':
        return <Text>Terceira Tela</Text>;
    }
  }


  return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{backgroundColor: colors.backdrop}}
      />
  );
};

export default withTheme(Rotas);