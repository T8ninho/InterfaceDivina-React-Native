import { DefaultTheme } from 'react-native-paper';

const TemaGlobal = {
    ...DefaultTheme,
    dark: false,
    colors: {
       ...DefaultTheme.colors,
       primary: '#a91f1f',
       accent: '#7159C1',
       background: '#008000',
       backdrop: 'rgba(107, 42, 238, .75)',
       text: '#ff4500',
       textSecondary: '#9B9B9B',
       title: '#ff4500',
       titleSecondary: '#800080',
       temaFoda: '#e8ff13'
    },
    shape: {
        borderRadius: '5px',
        },
    spacing(size = 1) {
        return size * 8 + 'px';
        },
}

export default TemaGlobal;