import render from './render';
import createKeyboardListener from './keyboardControls';
import createGame from './game';

const keyboard = createKeyboardListener(document);

function Setup(): ISetup {
    const game = createGame();

    keyboard.registerPlayerId('1');
    keyboard.subscribe(game.movePlayer);

    function canvasDidMount(): void {
        game.start();
    }

    function canvasWillUnmount(): void {
        game.destroy();
    }

    function draw(ctx: CanvasRenderingContext2D): void {
        render(game.state, ctx);
    }

    return { draw, canvasWillUnmount, canvasDidMount };
}

export const { draw, canvasWillUnmount, canvasDidMount } = Setup();
