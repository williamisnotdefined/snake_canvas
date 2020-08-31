import getPixelRatio from '../helpers/getPixelRatio';

const getIndex = (index: number, length: number): number =>
    ((index % length) + length) % length;

const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    const ratio = getPixelRatio(ctx);
    const width = ctx.canvas.width * ratio;
    const height = ctx.canvas.height * ratio;

    ctx.canvas.style.width = `${width}px`;
    ctx.canvas.style.height = `${height}px`;

    const lines = Math.round(width / 25);

    // console.log('lines ', lines);
    ctx.fillStyle = 'black';

    for (let i = 0; i * lines < width; i++) {
        // console.log(i * lines);
        ctx.fillRect(0, i * lines, width, 1);
        ctx.fillRect(i * lines, 0, 1, height);
    }

    for (let i = 0; i < 625; i++) {
        const x = getIndex(i, 25) * lines + 2;

        const fixY = i % 25 === 0 ? Math.ceil(i / 25) + 1 : Math.ceil(i / 25);
        const y = Math.max(19.8 * fixY, 19.8);

        ctx.fillText(`${i}`, x, y);
    }

    ctx.fillRect(1, 500 - 1, width, 1);
    ctx.fillRect(500 - 1, 1, 1, height);

    /* ctx.fillStyle = 'pink';
    ctx.fillRect(0, 499, width, 1); */
    /*

    /* ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50); */
};

export default draw;
