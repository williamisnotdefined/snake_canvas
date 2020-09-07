import { PIECE } from '@game/constants';

interface IIncrementBody {
    snakeBody: number[];
    head: number;
}

export const getIndexByColumn = (index: number, length: number): number => ((index % length) + length) % length;

export const getIndexByLine = (position: number, incrementor: number): number => {
    const line = Math.floor(position / PIECE) + 1;
    const maxLineIndex = line * PIECE - 1;
    const minLineIndex = Math.max(line - 1, 0) * PIECE;

    const nextPosition = position + incrementor;

    if (nextPosition > maxLineIndex) {
        return minLineIndex;
    }

    if (nextPosition < minLineIndex) {
        return maxLineIndex;
    }

    return nextPosition;
};

export const incrementSnakeBody = (snake: Array<number>): IIncrementBody => {
    const head = snake[snake.length - 1];
    const tail = snake[0];

    return {
        snakeBody: snake.filter((piece) => piece !== tail),
        head,
    };
};

export const snakeSelfCollison = (snake: Array<number>, nextHead: number): boolean => {
    return !!snake.find((piece) => piece === nextHead);
};
