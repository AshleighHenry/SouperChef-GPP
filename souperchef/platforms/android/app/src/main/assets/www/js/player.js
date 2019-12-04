/**
 * Player class.
 * 
 * @class
 *
 */
class Player
{
    /**
     * Creates an instance of Player.
     * 
     * @param {Context} context This is the execution context.
     * @param {Document} document A reference to the document.
     *
     * @constructor
     */
    constructor(context, document)
    {
        // Set reference to context
        this.ctx = context;

        // Set reference to document
        this.document = document;

        // Prevent scrolling during touchstart events
        this.document.addEventListener('touchstart', function(e) {e.preventDefault();}, {passive: false});

        // Handle touchstart event
        this.document.addEventListener("touchstart", () => this.onTouchStart(event));

        // Handle touchmove event
        this.document.addEventListener("touchmove", () => this.onTouchMove(event));

        // Handle touchend event
        this.document.addEventListener("touchend", () => this.onTouchEnd(event));

        // Player sprite
        this.sprite = new Image();
        this.sprite.src = 'img/sprite_sheets/player_sprite_sheet.png';

        // Create Vector2 to use for player's position and set default position
        this.position = new Vector2(430, 300);

        // Create Vector2 to use for player's end position
        this.endPosition = new Vector2();

        // Create Vector2 to hold directional vector for player's movement
        this.direction = new Vector2();

        // Stores the current distance between the player's current position and the player's end position
        this.distance = 0.0;

        // Movement vector
        this.movementVector = new Vector2();

        // Player speed
        this.speed = 3.0;

        // This bool is true if the player is moving
        this.moving = false;

        // Settings for sprite animator
        this.spritesAcross = 8; // This is the number of animation frames in one horizontal row
        this.spritesDown = 2; // This is the amount of rows in the sprite sheet
        this.spriteWidth = 64;
        this.spriteHeight = 140;
        this.slicePosX = 0;
        this.slicePosY = 0;

       // console.log(this.spriteWidth + ", " + this.spriteHeight);
    }  

   /**
    * Checks for touchstart.
    * 
    */
    onTouchStart(e)
    {
        // Set moving to true
        this.moving = true;

        // The end position is wherever the user has touched the screen
        this.endPosition.x = e.touches[0].clientX;
        this.endPosition.y = e.touches[0].clientY;

        // Get directional vector based on current position and end position
        this.direction = this.endPosition.subtract(this.position);

        // Normalise the directional vector
        this.direction = this.direction.unit();

        // Multiply the directional vector with the speed value
        this.movementVector = this.direction.multiply(this.speed);
    }

   /**
    * Checks for touchmove.
    * 
    */
   onTouchMove(e)
   {
        
   }

   /**
    * Checks for touchend.
    * 
    */
    onTouchEnd(e)
    {
        // Nothing needed here (yet!)
    }

   /**
    * Updates the player's sprite.
    * 
    */
   update()
   {
       if (this.moving === true)
       {
           this.position = this.position.add(this.movementVector);
           this.distance = this.position.distance(this.endPosition);

           if (this.distance < 10.0)
           {
               this.moving = false;
           }           
       }
   }

   /**
    * Draws the player's sprite.
    * 
    */
    draw()
    {
        this.ctx.drawImage(this.sprite, this.slicePosX, this.slicePosY, this.spriteWidth, this.spriteHeight, this.position.x, this.position.y, 64, 140);
    }
}