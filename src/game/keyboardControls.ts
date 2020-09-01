type stateType = {
    observers: Array<Function>;
    playerId: string | null;
};

type commandType = {
    type: string;
    playerId: string | null;
    keyPressed: string;
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

    function notifyAll(command: commandType) {
        for (const observerFunction of state.observers) {
            observerFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(event: KeyboardEvent) {
        const keyPressed = event.key;

        const command: commandType = {
            type: 'move-player',
            playerId: state.playerId,
            keyPressed,
        };

        notifyAll(command);
    }

    return {
        subscribe,
        registerPlayerId,
    };
}
