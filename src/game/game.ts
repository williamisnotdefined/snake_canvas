import { getIndexByColumn, getIndexByLine, incrementSnakeBody, snakeSelfCollison } from '@helpers/snakeMath';
import { PIECE, TOTAL_PIECES, SNAKE_DIRECTION } from './constants';

export default function Game() {
    const state: IGameState = {
        player: { id: '1', positions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], current: true },
        enemies: [],
        fruits: [],
        direction: SNAKE_DIRECTION.RIGHT,
    };

    let intervalHandler: number;

    function start() {
        intervalHandler = setInterval(() => {
            walk();
        }, 100);
    }

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

    function walk() {
        const { player, direction } = state;
        walkMap[direction](player);
    }

    function movePlayer(command: IKeyboardCommand) {
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

    function gameOver() {
        state.player = { id: '1', positions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], current: true };
        state.direction = SNAKE_DIRECTION.RIGHT;
    }

    function destroy() {
        clearInterval(intervalHandler);
    }

    return { state, movePlayer, start, destroy };
}
