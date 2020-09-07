import { PIECE } from '@game/constants';

import handleSize from './handleSize';

const render = (gameState: IGameState, ctx: CanvasRenderingContext2D): void => {
    const { boardSquare, boardSize } = handleSize(ctx);

    ctx.clearRect(0, 0, boardSize, boardSize);
    ctx.fillStyle = 'black';

    for (let i = 0; i < PIECE; i++) {
        ctx.fillRect(i * boardSquare, 0, 1, boardSize);
        ctx.fillRect(0, i * boardSquare, boardSize, 1);
    }

    gameState.player.positions.forEach((position) => {
        ctx.fillStyle = gameState.player.current ? 'lime' : 'red';

        const x = (position % PIECE) * boardSquare;
        const y = Math.floor(position / PIECE) * boardSquare;

        ctx.fillRect(x, y, boardSquare, boardSquare);
    });
};

export default render;
