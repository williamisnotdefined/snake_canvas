type observableCallbacks = (command: IKeyboardCommand) => void;

interface ICreateKeyboardListener {
    subscribe(observerFunction: observableCallbacks): void;
    registerPlayerId(playerId: string): void;
}

type stateType = {
    observers: Array<observableCallbacks>;
    playerId: string | null;
};

export default function createKeyboardListener(document: Document): ICreateKeyboardListener {
    const state: stateType = {
        observers: [],
        playerId: null,
    };

    function registerPlayerId(playerId: string): void {
        state.playerId = playerId;
    }

    function subscribe(observerFunction: observableCallbacks): void {
        state.observers.push(observerFunction);
    }

    function notifyAll(command: IKeyboardCommand): void {
        for (const observerFunction of state.observers) {
            observerFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(event: KeyboardEvent): void {
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
