import { PIECE } from '@game/constants';

import handleSize from './handleSize';

const render = (gameState: IGameState, ctx: CanvasRenderingContext2D, frameCount: number) => {
    const { squareWidth, squareHeight, widthBoard, heightBoard } = handleSize(ctx);
    ctx.clearRect(0, 0, widthBoard, heightBoard);
    ctx.fillStyle = 'black';

    for (let i = 0; i < PIECE; i++) {
        ctx.fillRect(i * squareWidth, 0, 1, heightBoard);
    }

    for (let i = 0; i < PIECE; i++) {
        ctx.fillRect(0, i * squareHeight, widthBoard, 1);
    }

    gameState.player.positions.forEach((position) => {
        ctx.fillStyle = gameState.player.current ? 'lime' : 'red';

        const x = (position % PIECE) * squareWidth;
        const y = Math.floor(position / PIECE) * squareHeight;

        ctx.fillRect(x, y, squareWidth, squareHeight);
    });
};

export default render;
