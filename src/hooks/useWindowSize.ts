import { useEffect, useState, useCallback } from 'react';

const _getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
});

export default function useWindowSize() {
    const getSize = useCallback(() => _getSize(), []);

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getSize]); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}
