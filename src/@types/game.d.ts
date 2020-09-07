interface IGame {
    state: IGameState;
    movePlayer(command: IKeyboardCommand): void;
    start(): void;
    destroy(): void;
}

interface ISetup {
    draw(ctx: CanvasRenderingContext2D): void;
    canvasWillUnmount(): void;
    canvasDidMount(): void;
}

interface IPlayer {
    positions: Array<number>;
    id: string;
    current: boolean;
}

interface IGameState {
    player: IPlayer;
    enemies: Array<IPlayer>;
    fruits: Array<number>;
    direction: number;
}

interface IKeyboardCommand {
    type: string;
    keyPressed: string;
}

interface IAcceptedMoves {
    [key: string]: () => void;
}

interface SnakeDirections {
    ['UP']: number;
    ['RIGHT']: number;
    ['DOWN']: number;
    ['LEFT']: number;
}
