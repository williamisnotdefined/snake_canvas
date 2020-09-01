import React from 'react';
import { ThemeProvider } from 'styled-components';

import SnakeBoard from '@components/SnakeBoard';

import { GlobalStyle, theme } from '@styles';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <SnakeBoard />
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default App;
