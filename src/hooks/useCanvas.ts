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

            rafId.current = window.requestAnimationFrame(render);
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
