import { useEffect, useRef } from 'react';

import getPixelRatio from '../helpers/getPixelRatio';

const useSnakeCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;

        const ratio = getPixelRatio(context);
        const width = Number(
            getComputedStyle(canvas).getPropertyValue('width').slice(0, -2),
        );
        const height = Number(
            getComputedStyle(canvas).getPropertyValue('height').slice(0, -2),
        );

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        let rafId: number;
        let i = 0;

        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();

            context.arc(
                canvas.width / 2,
                canvas.height / 2,
                (canvas.width / 2) * Math.abs(Math.cos(i)),
                0,
                2 * Math.PI,
            );

            context.fill();

            i += 0.05;
            rafId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(rafId);
        };
    });

    return {
        canvasRef,
    };
};

export default useSnakeCanvas;
