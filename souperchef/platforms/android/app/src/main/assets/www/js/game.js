/**
 * Game class.
 *
 * @class
 *
 */
class Game	
{
   /**
    * Creates an instance of Game.
    *
    * @constructor
    */
   constructor(context, document)
   {
      this.ctx = context;
      this.document = document;
      this.player = new Player(this.ctx, this.document);

      // Set update function to continuously loop
      this.boundRecursiveUpdate = () => this.update(this);
   }

   /**
    * Initialises the game world.
    *
    */
   initWorld()
   {
      canvas.id = "mycanvas";
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);
      canvas = document.getElementById('mycanvas');

      // Tiled floor
      this.floorSprite = new Image();
      this.floorSprite.src = 'img/prototype_background.png';
   }

   /**
    * Updates the game world.
    *
    */
   update()
   {
      this.draw();
      window.requestAnimationFrame(this.boundRecursiveUpdate);      
   }

   /**
    * Draws the game world.
    *
    */
   draw()
   {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.ctx.drawImage(this.floorSprite, 0, 0);
      this.player.draw(this.ctx);
      this.player.update();
   }
}