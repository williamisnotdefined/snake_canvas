import React from 'react';

import { Canvas } from './styles';
import useCanvas from '../hooks/useCanvas';

import draw from '../game';

const SnakeBoard = () => {
    const { canvasRef } = useCanvas(draw, { context: '2d' });
    return <Canvas ref={canvasRef} />;
};

export default SnakeBoard;
