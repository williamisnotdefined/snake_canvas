import { PIECE } from '@game/constants';

export const getIndexByColumn = (index: number, length: number): number => ((index % length) + length) % length;

export const getIndexByLine = (position: number, incrementor: number): number => {
    const line = Math.floor(position / PIECE) + 1;
    const maxLineIndex = line * PIECE - 1;
    const minLineIndex = Math.max(line - 1, 0) * PIECE;

    const nextPosition = position + incrementor;

    if (nextPosition > maxLineIndex) {
        return minLineIndex;
    } else if (nextPosition < minLineIndex) {
        return maxLineIndex;
    }

    return nextPosition;
};
