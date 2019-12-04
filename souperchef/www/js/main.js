/**
 * SouperChef.
 *
 * @authors: Alan 'Two Sheds' Bolger and Ashleigh 'No Sheds' Henry
 *
 */

var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');

/**
 * Main.
 * 
 */
function main()
{
    var game = new Game(ctx, document);
    ImageLoader.loadImages();

    // Initialise game world and run game loop
    game.initWorld();
    game.gameLoop();
}
