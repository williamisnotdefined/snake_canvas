interface IPlayer {
    positions: Array<number>;
    id: string;
    current: boolean;
}

interface IGameState {
    players: Array<IPlayer>;
    fruits: Array<number>;
}

interface IKeyboardCommand {
    type: string;
    playerId: string;
    keyPressed: string;
}

interface IAcceptedMoves {
    [key: string]: (player: IPlayer) => void;
}
