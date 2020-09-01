import { PIECE } from './constants';

import handleSize from './handleSize';

/* const getIndex = (index: number, length: number): number =>
    ((index % length) + length) % length; */

const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    const { squareWidth, squareHeight, widthBoard, heightBoard } = handleSize(
        ctx,
    );

    ctx.fillStyle = 'black';

    for (let i = 0; i < PIECE; i++) {
        ctx.fillRect(i * squareWidth, 0, 1, heightBoard);
    }

    for (let i = 0; i < PIECE; i++) {
        ctx.fillRect(0, i * squareHeight, widthBoard, 1);
    }

    ctx.fillStyle = 'lime';
    ctx.fillRect(0, 0, squareWidth, squareHeight);
};

export default draw;
