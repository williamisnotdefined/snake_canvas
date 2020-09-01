import { useEffect, useRef } from 'react';

type DrawCallback = (
    context: CanvasRenderingContext2D,
    frameCount: number,
) => void;

interface ICanvasConfig {
    context?: string;
    canvasWillDraw?(): void;
    canvasDidDraw?(): void;
}

const defaultConfig = {
    context: '2d',
    canvasWillDraw: () => {},
    canvasDidDraw: () => {},
};

const useCanvas = (
    draw: DrawCallback,
    config: ICanvasConfig = defaultConfig,
) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafId = useRef<number>(0);
    const frameCount = useRef<number>(0);

    const { context, canvasWillDraw, canvasDidDraw } = {
        ...defaultConfig,
        ...config,
    };

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const ctx = canvas.getContext(
            context || '2d',
        ) as CanvasRenderingContext2D;

        const render = () => {
            frameCount.current++;

            canvasWillDraw();
            draw(ctx, frameCount.current);
            canvasDidDraw();

            rafId.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(rafId.current);
        };
    }, [draw, context, canvasWillDraw, canvasDidDraw]);

    return {
        canvasRef,
    };
};

export default useCanvas;

/*
import getPixelRatio from '../helpers/getPixelRatio';

const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    const ratio = getPixelRatio(ctx);
    const width = ctx.canvas.width * ratio;
    const height = ctx.canvas.height * ratio;

    ctx.canvas.style.width = `${width}px`;
    ctx.canvas.style.height = `${height}px`;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'lime';
    ctx.fillRect(0, 0, 15, 15);

    //ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    //ctx.fillRect(30, 30, 50, 50);

};

export default draw;*/
