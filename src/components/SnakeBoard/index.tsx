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
    console.log(width, height);

    return (
        <Canvas ref={canvasRef} width={width} height={height}>
            Unfortunally your navigator doesn't support this Game.
        </Canvas>
    );
};

export default SnakeBoard;
