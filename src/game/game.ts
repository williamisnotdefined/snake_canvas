import { getIndexByColumn, getIndexByLine, incrementSnakeBody, snakeSelfCollison } from '@helpers/snakeMath';
import { PIECE, TOTAL_PIECES, SNAKE_DIRECTION } from './constants';

export default function Game(): IGame {
    const state: IGameState = {
        player: { id: '1', positions: [0], current: true },
        enemies: [],
        fruits: [],
        direction: SNAKE_DIRECTION.RIGHT,
    };

    let intervalHandler: number;

    const walkMap = {
        [SNAKE_DIRECTION.UP]: function (player: IPlayer) {
            const snake = player.positions;
            const { snakeBody, head } = incrementSnakeBody(snake);
            const nextHead = getIndexByColumn(head - PIECE, TOTAL_PIECES);

            if (snakeSelfCollison(snake, nextHead)) {
                gameOver();
            }

            player.positions = [...snakeBody, nextHead];
        },
        [SNAKE_DIRECTION.RIGHT]: function (player: IPlayer) {
            const snake = player.positions;
            const { snakeBody, head } = incrementSnakeBody(snake);
            const nextHead = getIndexByLine(head, 1);

            if (snakeSelfCollison(snake, nextHead)) {
                gameOver();
            }

            player.positions = [...snakeBody, nextHead];
        },
        [SNAKE_DIRECTION.DOWN]: function (player: IPlayer) {
            const snake = player.positions;
            const { snakeBody, head } = incrementSnakeBody(player.positions);
            const nextHead = getIndexByColumn(head + PIECE, TOTAL_PIECES);

            if (snakeSelfCollison(snake, nextHead)) {
                gameOver();
            }

            player.positions = [...snakeBody, nextHead];
        },
        [SNAKE_DIRECTION.LEFT]: function (player: IPlayer) {
            const snake = player.positions;
            const { snakeBody, head } = incrementSnakeBody(snake);
            const nextHead = getIndexByLine(head, -1);

            if (snakeSelfCollison(snake, nextHead)) {
                gameOver();
            }

            player.positions = [...snakeBody, nextHead];
        },
    };

    function walk(): void {
        const { player, direction } = state;
        walkMap[direction](player);
    }

    function movePlayer(command: IKeyboardCommand): void {
        // notifyAll(command);

        const acceptedMoves: IAcceptedMoves = {
            ArrowUp() {
                state.direction = SNAKE_DIRECTION.UP;
            },
            ArrowRight() {
                state.direction = SNAKE_DIRECTION.RIGHT;
            },
            ArrowDown() {
                state.direction = SNAKE_DIRECTION.DOWN;
            },
            ArrowLeft() {
                state.direction = SNAKE_DIRECTION.LEFT;
            },
        };

        const { keyPressed } = command;
        const moveFunction = acceptedMoves[keyPressed];

        if (moveFunction) {
            moveFunction();
        }
    }

    function start(): void {
        intervalHandler = setInterval(() => {
            walk();
        }, 100);
    }

    function gameOver(): void {
        state.player = { id: '1', positions: [0], current: true };
        state.direction = SNAKE_DIRECTION.RIGHT;
    }

    function destroy(): void {
        clearInterval(intervalHandler);
    }

    return { state, movePlayer, start, destroy };
}
