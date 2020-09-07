import { useEffect, useRef } from 'react';

type DrawCallback = (context: CanvasRenderingContext2D) => void;

interface ICanvasConfig {
    context?: string;
    canvasWillDraw?(): void;
    canvasDidDraw?(): void;
    canvasWillUnmount?(): void;
    canvasDidMount?(): void;
}

const defaultConfig = {
    context: '2d',
    canvasWillDraw: () => {},
    canvasDidDraw: () => {},
    canvasWillUnmount: () => {},
    canvasDidMount: () => {},
};

const useCanvas = (draw: DrawCallback, config: ICanvasConfig = defaultConfig): React.RefObject<HTMLCanvasElement> => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafId = useRef<number>(0);
    const frameCount = useRef<number>(0);

    const { context, canvasWillDraw, canvasDidDraw, canvasWillUnmount, canvasDidMount } = {
        ...defaultConfig,
        ...config,
    };

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const ctx = canvas.getContext(context || '2d') as CanvasRenderingContext2D;
        canvasDidMount();

        const render = (): void => {
            frameCount.current++;

            canvasWillDraw();
            draw(ctx);
            canvasDidDraw();

            rafId.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            canvasWillUnmount();
            cancelAnimationFrame(rafId.current);
        };
    }, [draw, context, canvasWillDraw, canvasDidDraw, canvasWillUnmount, canvasDidMount]);

    return canvasRef;
};

export default useCanvas;
