import { getIndexByColumn, getIndexByLine } from '@helpers/getIndex';
import { PIECE, TOTAL_PIECES } from './constants';

export default function Game() {
    const state: IGameState = {
        players: [{ id: '1', positions: [0], current: true }],
        fruits: [],
    };

    function movePlayer(command: IKeyboardCommand) {
        // notifyAll(command);

        const acceptedMoves: IAcceptedMoves = {
            ArrowUp(player: IPlayer) {
                player.positions = [getIndexByColumn(player.positions[0] - PIECE, TOTAL_PIECES)];
            },
            ArrowRight(player: IPlayer) {
                player.positions = [getIndexByLine(player.positions[0], 1)];
            },
            ArrowDown(player: IPlayer) {
                player.positions = [getIndexByColumn(player.positions[0] + PIECE, TOTAL_PIECES)];
            },
            ArrowLeft(player: IPlayer) {
                player.positions = [getIndexByLine(player.positions[0], -1)];
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
