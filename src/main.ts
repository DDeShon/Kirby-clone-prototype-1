import { k } from "./kaboomCtx.ts";

async function gameSetup() {
    k.loadSprite("assets", "./kirby-like.png", {
        sliceX: 9,
        sliceY: 10,
    })
}

gameSetup();