import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as EmotionProvider } from '@emotion/react';
import TemaGlobal from './TemaGlobal';

const ThemeProvider = ({ children }) => {
    return (
        <EmotionProvider theme={TemaGlobal}>
            <PaperProvider theme={TemaGlobal}>
                {children}
            </PaperProvider>
        </EmotionProvider>
    );
}

export default ThemeProvider;