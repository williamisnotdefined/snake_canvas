import { useEffect, useState, useCallback } from 'react';

type TwindowSize = { width: number; height: number };

const _getSize = (): TwindowSize => ({
    width: window.innerWidth,
    height: window.innerHeight,
});

export default function useWindowSize(): TwindowSize {
    const getSize = useCallback(() => _getSize(), []);

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        function handleResize(): void {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getSize]); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}
