import getPixelRatio from '@helpers/getPixelRatio';
import { PIECE } from '../constants';

export default function handleSize(ctx: CanvasRenderingContext2D) {
    const ratio = getPixelRatio(ctx);
    const { width: originalWidth, height: originalHeight } = ctx.canvas;

    const minorSize = Math.min(originalWidth, originalHeight);

    const boardSquare = Math.floor(minorSize / PIECE);

    const boardSize = boardSquare * PIECE * ratio;

    ctx.canvas.style.width = `${boardSize}px`;
    ctx.canvas.style.height = `${boardSize}px`;
    ctx.canvas.width = boardSize;
    ctx.canvas.height = boardSize;

    return {
        boardSquare,
        boardSize,
    };
}
