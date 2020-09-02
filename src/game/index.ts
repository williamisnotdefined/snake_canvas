import render from './render';
import createKeyboardListener from './keyboardControls';
import createGame from './game';

const keyboard = createKeyboardListener(document);

function Setup() {
    const game = createGame();

    keyboard.registerPlayerId('1');
    keyboard.subscribe(game.movePlayer);

    function draw(ctx: CanvasRenderingContext2D, frameCount: number) {
        render(game.state, ctx, frameCount);
    }

    return { draw };
}

const { draw } = Setup();

export { draw };
