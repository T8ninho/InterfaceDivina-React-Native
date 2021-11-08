import React from 'react';
import Rotas from './src/pages/Routes/Routes';
import ThemeProvider from './src/ui/themes/ThemeProvider';
import { StatusBar } from 'react-native';


var StatusBarColor = '#7159C1';

const App = ({ children }) => {
  return (
    <ThemeProvider>
      <StatusBar 
        backgroundColor={StatusBarColor}
        barStyle="light-content"
      />
        <Rotas />
    </ThemeProvider>
  );
};
export default App;
