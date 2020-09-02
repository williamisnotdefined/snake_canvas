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
