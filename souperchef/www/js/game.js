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

      // Game loop stuff
      this.lastTime = (new Date()).getTime();
      this.currentTime = 0,
      this.deltaTime = 0;
      this.timePerFrame = 1.0 / 30.0; // 30 fps

      // Set update function to continuously loop
      this.boundRecursiveUpdate = () => this.gameLoop(this);
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

      // Create instance of classes needed
      this.gamePlay = new GamePlay(this.ctx, this.document);
   }

   /**
    * Updates the game world.
    *
    */
   gameLoop()
   {  
      this.currentTime = (new Date()).getTime(); 
      this.deltaTime = (this.currentTime - this.lastTime) / 1000;  

      if (this.deltaTime > this.timePerFrame)
      {
         this.update();
         this.lastTime = (new Date()).getTime(); 
      } 
      
      this.draw();
      window.requestAnimationFrame(this.boundRecursiveUpdate);
   }

   /**
    * Update.
    *
    */
   update()
   {
      this.gamePlay.update();     
   }

   /**
    * Draw.
    *
    */
   draw()
   {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.gamePlay.draw(this.ctx);           
   }
}