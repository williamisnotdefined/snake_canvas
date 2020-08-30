import getPixelRatio from '../helpers/getPixelRatio';

const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    const ratio = getPixelRatio(ctx);
    const width = ctx.canvas.width * ratio;
    const height = ctx.canvas.height * ratio;

    ctx.canvas.style.width = `${width}px`;
    ctx.canvas.style.height = `${height}px`;

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(
        width / 2,
        height / 2,
        (width / 4) * Math.abs(Math.cos(frameCount * 0.05)),
        0,
        2 * Math.PI,
    );
    ctx.fill();
};

export default draw;
