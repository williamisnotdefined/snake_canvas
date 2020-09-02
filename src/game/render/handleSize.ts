import getPixelRatio from '@helpers/getPixelRatio';
import { PIECE } from '../constants';

export default function handleSize(ctx: CanvasRenderingContext2D) {
    const ratio = getPixelRatio(ctx);
    const { width: cWidth, height: cHeight } = ctx.canvas;

    const squareWidth = Math.floor(cWidth / PIECE);
    const squareHeight = Math.floor(cHeight / PIECE);

    const widthBoard = squareWidth * PIECE * ratio;
    const heightBoard = squareHeight * PIECE * ratio;

    ctx.canvas.style.width = `${widthBoard}px`;
    ctx.canvas.style.height = `${heightBoard}px`;

    return {
        squareWidth,
        squareHeight,
        widthBoard,
        heightBoard,
    };
}
