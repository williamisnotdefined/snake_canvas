type stateType = {
    observers: Array<Function>;
    playerId: string | null;
};

export default function createKeyboardListener(document: Document) {
    const state: stateType = {
        observers: [],
        playerId: null,
    };

    function registerPlayerId(playerId: string): void {
        state.playerId = playerId;
    }

    function subscribe(observerFunction: Function) {
        state.observers.push(observerFunction);
    }

    function notifyAll(command: IKeyboardCommand) {
        for (const observerFunction of state.observers) {
            observerFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(event: KeyboardEvent) {
        const keyPressed = event.key;

        const command: IKeyboardCommand = {
            type: 'move-player',
            keyPressed,
        };

        notifyAll(command);
    }

    return {
        subscribe,
        registerPlayerId,
    };
}
