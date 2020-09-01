import React from 'react';

import useCanvas from '@hooks/useCanvas';
import useWindowSize from '@hooks/useWindowSize';

import draw from '@game';

import { Canvas } from './styles';

const SnakeBoard = () => {
    /*
    GlobalStyle
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    */
    const { canvasRef } = useCanvas(draw);
    const { width, height } = useWindowSize();

    const fixedWidth = Math.floor((width - 100) / 10) * 10;
    const fixedHeight = Math.floor((height - 100) / 10) * 10;

    return (
        <Canvas ref={canvasRef} width={fixedWidth} height={fixedHeight}>
            Unfortunally your navigator doesn't support this Game.
        </Canvas>
    );
};

export default SnakeBoard;
