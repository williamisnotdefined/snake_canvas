import React from 'react';

import { Canvas } from './styles';
import useSnakeCanvas from '../hooks/useSnakeCanvas';

const SnakeBoard = () => {
    const { canvasRef } = useSnakeCanvas();
    return <Canvas ref={canvasRef} />;
};

export default SnakeBoard;
