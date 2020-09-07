// import getPixelRatio from '@helpers/getPixelRatio';
import { PIECE } from '../constants';

type HandleSize = {
    boardSquare: number;
    boardSize: number;
};

export default function handleSize(ctx: CanvasRenderingContext2D): HandleSize {
    // const ratio = getPixelRatio(ctx);
    const originalWidth = Number(ctx.canvas.getAttribute('data-width'));
    const originalHeight = Number(ctx.canvas.getAttribute('data-height'));

    const boardSize = Math.floor(Math.min(originalWidth, originalHeight));

    const boardSquare = boardSize / PIECE;

    ctx.canvas.style.width = `${boardSize}px`;
    ctx.canvas.style.height = `${boardSize}px`;
    ctx.canvas.width = boardSize;
    ctx.canvas.height = boardSize;

    return {
        boardSquare,
        boardSize,
    };
}
