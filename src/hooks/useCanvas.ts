import { useEffect, useRef } from 'react';

type DrawCallback = (
    context: CanvasRenderingContext2D,
    frameCount: number,
) => void;

type CanvasOptions = {
    context?: string;
};

const useCanvas = (draw: DrawCallback, options: CanvasOptions = {}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafId = useRef<number>(0);
    const frameCount = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const context = canvas.getContext(
            options.context || '2d',
        ) as CanvasRenderingContext2D;

        const render = () => {
            frameCount.current++;
            draw(context, frameCount.current);
            rafId.current = window.requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(rafId.current);
        };
    }, [draw, options.context]);

    return {
        canvasRef,
    };
};

export default useCanvas;
