import getPixelRatio from '@helpers/getPixelRatio';

import { PIECE } from './constants';
// import { width, height } from './size'

/* const getIndex = (index: number, length: number): number =>
    ((index % length) + length) % length; */

const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    const ratio = getPixelRatio(ctx);

    const { width: cWidth, height: cHeight } = ctx.canvas;

    const linesW = Math.floor(cWidth / PIECE);
    const linesH = Math.floor(cHeight / PIECE);

    const width = linesW * PIECE * ratio;
    const height = linesH * PIECE * ratio;

    ctx.canvas.style.width = `${width}px`;
    ctx.canvas.style.height = `${height}px`;

    console.log('height: ', height);

    ctx.fillStyle = 'black';

    for (let i = 0; i < PIECE; i++) {
        ctx.fillRect(i * linesW, 0, 1, height);
    }

    for (let i = 0; i < PIECE; i++) {
        ctx.fillRect(0, i * linesH, width, 1);
    }

    /* for (let i = 0; i * lines < width; i++) {
        console.log(
            'i no pixel ',
            i * lines,
            'width: ',
            width,
            'ea: ',
            width / 25,
            'lines: ',
            lines,
        );
        //ctx.fillRect(0, i * lines, width, 1);
        ctx.fillRect(i * lines, 0, 1, height);
    } */

    /* for (let i = 0; i < 625; i++) {
        const x = getIndex(i, 25) * lines + 2;

        const fixY = i % 25 === 0 ? Math.ceil(i / 25) + 1 : Math.ceil(i / 25);
        const y = Math.max(19.8 * fixY, 19.8);

        ctx.fillText(`${i}`, x, y);
    } */

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, height - 1, width, 1);
    ctx.fillRect(width - 1, 0, 1, height);
    /*

    /* ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50); */
};

export default draw;
