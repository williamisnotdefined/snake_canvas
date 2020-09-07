import React from 'react';

import useCanvas from '@hooks/useCanvas';
import useWindowSize from '@hooks/useWindowSize';

import { draw, canvasWillUnmount, canvasDidMount } from '@game';

import { Canvas } from './styles';

const SnakeBoard: React.FC = () => {
    const canvasRef = useCanvas(draw, { canvasWillUnmount, canvasDidMount });
    const { width, height } = useWindowSize();

    const fixedWidth = Math.floor((width - 100) / 10) * 10;
    const fixedHeight = Math.floor((height - 100) / 10) * 10;

    return (
        <Canvas ref={canvasRef} data-width={fixedWidth} data-height={fixedHeight}>
            Unfortunally your navigator does not support this Game.
        </Canvas>
    );
};

export default SnakeBoard;
