import { getIndexByColumn, getIndexByLine, incrementSnakeBody } from '@helpers/snakeMath';
import { PIECE, TOTAL_PIECES } from './constants';

export default function Game() {
    const state: IGameState = {
        players: [{ id: '1', positions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], current: true }],
        fruits: [],
    };

    function movePlayer(command: IKeyboardCommand) {
        // notifyAll(command);

        const acceptedMoves: IAcceptedMoves = {
            ArrowUp(player: IPlayer) {
                const { snakeBody, head } = incrementSnakeBody(player.positions);
                player.positions = [...snakeBody, getIndexByColumn(head - PIECE, TOTAL_PIECES)];
            },
            ArrowRight(player: IPlayer) {
                const { snakeBody, head } = incrementSnakeBody(player.positions);
                player.positions = [...snakeBody, getIndexByLine(head, 1)];
            },
            ArrowDown(player: IPlayer) {
                const { snakeBody, head } = incrementSnakeBody(player.positions);
                player.positions = [...snakeBody, getIndexByColumn(head + PIECE, TOTAL_PIECES)];
            },
            ArrowLeft(player: IPlayer) {
                const { snakeBody, head } = incrementSnakeBody(player.positions);
                player.positions = [...snakeBody, getIndexByLine(head, -1)];
            },
        };

        const { keyPressed, playerId } = command;
        const player = state.players.find(({ id }) => id === playerId);
        const moveFunction = acceptedMoves[keyPressed];

        if (player && moveFunction) {
            moveFunction(player);
            // checkForFruitCollision(playerId);
        }
    }

    return { state, movePlayer };
}
