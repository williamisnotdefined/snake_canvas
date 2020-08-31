import React from 'react';

import { Canvas } from './styles';
import useCanvas from '../hooks/useCanvas';

import draw from '../game';

const SnakeBoard = () => {
    const { canvasRef } = useCanvas(draw);

    return (
        <Canvas ref={canvasRef} width={500} height={500}>
            Unfortunally your navigator doesn't support this Game.
        </Canvas>
    );
};

export default SnakeBoard;
