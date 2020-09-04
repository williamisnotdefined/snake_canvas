import getPixelRatio from '@helpers/getPixelRatio';
import { PIECE } from '../constants';

export default function handleSize(ctx: CanvasRenderingContext2D) {
    const ratio = getPixelRatio(ctx);
    const originalWidth = Number(ctx.canvas.getAttribute('data-width'));
    const originalHeight = Number(ctx.canvas.getAttribute('data-height'));

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
