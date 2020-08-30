const getPixelRatio = (context: CanvasRenderingContext2D) => {
    const backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        1;

    return (window.devicePixelRatio || 1) / backingStore;
};

export default getPixelRatio;
